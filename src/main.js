//总控制
import Vue from 'vue'
import App from './App.vue'
//导入路由控制
import router from './router'

//导入静态样式
import './assets/css/reset.css'

//引入axios
import ajax from 'axios'
Vue.prototype.$ajax = ajax

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
