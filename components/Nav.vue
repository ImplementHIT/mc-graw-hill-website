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
            <a href="#path-surgery" class="nav-link">Path-Surgery</a>
          </li>
          <li class="nav-item">
            <a href="#mcgraw-hill-medical-content" class="nav-link"
              >McGraw Hill Medical Content</a
            >
          </li>
          <li class="nav-item">
            <a href="#rotation" class="nav-link">Rotation</a>
          </li>
          <li class="nav-item">
            <a href="#absite-Performance" class="nav-link"
              >ABSITE Performance</a
            >
          </li>
          <li class="nav-item">
            <a href="#advanced-quiz-functionality" class="nav-link"
              >Advanced Quiz</a
            >
          </li>
          <li class="nav-item">
            <a href="#subscription" class="nav-link">Subscription</a>
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
      console.log("NAV");
      document.body.classList.remove("toggled");
    },
  },
};
</script>
