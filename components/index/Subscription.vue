<template>
  <div class="col-auto my-3">
    <div class="card card-boxed">
      <div class="card-header text-center bg-secondary-accent text-white">
        <p class="headline-subtitle m-0">
            {{ plan.name }}
        </p>
      </div>
      <div class="card-body">
        <div class="text-center">
          <h5 class="headline-title color-secondary-accent">
            ${{ plan.price }}
          </h5>
          <h5 class="card-title fw-light color-dark">
            RotationPrep: Surgery
          </h5>
        </div>
        <div class="card-text my-4">
          <ul class="check-list-secondary-accent color-dark">
            <li v-for="(item,i) in plan.items" :key="i">
              <span>
                {{ item}}
              </span>
            </li>
          </ul>
        </div>
        <div class="text-center subscription-container-btn">
          <div class="pt-3">
            <nuxt-link
              :to="{ name: 'subscription', query: { plan: plan.id }}"
              class="btn btn-secondary btn-oval"
              >Subscribe</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { plan: Object },
  name: "Subscription",
};
</script>
