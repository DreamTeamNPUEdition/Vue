<template>
  <div id="app">
    <Header/>
        <div>
            <router-view></router-view>
        </div>
  </div>
</template>


<script>

import Header from "./components/Header";
import store from "./store/store";
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'App',
    store,
  components: {
    Header

  },
    computed:{
        ...mapGetters([
            'GET_Users',

        ]),
    },
    methods:{
      ...mapActions([
          'GetUsersData'
      ])
    },
    mounted() {
        this.GetUsersData();
    }

}


</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
