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
export default {
  name: 'App',
    store,
  components: {
    Header

  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
