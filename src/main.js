import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Filtering from './components/Filtering'
import About from './components/About'
import ToDo from './components/ToDo'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

//http://rgp.neolant.com/static/test-0/data/countries.json

// Не могу сделать запрос с локального хоста
// Vue.axios.get('//rgp.neolant.com/static/test-0/data/countries.json', {header: {
//   'Access-Control-Allow-Credentials': 'true',
//   'Access-Control-Allow-Origin': '127.0.0.1:8080',
//   'Access-Control-Allow-Methods': 'GET, PUT, POST',
//   'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With'
// }})
//   .then((response) => {
//     console.log(response.data)
//     this.i = response.data
//   })
//   .catch((er) => {
//     console.log('ERRRROR>>>>>>> ', er)
//   })
const routes = [{path: '/', component: HelloWorld}, {path: '/about', component: About}, {path: '/todo', component: ToDo}, {path: '/filtering', component: Filtering}]
const router = new VueRouter({routes, mode: 'history'})
new Vue({el: '#app', template: '<App/>', components: { App }, router}).$mount('#app')
