import Vuex from 'vuex';
import Vue from 'vue';
import axios from "axios";

Vue.use(Vuex);




let store=new Vuex.Store({
   state:{
        users:[],//Массив который через axios должен принимать пользователей
       isAutorize:false,
       User:null,


   } ,
    mutations: {
        loginss: (state) => {
            state.isAutorize = true;
        },
        SET_USERS: (state, users) => {
            state.users = users;
        },
        UserInfo:(state)=>{
            let User=localStorage.getItem('datas');
            state.User=JSON.parse( User );
            if( state.User!==null){
                state.isAutorize=true
            }
            else {
                state.isAutorize=false;
            }
        },
        UserExit:(state,)=>{

                localStorage.removeItem( 'datas' );
                state.User = null;
                state.isAutorize = false;

        }
    }
    ,
    getters:{

       isAunt:state => {
           return state.isAutorize;
       },
        GET_Users:state => {
           return state.users
        },
        userInfo:state => {
           return state.User;
        }
    },
    actions: {
        GET_USERS_DATA({commit}){
            return axios('http://jsonplaceholder.typicode.com/users')
                .then((users)=>{
                    commit('SET_USERS',users.data);
                    return users;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        AUTORIZE_USER({commit},user){
            localStorage.setItem('datas',JSON.stringify(user));
            commit('UserInfo',user);
        },
        EXIT_USER({commit}){
            commit('UserExit');
        }


   },});


export  default store;