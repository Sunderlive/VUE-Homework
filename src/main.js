/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import showMessage from './functions';
import {hello, goodBye} from './variables';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

showMessage(hello);
showMessage(goodBye);

