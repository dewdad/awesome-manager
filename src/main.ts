import Vue from 'vue'
import router from './router'
import store from './store'
import App from './entry/App.awesome.vue'
// import { App } from "./entry/App.play";
// Register service worker
import './sw'
// Register global components
import './components/_global'
import './components/_widgets'
// Register internationalization
import i18n from './plugins/i18n'
import './plugins/rx'
// Register styles
import './plugins/styles'
import './plugins/vuetify'

// 取消不必要提示
Vue.config.productionTip = false
// async函数无法记录
process.on('unhandledRejection', error => {
  console.log(error)
})

// 启动并挂载
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
