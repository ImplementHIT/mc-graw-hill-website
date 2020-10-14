<template>
  <!-- Sidebar -->
  <div class="d-lg-none sidebar">
    <div id="sidebar-wrapper">
      <div class="sidebar-heading">
        <nuxt-link to="/"
          ><img
            src="~/assets/images/mh-logo.png"
            alt=""
            class="img-fluid header-logo"
        /></nuxt-link>
      </div>
      <div class="list-group list-group-flush">
        <nuxt-link
          :to="{ path: '/', hash: '#path-surgery' }"
          class="list-group-item list-group-item-action"
          >Path-Surgery
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#mcgraw-hill-medical-content' }"
          class="list-group-item list-group-item-action"
          >McGraw Hill Medical Content
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#rotation' }"
          class="list-group-item list-group-item-action"
          >Rotation
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#absite-Performance' }"
          class="list-group-item list-group-item-action"
          >ABSITE Performance
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#advanced-quiz-functionality' }"
          class="list-group-item list-group-item-action"
          >Advanced Quiz
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#subscription' }"
          class="list-group-item list-group-item-action"
          >Subscription
        </nuxt-link>
      </div>
    </div>
    <!-- overlay -->
    <div class="menu-toggle menu-overlay" @click="hideSideBar"></div>
  </div>
</template>

<script>
export default {
  methods: {
    hideSideBar() {
      document.body.classList.add("toggled");
    },
  },
};
</script>
