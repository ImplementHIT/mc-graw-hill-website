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
                        You will receive an email with instructions on how to
                        get started, and best practices on how to leverage this
                        program to support your training!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row mt-5 justify-content-center">
                  <div class="col-auto">
                    <a
                      href="#"
                      @click.prevent="complete"
                      class="btn-lg btn-secondary btn-oval"
                      >Finish</a
                    >
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
