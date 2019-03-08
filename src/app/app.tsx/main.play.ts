import Vue from 'vue'
import store from '../../store'
import router from '../../router'
import i18n from '../../plugins/i18n'
import '../../plugins/vuetify.tsx'
import '../../plugins/styles'
import App from './App.router'

Vue.config.productionTip = false

// Bootstrap
new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
