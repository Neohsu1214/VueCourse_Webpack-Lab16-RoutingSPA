import Home from "./components/Home";
import User from "./components/user/User";
import Hello from "./components/Hello";

export const routes = [
    { path: '', component: Home }, // 沒有給定 path 代表 Home 為 root route
    { path: '/user/:id', component: User }, // 加上 :param 就可以把動態資料帶給指定的 component
    // 以下為 https://github.com/vuejs/vue-router/tree/dev/examples/route-props 的使用範例
    { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props | 直接把 :name 當成 props 使用
    { path: '/static', component: Hello, props: { name: 'world' }}, // static values
    { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props | 以 function 執行結果回傳
    { path: '/attrs', component: Hello, props: { name: 'attrs for name' }} // 直接將 router-view 中的 attributes 傳入指定 component 的 $attr
];

function dynamicPropsFn (route) {
    const now = new Date()
    return {
      name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
  }