import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);




let store=new Vuex.Store({
   state:{
        users:[],//Массив который через fetch должен принимать пользователей
       isAutorize:false,
       user:{},

   } ,
    mutations:{
       logins(state){
           state.isAutorize=true;
       },
    },
    getters:{
       isAunt:state => {
           return state.isAutorize;
       },
    },
    actions:{
       
    },
});
export  default store;