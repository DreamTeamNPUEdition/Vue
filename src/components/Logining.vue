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
            <div class="bt"><button @click="Logining">Login in</button></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {

        name: "Logining",
        data(){
            return{
                Login:'',
                Password:'',
            }
        },
        methods:{
            ...mapMutations([
               'logins'
            ]),
            Logining(){
                if(this.Login==this.ThisName) {
                    this.logins();
                }
                console.log(this.ThisName)
            }
        },
        computed:{
            ...mapGetters([
                'Names'
            ]),
            ThisName(){
                return this.Names;
            }
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