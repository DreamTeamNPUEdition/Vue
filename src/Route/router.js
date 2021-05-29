
//import Vue from 'vue';

import Logining from "../components/Logining";
import VueRouter from "vue-router";
import Register from "../components/Register";
import UserBlank from "../components/UserBlank";
import EditUserInfo from "../components/EditUserInfo";
import AllUsers from "../components/AllUsers";
import AllTeatcher from "../components/AllTeatcher";
import Home from "../components/Home";

let routes=[
    {path:'/login',component:Logining},
    {path:'/register',component:Register},
    {path:'/UserBlank',component:UserBlank},
    {path:'/EditInfo',component:EditUserInfo},
    {path:'/AllUsers',component:AllUsers},
    {path:'/Home',component:Home},
    {path:'/AllTeatcher',component:AllTeatcher}
];

let router = new VueRouter({
    mode:'history',
    routes,
});


export default router;