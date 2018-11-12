import { createApp, IApp } from "./App.simple";

const app = createApp();

app.router.onReady(() => {
  (app as any).$mount("#app");
});
