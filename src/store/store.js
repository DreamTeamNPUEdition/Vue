import Vuex from 'vuex';
import Vue from 'vue';
import axios from "axios";

Vue.use(Vuex);




let store=new Vuex.Store({
   state:{
        users:[],//Массив который через axios должен принимать пользователей
       isAutorize:false,
       User:null,
       Message:null,



   } ,
    mutations: {
        loginss: (state) => {
            state.isAutorize = true;
        },
        SET_USERS: (state, users) => {
            state.users=users;
            for(let i=0;i<state.users.length;i++){
                state.users.push(JSON.parse(state.users[i]));
            }


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

        },
         registerUser:(state,RegisterUserData)=>{
            state.users.unshift((RegisterUserData))

        },



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
        async GetUsersData({commit}){
            return  await  axios.get('https://localhost:44366/api/users')
                .then((response=>{
                    console.log(response.data);
                    commit('SET_USERS',response.data)

                }))
                .catch((err)=>{
                    console.log(err)
                })
        },

        async PostUserData({commit},newUser){
            await axios.post('https://localhost:44366/api/users/posts',newUser,{headers:{

                }})
                .then((response)=>{
                    console.log(JSON.stringify(response.data));
                    commit('registerUser', response.data);

                })
                .catch((err)=>{
                    console.log(err)
                })

        }

   },});


export  default store;