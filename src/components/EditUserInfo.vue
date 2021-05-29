<template>
    <div class="container">
        <div class="row">
        <div class="col-sm">
            <img src="../assets/images (1).jpg" height="183" width="275" alt="thisAvatar"/>
        <div class="col-sm m-lg-5">
            <button class="btn btn-info m-lg-2">Обрати Аватар</button>
        </div>
        </div>

            <div class="col-sm m-lg-2">
                <button class=" btn btn-primary m-lg-2" @click="MainInformation">Основне</button>
                <button class=" btn btn-primary m-lg-2" @click="SecurityInformation">Конфіденційність</button>

                <!---->
                <div>
                    <div v-if="MainInfo===true" class="text-center">
                        Main
                    </div>
                    <div v-if="Security===true" class="MainInf">
                        <div class="col-sm text-center">
                            <strong class="text-center">Змінити поштову скриньку:</strong><br>
                            <label>
                                <input class="form-control border-primary " v-model="newEmail"/>
                            </label>
                            <br>
                            <strong class="text-center">Новий пароль:</strong><br>
                            <label>
                                <input class="form-control border-primary" v-model="newPassword"/>
                            </label><br>
                            <strong class="text-center">Підтвердити новий пароль:</strong><br>
                            <label>
                                <input class="form-control border-primary" v-model="confirmNewPassword"/>
                            </label><br>
                            <strong class="text-center">Поточний пароль:</strong><br>
                            <label>
                                <input class="form-control border-primary" v-model="thisPassword"/><br>
                            </label>

                        </div>
                        <div class="col-sm text-center">
                            <button class="btn btn-success">Зберегти</button>
                        </div>
                    </div>
                </div>

                <!---->
            </div>
            <br>


    </div>
    </div>
</template>

<script>
    export default {
        name: "EditUserInfo",
        data(){
            return{
                MainInfo:false,
                Security:false,
                newEmail:'',
                newPassword:'',
                confirmNewPassword:'',
                thisPassword:'',
            }
        },
        methods:{
            MainInformation(){
                if(this.MainInfo===false)
                {
                    this.MainInfo=!this.MainInfo;
                    this.Security=false;
                }
            },
            SecurityInformation(){
                if(this.Security===false)
                {
                    this.MainInfo=false;
                    this.Security=!this.Security;
                }
            }
        }
    }
</script>

<style>
.Editing{
    display: grid;
    grid-template-rows: 2fr ;
    border: 2px solid;

}
.ReEdit{
    display: grid;
    grid-template-columns: 1fr 2fr;
}
    .ReEditAvatar{
        display: grid;
        grid-template-rows: 2fr;
        margin: 5px;
    }
.ReEditAvatar img{
   display: block;
    margin: auto;
}
.SelectImage{
    margin: 15px;
}
    .SelectImage button{
        display: block;
        margin: auto;
        font-size: 20px;
    }
    .ChooseReEdit{
        margin: 6px;
    }
    .ChooseReEdit button{
        margin: 10px;
        text-decoration: silver;
        text-align: center;
        font-size: 20px;
        border-radius: 4px;
        border: none;
        background: #3f41ff;
        color: #7c9bde;

    }
    .SecurityReEdit strong,input{
        display: block;
        margin: auto;
        text-align: center;
        font-size: 18px;
    }
    .SaveReEdit{
        margin: 10px;
    }
    .SaveReEdit button{
        display:block;
        margin: auto;
        font-size: 20px;
    }
</style>