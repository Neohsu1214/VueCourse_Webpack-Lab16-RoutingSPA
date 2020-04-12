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
    mode: 'history', // 預設會在路徑前面加上#(hash tag)以避免跟 server 中的真的目錄搞混！但也能加上 mode: 'history' 跟 Vue說我不用加 hash tag
    scrollBehavior(to, from, savePosition) { // 可用 scrollBehavior 在 route增加 hash tag 的頁面指定位置
      if (savePosition) {
        return savePosition;
      }
      if (to.hash) {
        return { selector: to.hash };
      }
      return {x: 0, y: 0} // 若都沒指定則預設為頁面最頂端
    }
  }
);

// 透過 beforeEach 可以對每次切換 route 路徑實作一些事情(Guard)
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next(); //  記得要加上 next(); 不然無法到下一頁去
});

new Vue({
  el: '#app',
  router: router, // 也可以簡寫成 router 就好
  render: h => h(App)
})
