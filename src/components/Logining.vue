<template>
    <div class="text-center mt-3">
        <div class="LoginForm">
        <div class="text-center">
            <strong>Login:</strong><br>

            <label class="text-center">
                <input class="form-control border-primary " v-model="Login"/>
            </label>

        </div>
            <div class="text-center">
                <strong>Password:</strong><br>

                <label>
                    <input class="form-control border-primary" v-model="Password"/>
                </label>

            </div>
            <div class="mt-4"><button type="button" class="btn btn-success" @click="LoginIn">Login in</button></div>
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
                console.log(this.getUsers)

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



    }
</script >

<style scoped>

</style>