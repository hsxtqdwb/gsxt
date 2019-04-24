// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'pages/wrap/index'
import router from './router'
import FastClick from 'fastclick'
import Http from './utils/axios'
// import axios from 'axios'
import wx from 'weixin-js-sdk'
import 'lib-flexible'

Vue.prototype.$http = new Http()
import './assets/css/reset.css'
Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}
// axios.get(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
