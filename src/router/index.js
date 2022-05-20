import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Usuarios from "../views/UsuariosView.vue";
import Imagenes from "../views/Imagenes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },

  {
    path: "/usuarios/:id",
    name: "usuarios",
    component: Usuarios,
  },
  {
    path: "/imagenes",
    name: "imagenes",
    component: Imagenes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
