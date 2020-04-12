import Home from "./components/Home";
import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";
import Hello from "./components/Hello";
import Foo from "./components/foobar/Foo";
import Bar from "./components/foobar/Bar";

export const routes = [
    { path: '', component: Home }, // 沒有給定 path 代表 Home 為 root route
    { path: '/user', component: User, 
        children: [ // 加上 children 就可以進行 nested routes
          { path: "", component: UserStart }, // 完整路徑為 /user
          { path: ":id", component: UserDetail }, // 完整路徑為 /user/:id
          { path: ":id/edit", component: UserEdit, name: "userEdit" } // 完整路徑為 /user/:id/edit, 可以幫路徑命名(ex:userEdit)並於<route-link>中使用
    ] }, 
    // 以下為 https://github.com/vuejs/vue-router/tree/dev/examples/route-props 的使用範例
    { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props | 直接把 :name 當成 props 使用
    { path: '/static', component: Hello, props: { name: 'world' }}, // static values
    { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props | 以 function 執行結果回傳
    { path: '/attrs', component: Hello, props: { name: 'attrs for name' }}, // 直接將 router-view 中的 attributes 傳入指定 component 的 $attr
    // 可以在一個 route path中給定多個 components，讓不同component替換掉不同命名的 router-view
    { path: '/demoMultiRouterView', 
      name: 'foobar',
      components: {
        default: Foo,
        'bar': Bar
      }
    },
    // 設定 redirect 可以指定將給定的 path 轉換到另一個 URI (此測試請直接在瀏覽器網址列給定 http://localhost:8080/redirect-me 測試)
    { path: '/redirect-me', redirect: '/user' }
];

function dynamicPropsFn (route) {
    const now = new Date()
    return {
      name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
  }