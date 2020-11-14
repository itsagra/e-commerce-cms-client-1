import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin, BModal, VBModal } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/style.css'
import store from './store'
import Swal from 'vue-sweetalert2'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Swal)
Vue.component('BModal', BModal)
Vue.directive('b-modal', VBModal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
