<template>
  <!-- head -->
  <div class="navbar-container">
    <nav class="navbar navbar-expand-lg navbar-light boxed">
      <!-- logo -->
      <div>
        <nuxt-link to="/"
          ><img
            src="~/assets/images/mh-logo.png"
            alt=""
            class="img-fluid header-logo"
        /></nuxt-link>
      </div>

      <!-- toggle button mobile -->
      <button class="menu-toggle d-lg-none" @click="showSideBar">
        <i class="fas fa-bars"></i>
      </button>

      <!-- menu web -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <nuxt-link to="/#path-surgery" class="nav-link">Path-Surgery</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/#mcgraw-hill-medical-content" class="nav-link"
              >McGraw Hill Medical Content</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/#rotation" class="nav-link">Rotation</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/#absite-Performance" class="nav-link"
              >ABSITE Performance</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/#advanced-quiz-functionality" class="nav-link"
              >Advanced Quiz</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/#subscription" class="nav-link">Subscription</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    showSideBar() {
      document.body.classList.remove("toggled");
    },
  },
};
</script>
