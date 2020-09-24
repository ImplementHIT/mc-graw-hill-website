<template>
  <div>
    <section class="home-intro">
      <img
        src="~/assets/images/intro-background@1x.jpg"
        alt="MyPath-Surgery-banner"
        class="img-fluid d-md-none"
      />
      <div class="boxed">
        <div class="row">
          <div class="col-12 col-md-7 ">
            <div class="text-center text-md-left">
              <h2 class="headline-title color-berry">MyPath - Surgery</h2>
              <p class="headline-subtitle">
                Personalized ABSITE AND Rotation Prep
              </p>
            </div>
            <ul class="list-item-berry home-list home-description pt-4">
              <li>
                2,000 Questions
              </li>
              <li>
                McGraw Hill Surgery Content
              </li>
              <li>
                Upload your ABSITE performance report
              </li>
              <li>
                Upload your Rotation schedule
              </li>
              <li>
                Analytics and peer comparisons
              </li>
              <li>
                Your ABSITE percentile will increase, guaranteed!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <SubscriptionDiscountForm />

    <SectionPathSurgery />

    <SectionMedicalContent />

    <SectionYourRotation />

    <SectionAbsitePerformance />

    <SectionAdvanceQuiz />

    <SectionSubscriptions />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Landing",
    };
  },
};
</script>
