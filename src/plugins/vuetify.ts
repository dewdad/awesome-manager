import Vue from "vue";
// FIXME import vuetfiy/lib will not install all components
import Vuetify from "vuetify";
import "vuetify/src/stylus/app.styl";

// TODO test more styles
// import "vuetify/src/stylus/main.styl";
// import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  iconfont: "fa",
});
