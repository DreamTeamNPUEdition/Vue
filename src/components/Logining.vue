<template>
    <div class="Login">
        <div class="LoginForm">
        <div class="login">
            <strong>Login:</strong>

            <label>
                <input v-model="Login"/>
            </label>

        </div>
            <div class="pass">
                <strong>Password:</strong>

                <label>
                    <input v-model="Password"/>
                </label>

            </div>
            <div class="bt"><button @click="LoginIn">Login in</button></div>
        </div>
    </div>
</template>

<script>


    import {mapActions, mapGetters, mapMutations} from "vuex";

    export default {

        name: "Logining",
        data(){
            return{
                Login:'',
                Password:'',
            }
        },
        methods:{
            ...mapActions([
                'GET_USERS_DATA',
                'AUTORIZE_USER',
            ]),
            ...mapMutations([
                'loginss'
            ]),
            LoginIn(){
                this.getUsers.find(user=>{
                    if(user.username==this.Login){
                       this.$store.dispatch('AUTORIZE_USER',user)
                           .then(()=>this.$router.push('/'))
                           .catch(err=>console.log(err))
                        this.loginss();

                    }
                })
            }
        },
        computed:{
            ...mapGetters([
                'GET_Users',

            ]),
            getUsers(){
                return this.GET_Users;
            },


        },
        mounted() {
            this.GET_USERS_DATA();
        }


    }
</script>

<style>

.Login{
    display: block;
    border: 2px solid;

}
.login input{
    display: block;
    margin: auto;
}
    .login strong{
        display: block;
        text-align: center;
    }
    .login{
        margin: 5px;
    }

.pass input{
    display: block;
    margin: auto;
}
.pass strong{
    display: block;
    text-align: center;
}
.pass{
    margin: 5px;
}
    .bt button{
        display: block;
        margin: auto;

    }
    .bt{
        margin: 5px;
    }
</style>