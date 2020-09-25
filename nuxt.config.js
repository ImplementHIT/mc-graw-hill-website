export default {
  env: {
    api:
      process.env.NODE_ENV == "production"
        ? "https://engage.implementhit.net/api/"
        : "http://localhost:8000/api/",
  },
  head: {
    titleTemplate: "%s - My Path Surgery",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes",
      },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "My Surgery Path" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      {
        name: "msapplication-TileImage",
        content: "images/favicon/f/ms-icon-144x144.png",
      },
      { name: "theme-color", content: "#ffffff" },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "./favicon/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicon/apple-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicon/apple-icon-72x72.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicon/apple-icon-76x76.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicon/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicon/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicon/apple-icon-180x180.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-icon-180x180.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon/android-icon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png",
      },
    ],
    bodyAttrs: {
      id: "wrapper",
      class: ["itsmoving", "ontop", "home-page", "toggled"],
    },
    script: [
      { src: "https://code.jquery.com/jquery-3.5.1.min.js" },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
      },
      { src: "https://kit.fontawesome.com/dc27e0490d.js" },
    ],
  },
  css: ["@/css/main.css"],
  components: true,
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.NODE_ENV == "production"
        ? "http://mypath.implementhit.net"
        : "http://localhost:3333",
    headers: {
      Authorization:
        process.env.NODE_ENV == "production"
          ? "Bearer uBzPfHFBJs1VAEvElki56YMlDUg22xAA6nD4L822HdnZAJZ6u5E2TkNoomGLgWR0UW06N7rEVydyQaqr"
          : "Bearer dirGtx0kKJxrpmPzDGnITeQNdGt7yG1mg8zU1eSKvPPkWeREt74J3n6zzHroHROFh37yQ93Jm6nQrzdA",
    },
  },
  plugins: ["~/plugins/vee-validate.js"],
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
};
