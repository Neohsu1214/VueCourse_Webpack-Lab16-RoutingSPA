import Home from "./components/Home";
import User from "./components/user/User";

export const routes = [
    {path: '', component: Home}, // 沒有給定 path 代表 Home 為 root route
    {path: '/user/:id', component: User} // 加上 :param 就可以把動態資料帶給指定的 component
];