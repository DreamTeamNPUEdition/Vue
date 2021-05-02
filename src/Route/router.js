
//import Vue from 'vue';

import Logining from "../components/Logining";
import VueRouter from "vue-router";
import Register from "../components/Register";

let routes=[
    {path:'/login',component:Logining},
    {path:'/register',component:Register}
];

let router = new VueRouter({
    mode:'history',
    routes,
});


export default router;