import Vue from 'vue'
import App from './App.vue'
import store from "./store/store";
import router from "./Route/router";
import VueRouter from "vue-router";
import  Axios from 'axios';

Vue.use(VueRouter);
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
