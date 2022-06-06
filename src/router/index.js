import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/equipment",
      name: "Equipment",
      component: () => import("../views/EquipmentView.vue"),
    },
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/bikes",
      name: "bikes",
      component: () => import("../views/BikesView.vue"),
    },
    {
      path: "/accessories",
      name: "accessories",
      component: () => import("../views/AccessoriesView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/changepsw",
      name: "changepsw",
      component: () => import("../views/ChangePasswordView.vue"),
    },
    {
      path: "/recoverpsw",
      name: "recoverpsw",
      component: () => import("../views/RecoverPasswordView.vue"),
    },
    {
      path: "/accdetails",
      name: "accdetails",
      component: () => import("../views/AccountDetailsView.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/PaymentWallView.vue"),
    },
  ],
});

export default router;
