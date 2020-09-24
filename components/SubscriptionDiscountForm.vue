<template>
  <!-- price on top -->
  <section class="price-sticky-head bg-secondary-accent">
    <div class="boxed">
      <div class="row align-items-center">
        <div class="col-12 col-md-5 text-white">
          <h2 class="headline-title m-0">$25 OFF</h2>
          <p>
            <b class="color-secondary">Subscribe</b> to receive our occasional
            emails and receive
            <b class="fw-bold headline-subtitle">$25 off</b> a new subscription.
          </p>
        </div>
        <div
          class="col-12 col-md-7 mt-4 mt-md-0 discount-container"
          :class="{ 'discount-applied': success }"
        >
          <div class="discount-message text-white text-center">
            <div class="wrap-message">
              <h3 class="headline-title-sm color-secondary">
                Thank you!
              </h3>
              <p>
                Use your email <strong>{{ form.email }}</strong> when you
                purchase a new subscription, and you will automatically receive
                $25 off the listed price.
              </p>
            </div>
          </div>
          <form @submit.prevent="sendSubscription" class="needs-validation">
            <div class="row">
              <div class="col-12 col-lg">
                <div class="form-group mb-lg-0">
                  <input
                    type="text"
                    class="form-control form-control-lg fw-light w-100"
                    id="first-name"
                    placeholder="Your name*"
                    required
                    v-model="form.name"
                    :disabled="sent"
                    :readonly="sent"
                  />
                </div>
              </div>
              <div class="col-12 col-lg">
                <div class="form-group mb-lg-0">
                  <input
                    type="email"
                    class="form-control form-control-lg fw-light w-100"
                    id="email"
                    placeholder="your@email.com"
                    required
                    v-model="form.email"
                    :class="{ 'is-invalid': error }"
                    :disabled="sent"
                    :readonly="sent"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-auto">
                <div>
                  <button
                    type="submit"
                    class="btn-lg btn-secondary btn-oval"
                    :disabled="sending"
                  >
                    Send
                    <div class="spinner-border text-light" role="status" v-if="sending">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
      },
      sending: false,
      sent: false,
      success: false,
      error: false,
    };
  },
  methods: {
    sendSubscription() {
      this.sending = true;
      if (this.form.name == "" || this.form.email == "" || !this.validEmail()) {
        this.error = true;
        return false;
      }

      this.$axios
        .$post(process.env.api + "subscription", this.form)
        .then((res) => {
          this.success = true;
        })
        .finally(() => {
          this.sent = true;
          this.sending = false;
        });

      this.sent = true;
    },
    validEmail: function() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.form.email);
    },
  },
};
</script>
