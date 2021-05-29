<template>
    <div class="hd">
    <div class="headers">
    <div class="logo">
        <img src="./../assets/logo.png" alt="logo"/>
    </div>

        <div v-if="isAuntific===true&&userInf!==null" class="autorize">
            <div class="avatar">
            <router-link to="/UserBlank"><img src="../assets/images (1).jpg" alt="avatarMini"/></router-link>
            </div>
            <div class="actions">
                <button @click="Exit()">exit</button>
            </div>
            <div class="Name">
                <!--Тут должен быть роутер линк-->
                <router-link to="/UserBlank">{{userInf.username}}</router-link>
            </div>


    </div>
        <div  v-else class="Logining">
            <!--Тут должен быть роут на авторизацию и регистацию-->

               <router-link to="/login">Login in</router-link>

            <div class="Register">
                <router-link to="/Register">Register</router-link>
            </div>
        </div>
        <div class="Searches">
            <label>
                <input placeholder="Search" v-model="SearchText"/>
            </label>
        </div>
        <div v-if="isAuntific===true" class="nav">
            <ul class="navigation">
                <li><router-link to="/Home">Home</router-link></li>
                <li><router-link to="/AllUsers">AllUsers</router-link> </li>
                <li><router-link to="/UserBlank">MyPage</router-link> </li>
                <li><router-link to="/AllTeatcher">Викладачі</router-link> </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from "vuex";

    export default {
        name: "Header",
        data(){
            return{
                SearchText:'',

            }
        },
        computed:{
            ...mapGetters([
                'isAunt',
                'userInfo',
            ]),
            isAuntific(){
                return this.isAunt;
            },
            userInf(){
                return this.userInfo;
            }
        },
        methods:{
            ...mapMutations([
                'UserInfo',
                'UserExit'

            ]),
            ...mapActions([
                'EXIT_USER'
            ]),
            /*GetSelect(e){
                let value=e.target.value;
                let options=this.OptionAction.find(o=>o.action==value);
                this.thisOptionAction=options.action;

            },*/
            Exit(){

                this.UserExit();
                this.$router.push('/');
            }
        },
        mounted() {
            this.UserInfo()
        }
    }
</script>

<style>
    .hd{
        display: flex;
    }
.headers{
    display: block;
    width: 100%;
    background-color: chartreuse;
}
    .logo img{
        float: left;
        height: 80px;
        width: 80px;
    }
    .logo{
        display: inline-block;


    }
    .avatar img{
        height: 30px;
        width: 30px;
        border-radius: 20px;
        float: left;
    }
    .avatar{
        display: inline-block;
    }
    .Name{
        display: inline-block;
        float: right;
        margin: 8px;

    }
    .Name a{
        text-decoration: none;
        color: #7c9bde;
        font-size: 20px;
        font-family: Candara,sans-serif;
    }
    .autorize{
        display: inline-block;
        float: right;
        margin: 20px;
        padding-left: 20px;

    }
    .Searches{
        display: inline-block;
        float: right;
        padding: 30px;


    }
    .Searches input{
        border-radius: 4px;
        border: none;
    }
    .Logining{
        display: inline-block;
        float: right;
        margin: 20px;
        padding: 10px;
    }
    .Login{
        display: inline-block;
    }
    .Register{
        display: inline-block;
        margin-left: 5px;
        padding-left: 10px;
    }
    .actions{
        display: inline-block;
        float: right;
        margin: 10px;
    }

    .actions select{
        background: none;
        border: none;
        font-size: 20px;

    }
    .navigation li{
        display:inline-block;
        margin: 10px;
        padding: 10px;
        font-size: 20px;
        background: #35be00;
        border-radius: 10px 0 10px 0;
        list-style-type: none;
    }
    .navigation li:hover{
        display:inline-block;
        margin: 10px;
        padding: 10px;
        font-size: 20px;
        background: #cbff0e;
        list-style-type: none;
    }
    .navigation a{
        display: block;
        text-decoration: none;
        color: #1effb7;
    }
    .navigation a:hover{
        display: block;
        text-decoration: none;
        color: crimson;
    }
</style>

