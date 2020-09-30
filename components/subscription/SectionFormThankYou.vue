<template>
  <div
    class="tab-pane fade"
    :class="{ active: form.step == 4, show: form.step == 4 }"
    id="onboarding-tab"
  >
    <div class="row">
      <div class="col-12 col-md pr-md-5 text-center">
        <form class="mx-auto subscription-form bg-white color-dark">
          <h2 class="headline-title-sm m-0 color-berry">
            Onboarding
          </h2>
          <!-- split -->
          <div class="split-berry my-4"></div>
          <div class="row align-items-center text-left">
            <div class="col-12 mt-3 mt-md-0">
              <form>
                <div class="my-4">
                  <div class="p-5 my-4 bg-berry-light">
                    <div class="form-group text-center">
                      <img
                        src="~/assets/images/subscription-2.png"
                        alt=""
                        class="img-fluid mb-2"
                        style="max-width:300px;"
                      />
                      <h2 class="headline-title-sm">
                        Thank you
                      </h2>
                      <p class="headline-subtitle">
                        You have successfully subscribed!
                      </p>
                      <p>
                        {{ message }} an email with instructions on how to get
                        started, and best practices on how to leverage this
                        program to support your training!
                      </p>
                    </div>
                  </div>
                </div>

                <div v-show="!complete">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="card-element">
                          Credit or debit card
                        </label>
                        <div>
                          <Card
                            locale="en"
                            class="stripe-card"
                            :stripe="stripeKey"
                            :class="{ cardNumberComplete }"
                            :options="stripeCardOptions"
                            @change="cardOnChange"
                          />
                        </div>
                        <!-- Used to display form errors. -->
                        <div class="text-danger font-weight-bold" v-if="error">
                          {{ error }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-2 justify-content-center">
                    <div class="col-auto">
                      <button
                        @click.prevent="pay"
                        class="btn-lg StripeElement--button"
                        :disabled="!cardNumberComplete"
                      >
                        Pay
                        <div
                          class="spinner-border text-light"
                          role="status"
                          v-if="sending"
                        >
                          <span class="sr-only">Loading...</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
//https://github.com/fromatob/vue-stripe-elements
import { Card, createToken } from "vue-stripe-elements-plus";
export default {
  props: {
    form: Object,
  },
  components: {
    Card,
  },
  data() {
    return {
      error: false,
      sending: false,
      complete: false,
      cardNumberComplete: false,
      stripeKey: process.env.stripeKey,
      message: "Once you pay you will receive",
      stripeCardOptions: {
        hidePostalCode: true,
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        },
      },
    };
  },
  methods: {
    cardOnChange({ complete, error }) {
      this.error = false;
      if (typeof error !== "undefined") {
        this.error = error.message;
      }
      this.cardNumberComplete = complete;
    },
    pay() {
      this.sending = true;
      this.cardNumberComplete = false;

      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken()
        .then((data) => {
          this.form.charge = {
            source: data.token.id,
            amount: this.$store.state.planPrice * 100,
            description:
              "McGraw Hill - " +
              this.form.plan.id +
              " months MyPath - Surgery $" +
              this.form.plan.price,
            email: this.form.email,
          };

          this.sendData();
        })
        .catch((error) => console.log(error));
    },
    sendData() {
      this.$axios
        .$post(process.env.api + "enrollment", this.prepareFormData(), {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.message = "In the next 12 hours, you will receive";
        })
        .finally(() => {
          this.sending = false;
          this.complete = true;
        });
    },
    prepareFormData() {
      let formData = new FormData();

      formData.append("plan", JSON.stringify(this.form.plan));
      formData.append("first_name", this.form.first_name);
      formData.append("last_name", this.form.last_name);
      formData.append("email", this.form.email);
      formData.append("mobile", this.form.mobile);
      formData.append("password", this.form.password);
      formData.append("confirm_password", this.form.confirm_password);
      formData.append(
        "carrier_sms_charge_understanding",
        this.form.carrier_sms_charge_understanding
      );
      formData.append("agree", this.form.agree);
      formData.append("school_country", this.form.school_country);
      formData.append("school_name", this.form.school_name);
      formData.append("school_grad_year", this.form.school_grad_year);
      formData.append("school_program", this.form.school_program);
      formData.append("school_level", this.form.school_level);
      formData.append("number_of_questions", this.form.quantity);

      formData.append("rotations", JSON.stringify(this.form.rotations));
      formData.append("charge", JSON.stringify(this.form.charge));

      formData.append(
        "file_absite_performance",
        this.form.file_absite_performance
      );
      formData.append("file_logs", this.form.file_logs);

      return formData;
    },
  },
};
</script>
<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
.StripeElement--button {
  border: none;
  border-radius: 4px;
  outline: none;
  text-decoration: none;
  color: #fff;
  background: #32325d;
  white-space: nowrap;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-decoration: none;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
  float: left;
  margin-left: 12px;
}

.StripeElement--button:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  background-color: #43458b;
}

.StripeElement--button:disabled {
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  background-color: #7a7cb6;
}
</style>
