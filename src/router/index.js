import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Registro from "../views/Registro.vue";
import ResultadoPesquisa from "../views/ResultadoPesquisa.vue";
import DetalheProdutoServico from "../views/DetalheProdutoServico.vue";
import Perfil from "../views/Perfil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/ResultadoPesquisa",
    name: "ResultadoPesquisa",
    component: ResultadoPesquisa,
  },
  {
    path: "/DetalheProdutoServico",
    name: "DetalheProdutoServico",
    component: DetalheProdutoServico,
  },
  {
    path: "/Perfil",
    name: "Perfil",
    component: Perfil,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
