import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";
import Page from "./components/Page.vue";
import Page2 from "./components/Page2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Page },
    { path: "/xxx", component: Page2 }],
  
});

const app = createApp(App)
app.use(router)
app.mount('#app')