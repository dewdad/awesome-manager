import Vue from 'vue'
import axios from 'axios'

export default {
  install(Vue, options) {
    Vue.prototype.$http = axios
  }
}
