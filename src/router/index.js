import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("../components/Home.vue")
      },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;