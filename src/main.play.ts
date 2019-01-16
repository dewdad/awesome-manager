import Vue from "vue";

import { App } from "./entry/App.test";
import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n";
// Register styles
import { VuetifyUseOptions } from 'vuetify';
import Vuetify from 'vuetify';

const options: VuetifyUseOptions = {
  theme: {
    primary: '#795548',
    secondary: '#A98274',
    accent: '#FFAB00',
    error: '#f44336',
    warning: '#FFEB3B',
    info: '#2196F3',
    success: '#4CAF50',
  },
};

Vue.use(Vuetify, options);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount("#app");
