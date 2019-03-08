import Vue from 'vue'
import { log } from '@/util'

export default {
  install(Vue, options) {
    Vue.prototype.$log = log
  }
}
