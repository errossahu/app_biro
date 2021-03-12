import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
// import 'mdi/font/css/materialdesignicons.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import Vuelidate from 'vuelidate'
import VueProgress from 'vue-progress-path'
// import Axios from 'axios'
Vue.config.productionTip = false
import Axios from 'axios';
Vue.prototype.$http = Axios;
Vue.use(VueProgress)
Vue.prototype.$apiUrl = 'https://api.bajolapak.com/api';
Vue.use(VueSplide)
Vue.use(Vuelidate)
Vue.use(VueToast)
new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
