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
                        Once you pay you will receive an email with instructions
                        on how to get started, and best practices on how to
                        leverage this program to support your training!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="card-element">
                        Credit or debit card
                      </label>
                      <div>
                        <div id="card-element">
                          <!-- A Stripe Element will be inserted here. -->
                        </div>
                      </div>
                      <!-- Used to display form errors. -->
                      <div
                        id="card-errors"
                        class="text-danger font-weight-bold"
                        role="alert"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="row mt-2 justify-content-center">
                  <div class="col-auto">
                    <a href="#" id="btnPay" class="btn-lg stripe">Pay</a>
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
export default {
  props: {
    form: Object,
  },
  dta() {
    return {
      stripe: null,
      card: "Soy la tarjeta",
    };
  },
  mounted() {
    this.stripe = this.$stripe.import();
    console.log(this.stripe)
    const elements = this.$stripe.import().elements();
    console.log("stripe import elements", elements);
    const card = elements.create("card", {});
    // Add an instance of the card Element into the `card-element` <div>
    card.mount("#card-element");

    // Handle real-time validation errors from the card Element.
    card.on("change", function(event) {
      console.log("card change");
      var displayError = document.getElementById("card-errors");
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = "";
      }
    });

    // Handle form submission.
    var btnPay = document.getElementById("btnPay");
    btnPay.addEventListener("click", function(event) {
      event.preventDefault();

      console.log("this.stripe", this.stripe);

      this.stripe.createToken(card).then(function(result) {
        if (result.error) {
          // Inform the user if there was an error.
          var errorElement = document.getElementById("card-errors");
          errorElement.textContent = result.error.message;
        } else {
          // Send the token to your server.
          stripeTokenHandler(result.token);
        }
      });
    });

    // Submit the form with the token ID.
    function stripeTokenHandler(token) {
      window.alert(token);
      // Insert the token ID into the form so it gets submitted to the server
      //var form = document.getElementById("payment-form");
      //var hiddenInput = document.createElement("input");
      // hiddenInput.setAttribute("type", "hidden");
      //hiddenInput.setAttribute("name", "stripeToken");
      // hiddenInput.setAttribute("value", token.id);
      // form.appendChild(hiddenInput);
      // Submit the form
      //form.submit();
    }
  },
  created() {
    let el = this.$stripe.import().elements();
    console.log("el", el.getElement("card"));
  },
  methods: {
    complete() {
      console.log(this.form);
      this.$axios
        .$post(process.env.api + "enrollment", { form: this.form })
        .then((res) => {
          console.log(res);
        });
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

a.stripe {
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

a.stripe:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  background-color: #43458b;
}
</style>
