<template>
    <div class="text-center">
        <div class="text-center mt-3">
            <div class="text-center mt-3">
                <strong>Name:</strong><br>
                <label>
                    <input class="form-control border-primary" v-model="Name"/>
                </label>

            </div>
            <div class="text-center mt-3">
                <strong>Surname:</strong><br>
                <label>
                    <input class="form-control border-primary" v-model="SecondName"/>
                </label>

            </div>
            <div class="text-center mt-3">
                <label>
                    <select class="form-control border-primary" v-model="ThisRole" @change="GetRole" size="1">
                        <option disabled>Виберіть свою роль:</option>
                        <option v-for="role in Role" :key="role.id" :value="role.role">{{role.role}}</option>

                    </select>
                </label>
            </div>
            <div class="text-center mt-3">
                <strong>Email:</strong><br>
                <label>
                    <input class=" form-control border-primary" v-model="Email"/>
                </label>
            </div>
            <div class="text-center mt-3">
                <strong>Пароль:</strong><br>
                <label>
                    <input class="form-control border-primary" v-model="Password"/>
                </label>

            </div>
            <div class="text-center mt-3">
                <strong>Підтвердіть Пароль:</strong><br>
                <label>
                    <input class="form-control border-primary" v-model="ConfirmPassword"/>
                </label>
            </div>
            <div class="text-center mt-3">
                <button class="btn btn-success"  @click="RegisterPerson">Зареєструватись</button>
            </div>

        </div>
    </div>
</template>

<script>

    import {mapActions} from "vuex";


    export default {
        name: "Register",
        data(){
            return{
                id:1,
                Name:'',
                SecondName:'',
                Email:'',
                Password:'',
                ConfirmPassword:'',
                Role:[{
                    id:1,
                    role:'Студент',

                },
                    {
                        id:2,
                        role:'Викладач'
                    }
        ],
            ThisRole:'',
                ReRole:null,
            }
        },
        methods:{
            ...mapActions([
                'PostUserData'
            ]),
            GetRole(e){
                let value=e.target.value;
                this.ThisRole=this.Role.find( r => r.role === value );
                if(this.ThisRole.role==='Студент'){
                    this.ReRole=1;
                }
                else {
                    this.ReRole=2
                }
            },
            RegisterPerson(){

                let newUser={
                    Email:this.Email,
                    Name:this.Name,
                    SecondName:this.SecondName,
                    Password:this.Password,
                    Status:this.ReRole,
                };
                console.log(JSON.stringify(newUser));
                this.PostUserData(newUser)




            },
            /**
             * @return {number}
             */

        }
    }
</script>

<style scoped>


</style>