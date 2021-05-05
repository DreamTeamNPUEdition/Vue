<template>
    <div class="Registers">
        <div class="RegForm">
            <div class="NamesBlock">
                <strong>Name:</strong>
                <label>
                    <input v-model="Name"/>
                </label>

            </div>
            <div class="SurnameBlock">
                <strong>Surname:</strong>
                <label>
                    <input v-model="Surname"/>
                </label>

            </div>
            <div class="YourStatus">
                <label>
                    <select size="1">
                        <option disabled>Виберіть свою роль:</option>
                        <option value="">Викладач</option>
                        <option value="">Студент</option>
                    </select>
                </label>
            </div>
            <div class="EmailBlock">
                <strong>Email:</strong>
                <label>
                    <input v-model="Email"/>
                </label>
            </div>
            <div class="Sender">
                <button>Зареєструватись</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                Name:'',
                Surname:'',
                Email:''

            }
        }
    }
</script>

<style>
.Registers{
    display: block;
    border: 2px solid;
}
    .NamesBlock strong, input{
        display: block;
        margin: auto;
        text-align: center;
    }
.NamesBlock{
    margin: 10px;
}
.SurnameBlock strong, input{
    display: block;
    margin: auto;
    text-align: center
}
.SurnameBlock{
    margin: 10px;
}
.YourStatus select{
    display: block;
    margin: auto;
    text-align: center;
}
.YourStatus{
    margin: 10px;
}
    .EmailBlock{
        display: block;
        margin: auto;
        text-align: center;
    }
.EmailBlock{
    margin: 10px;
}
    .Sender button{
        display: block;
        margin: auto;
    }
.Sender{
    margin: 10px;
}

</style>