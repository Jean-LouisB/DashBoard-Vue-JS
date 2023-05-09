import { createWebHistory, createRouter } from "vue-router";
import AccueilView from "../components/Accueil"
import NotFound from "../components/NotFound"
import CalculIMC from "../components/CalculIMC"
import ConvertisseurDevise from "../components/ConvertisseurDevise"

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: AccueilView,
  },
  {
    path: "/CalculIMC",
    name: "CalculIMC",
    component: CalculIMC,
  },
  {
    path: "/ConvertisseurDevise",
    name: "ConvertisseurDevise",
    component: ConvertisseurDevise,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
