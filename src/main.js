import Vue from 'vue'
import App from './App.vue'
import VueSilentbox from 'vue-silentbox';
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/app.scss';
import '@/assets/font/fonts.css';

Vue.use(VueSilentbox)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
