import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'Axios'

Vue.config.productionTip = false
Vue.prototype.$axios=axios.create({
  baseURL: "http://123.207.32.32:8000"  
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL="http://123.207.32.32:8000";

// axios({
//   url:"/home/multidata"
// }).then(res=>{
//   console.log(res)
// })

// var http = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// })
// http({
//   url:"/home/multidata"
// }).then(res=>{
//   console.log(res)
// })

// var http = function (config){
//   var instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   })
//   return instance(config)
// }
