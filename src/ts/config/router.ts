import VueRouter, { RouteConfig } from "vue-router";
import Vue from "vue";
import HomeView from "@/ts/views/HomeView";
import DocumentEditor from "@/ts/views/DocumentEditor";
import AboutView from "@/ts/views/AboutView";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/about",
        name: "about",
        component: AboutView
    },
    {
        path: "/editor/:id",
        name: "DocumentEditor",
        component: DocumentEditor
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
