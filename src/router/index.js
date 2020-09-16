/* 
文件最好功能单一，这个文件只处理路由
main为入口文件，导包或者引包
components放子组件
assets放图片等资源
views路由视图

*/

//路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

//路由导航资源
import shangpin from '../views/contents/shangpin.vue'
import shangjia from '../views/contents/shangjia.vue'
import pingjia from '../views/contents/pingjia.vue'
import detail from '../views/details/detail.vue'

//全局组件(复用性/灵活)
import top from '../views/tops/top.vue'
Vue.component('top', top)

import floot from '../components/bottoms/floot.vue'
Vue.component('floot', floot)

//格式化全局过滤器
import Moment from 'moment'
Vue.filter('convertData', function (value) {
  return Moment(value).format("YYYY-MM-DD HH:mm:ss");
})

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'shangpin' } },//重定向
  { path: '/shangpin', name: 'shangpin', component: shangpin },//商品
  { path: '/shangjia', name: 'shangjia', component: shangjia },//商家
  { path: '/pingjia', name: 'pingjia', component: pingjia },//评价
  { path: '/shangpin/detail/:id', name: 'detail', component: detail },//商品详情
]

const router = new VueRouter({
  //设置为历史模式
  mode: 'history',
  //设置路由导航的默认样式
  linkActiveClass: 'action',
  //载入
  routes
})

//导出
export default router
