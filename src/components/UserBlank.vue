<template>
    <div class="UserInfoBlank">
        <div class="userStatus">
        <strong>Online</strong>
        </div>
        <div class="Info">
            <div class="AvaConteiner">
                <div class="Avatar">
                    <img src="../assets/images (1).jpg" height="183" width="275" alt="Avatar"/>
                </div>
                <div class="Name">
                    <strong>{{UserInfo.name}}</strong>
                </div>
                <div class="EmailInfo">
                    <strong>Email:</strong>
                    <strong>{{UserInfo.email}}</strong>
                </div>
                <div class="EditInfo">
                    <router-link to="/EditInfo"><button>Редагувати</button></router-link>
                </div>
            </div>
            <div class="Information">
                <div class="categoriesInfo">
                   <ul class="List">
                       <li @click="InfoActive">Інформація</li>
                       <li @click="SubscribeActive">Підписки</li>
                       <li @click="AnotherActive">Інше...</li>
                   </ul>

                </div>
                <div v-if="Info===true" class="Inf">
                    <!--тут должно быть отображение на каждый лейбл-->
                    fdf
                </div>
                <div v-if="subscribe===true" class="Inf">
                    sffs
                </div>
                <div v-if="Another===true" class="Inf">
                    sfs
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "UserBlank",
        data(){
            return{
              Info:true,
              subscribe:false,
              Another:false,
            }
        },
        computed:{
            ...mapGetters([
                'userInfo'
            ]),
            UserInfo(){
             return this.userInfo;
            }
        },
        methods:{
            InfoActive(){
                if(this.Info===false){
                    this.Info=true;
                    this.subscribe=false;
                    this.Another=false;

                }

            },
            SubscribeActive(){
                if(this.subscribe===false){
                    this.subscribe=true;
                    this.Info=false;
                    this.Another=false;

                }
            },
            AnotherActive(){
                if(this.Another===false){
                    this.Another=true;
                    this.Info=false;
                    this.subscribe=false;
                }
            }
        }
    }
    //TODO:Оформить страницу пользователя
    //TODO:Написать функционал(Редактирование профиля)
    //TODO:Вывод информации о пользователе

</script>

<style>
.UserInfoBlank{
    display: grid;
    grid-template-rows: 20px 2fr;
}
.Inf{
    border:2px solid #e7ecff;
    background: #e1f59d;
    font-size: 20px;
    border-radius: 8px;

}
.List li{
    display: inline-block;
    font-size: 20px;
    margin: 10px;
    background: #877eff;
    padding: 5px;
    border-radius: 5px;

}
.List li:active{
    background: #b6d8ff;
}
.categoriesInfo{
    margin: auto;
}

    .userStatus{
        background: #7c9bde;
    }
    .userStatus strong{
        display: block;
        text-align: right;
    }
    .Info{
        display: grid;
        grid-template-columns: 1fr 1fr 200px;

    }
    .Avatar{
        margin: auto;
    }

    .AvaConteiner{
        display: grid;
        grid-template-rows:200px 1fr ;
    }
    .Information{

        margin: 3px;
    }

    .Name{
        float: left;
        text-align: center;

    }
    .EmailInfo{
        text-align: center;
    }
    .EmailInfo strong{
        display: block;
    }
    .categoriesInfo label{
        margin: 10px;
    }
    .EditInfo {
        margin: auto;
    }

    .EditInfo button{
        margin: 10px;
        font-size: 20px;
        color: #3f41ff;
        background: #7c9bde;
        border: none;
        border-radius: 5px;
        padding: 3px;
    }


</style>