<template>
  <section class="subscription-section bg-berry text-white">
    <div class="section-link" id="subscription"></div>
    <div class="boxed subscription-wrap">
      <div class="row">
        <div class="col">
          <div class="text-center boxed">
            <h2
              class="headline-title-xl color-secondary title-boxed title-font"
            >
              Subscription
            </h2>
            <div class="split bg-white my-4"></div>
            <p class="headline-subtitle mx-w-800 fw-light mx-auto">
              Complete the program, we guarantee you will beat the average
              ABSITE score for your PGY Level, and improve your ABSITE
              percentile
            </p>
          </div>
          <div class="mt-5 row justify-content-center">
            <Subscription v-for="(plan, p) in plans" :plan="plan" :key="p" />
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
export default {
  name: "SectionSubsctiptions",
  computed: {
    plans() {
      return this.$store.state.plans;
    },
  },
};
</script>
