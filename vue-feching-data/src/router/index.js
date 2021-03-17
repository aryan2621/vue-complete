import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import NotFound from "../views/NotFound.vue";

import JobsDetails from "../views/Jobs/JobsDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobsDetails",
    component: JobsDetails,
    props: true,
  },
  //redirctes{
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  ///catch od 404
  {
    path: "/:catchAll(.*)",
    name:'NotFound',
    component:NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
