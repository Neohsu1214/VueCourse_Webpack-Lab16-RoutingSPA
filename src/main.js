import Vue from 'vue'
import VueRouter from 'vue-router' // 使用 VueRouter: 記得要先安裝套件 npm install vue-router --save/--save-dev
import App from './App.vue'
import { routes } from "./routes" // {} 中的 routes就是 routes.js 中的 const route

// 跟 Vue說我要使用 VueRouter
Vue.use(VueRouter); // 記得要建立 routes.js 讓 VueRouter 載入routing規則

// 初始化 vue-router 物件
const router = new VueRouter(
  {
    routes: routes, // 也可以簡寫成 routes 就好
    mode: 'history' // 預設會在路徑前面加上#(hash tag)以避免跟 server 中的真的目錄搞混！但也能加上 mode: 'history' 跟 Vue說我不用加 hash tag
  }
);

new Vue({
  el: '#app',
  router: router, // 也可以簡寫成 router 就好
  render: h => h(App)
})
