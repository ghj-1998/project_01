import Vue from "vue";
import Router from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login";
// import login from "../components/Login";

Vue.use(Router);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    //登录页
    path: "/login",
    name: "Login",
    component:Login
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new Router({
  routes,
});

export default router;

// export default new Router({
//   routers:[{
//     //登录页
//     //路由跳转路径
//     path:'/login',
//     //路由名称
//     name:'Login',
//     //路由跳转组件
//     component: Login,
//   },];

// });
