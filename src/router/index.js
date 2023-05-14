import { createWebHistory, createRouter } from "vue-router";
import AccueilView from "../Views/Accueil"
import NotFound from "../Views/NotFound"
import CalculIMC from "../Views/CalculIMC"
import ConvertisseurDevise from "../Views/ConvertisseurDevise"
import BlogListPost from "../Views/BlogListPost"
import NewPost from "../components/NewPost"

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
    path: "/BlogListPost",
    name: "BlogListPost",
    component: BlogListPost,
  },
  {
    path: "/NewPost",
    name: "NewPost",
    component: NewPost,
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
