// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'pages/wrap/index'
import router from './router'
import FastClick from 'fastclick'
import Http from './utils/axios'
// import axios from 'axios'
// import wx from 'weixin-js-sdk'
import 'lib-flexible'

// Vue.prototype.$http = new Http()
import './assets/css/reset.css'
import { setItem } from './utils';
Vue.config.productionTip = false;
Vue.prototype.http = new Http()

FastClick.prototype.focus = function(targetElement) {
  var length;
  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
  // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
  length = targetElement.value.length;
  targetElement.focus();
  targetElement.setSelectionRange(length, length);
  } else {
  targetElement.focus();
  }
  };

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}
setItem('OPEN_ID','oB4nYjnoHhuWrPVi2pYLuPjnCaU0')
setItem('USER_NO','TEST0001')
// axios.get(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`)


// axios.get(`/connect/oauth2/authorize?appid=wx88a319f29c9a7c51&redirect_url=http://192.168.0.101&response_type=code&scope=snsapi_userinfo#wechat_redirect`).then(res =>{
//   alter(res)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
