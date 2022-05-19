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
  ],
});

export default router;
