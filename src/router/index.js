import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { 
    path:"/home",
    name:"Home",
    component:()=>import('../views/Home.vue')
  },
  {
    path: "/",
    redirect:"/home"
  },
  {
    path: "/productCenter",
    name: "ProductCenter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductCenter.vue")
  },
  {
    path:"/about",
    name:"About",
    component: () => import("../views/About.vue")
  }
];
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
