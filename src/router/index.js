import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Login",
    },
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "Home",
    },
    component: () => import("@/views/home/index.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("token")
  if (!token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router;
