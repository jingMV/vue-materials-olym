import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/Explore",
      name: "Explore",
      component: () =>
      import("./views/Explore.vue")
    },
    {
    path: "/Aohrodite",
    name: "Aohrodite",
    component: () =>
    import("./views/ExploreItem/Aohrodite.vue")
   },
  ],
  mode: 'history'
});
