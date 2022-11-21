import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";
import Page from "./components/Page.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [{ path: "./", component: Page }],
});

createApp(App).mount("#app");
