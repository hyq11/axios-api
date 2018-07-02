// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/base.css'
import axios from 'axios'
import VueLazylod from 'vue-lazyload'
Vue.config.productionTip = false

Vue.prototype.$http=axios
// Vue.use(VueLazylod)
Vue.use(VueLazylod, {
  preLoad: 1.3,
  loading: '../static/img/Blocks-1s-200px.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
