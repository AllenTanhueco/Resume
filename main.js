import Vue from 'vue';
import Resume from './Resume.vue';  
import router from './router';  

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(Resume),  
});
