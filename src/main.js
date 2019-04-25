// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'pages/wrap/index'
import router from './router'
import FastClick from 'fastclick'
import Http from './utils/axios'
import wx from 'weixin-js-sdk'
import 'lib-flexible'

import './assets/css/reset.css'
const appid = 'wx88a319f29c9a7c51'
const redirect_uri = 'http://192.168.0.101'
Vue.config.productionTip = false;
Vue.prototype.http = new Http()
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
