import Vue from 'vue'
import Vuelidate from 'vuelidate';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
Vue.use(VueRouter)
Vue.use(Vuelidate);
const routes=[
      {path:'/', component:Home},
      {path:'/About', component:About},
      {path:'/Service', component:Service}
]
const router= new VueRouter({
  routes
})
Vue.config.productionTip = false
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
