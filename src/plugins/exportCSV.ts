import Vue from "vue";
import exportMixin from "@/mixins/exportMixin";
Vue.use({
  install(Vue, _) {
    Vue.mixin(exportMixin);
  },
});
