<template>
    <div class="container-md">
        <div v-for="User in GetUsers" :key="User.id" class="UsersList">
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="container-md">

                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "AllUsers",
        methods:{
            ...mapActions([
                'GET_USERS_DATA',
            ]),
        },
        computed:{
            ...mapGetters([
                'GET_Users'
            ]),
            GetUsers(){
                return this.GET_Users;
            },

        },
        mounted(){
            this.GET_USERS_DATA();
        }
    }
</script>

<style scoped>

</style>