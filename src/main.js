import Vue from 'vue'
import App from './App.vue'
import store from "./store/store";
import router from "./Route/router";
import VueRouter from "vue-router";
import  Axios from 'axios';
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$http=Axios;
let token=localStorage.getItem('data');
if(token){
    Vue.prototype.$http.defaults.headers.common['Authorization']=token;
}

Vue.config.productionTip = false;

new Vue({

  render: h => h(App),
    store,
    router
}).$mount('#app');
