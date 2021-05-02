<template>
    <div class="hd">
    <div class="headers">
    <div class="logo">
        <img src="./../assets/logo.png" alt="logo"/>
    </div>

        <div v-if="isAuntific===true" class="autorize">
            <div class="avatar">
            <img src="../assets/images (1).jpg" alt="avatarMini"/>
            </div>
            <div class="Name">
                <!--Тут должен быть роутер линк-->
                <a href="#">Ender</a>
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


    </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Header",
        data(){
            return{
                SearchText:'',
            }
        },
        computed:{
            ...mapGetters([
                'isAunt'
            ]),
            isAuntific(){
                return this.isAunt;
            }
        },
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
</style>