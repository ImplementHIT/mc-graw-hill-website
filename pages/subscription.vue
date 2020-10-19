<template>
  <section class="subscription-section bg-berry text-white">
    <div class="boxed subscription-wrap">
      <div class="row">
        <div class="col">
          <div class="text-center boxed">
            <h2
              class="headline-title-xl color-secondary title-boxed title-font"
            >
              Subscription
            </h2>
            <p class=" headline-subtitle mx-w-800 mx-auto ">
              Complete the program, we guarantee you will beat the average
              ABSITE score for your PGY Level, and improve your ABSITE
              percentile
            </p>
          </div>

          <!-- steps -->
          <div>
            <div class="subscription-steps mx-w-500 mx-auto my-5">
              <ul class="nav nav-pills row justify-content-center" id="steps">
                <!-- ------------------------------------------------- -->
                <!-- agregar la clase "visited" al nav-item cuando el paso este finalizado -->

                <li
                  class="nav-item"
                  v-for="(step, k) in [
                    'payment',
                    'rotations',
                    'customize',
                    'onboarding',
                  ]"
                  :key="k"
                >
                  <div
                    class="nav-link"
                    :class="{
                      active: form.step == k + 1,
                      visited: form.step > k + 1,
                    }"
                    :id="step"
                    @click.prevent=""
                  >
                    <span>{{ k + 1 }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              class="tab-content mt-5 mx-w-800 mx-auto"
              id="content-subscription"
            >
              <!-- Step One -->
              <SectionFormStepOne :form="form" />

              <!-- Step Two -->
              <SectionFormStepTwo :form="form" @back="previousStep" />

              <!-- Step Three -->
              <SectionFormStepThree :form="form" @back="previousStep" />

              <!-- Step Four -->
              <SectionFormThankYou :form="form" />
            </div>
          </div>

          <div class="text-center mt-2 boxed white-text p-5">
            <small>
              *Predictive Assessment Exams can only be purchased with a
              SmartBank Subscription. Bundled Savings not applicable with other
              discounts. To apply other promotional discounts, add the SmartBank
              you want below, then add Form A in the shopping cart, then apply
              your code.
            </small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  head() {
    return {
      title: "Subscription",
    };
  },
  data() {
    return {
      form: {
        plan: 6,
        step: 1,
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        password: "",
        confirm_password: "",
        carrier_sms_charge_understanding: false,
        agree: false,
        school_country: "",
        school_name: "",
        school_grad_year: "",
        school_program: "",
        school_level: "",
        rotations: [
          { name: "", date_start: "", date_end: "", template: "" },
          { name: "", date_start: "", date_end: "", template: "" },
        ],
        file_absite_performance: null,
        file_logs: null,
        quantity: 5,
        charge: null,
      },
    };
  },
  created() {
    this.form.plan =
      typeof this.$route.query.plan !== "undefined" &&
      this.$store.state.plans.filter(
        (plan) => plan.id == this.$route.query.plan
      ).length
        ? this.$store.state.plans.filter(
            (plan) => plan.id == this.$route.query.plan
          )[0]
        : this.$store.state.plans[0];

    this.$store.commit("setPlanPrice", this.form.plan.price);
  },
  methods: {
    dummy() {
      this.form.first_name = "Julio";
      this.form.last_name = "Solis";
      this.form.email = "js" + new Date().getTime() + "@implementhit.com";
      this.form.mobile = "3186018448";
      this.form.password = "Password12!";
      this.form.confirm_password = "Password12!";
      this.form.carrier_sms_charge_understanding = true;
      this.form.school_country = "Foreign";
      this.form.school_name = "";
      this.form.school_grad_year = "1995";
      this.form.school_program = "AMITA Health Program";
      this.form.school_level = 5;
      this.form.agree = true;
      this.form.rotations = [
        {
          name: "Trauma",
          date_start: "2020-10-01",
          date_end: "2020-10-31",
          template: "1",
        },
        {
          name: "SICU",
          date_start: "2020-11-01",
          date_end: "2020-11-30",
          template: "12",
        },
      ];
    },
    previousStep() {
      this.form.step = this.form.step == 1 ? 1 : this.form.step - 1;
    },
  },
};
</script>
