<template>
  <div class="bg-berry-light p-3 mt-4">
    {{ this.form.plan.id }} Month License
    <span class="color-berry headline-title-sm ml-2">${{ planPrice }}</span>
  </div>
</template>
<script>
export default {
  props: {
    form: Object,
  },
  computed: {
    planPrice() {
      return this.$store.state.planPrice;
    },
  },
};
</script>
