<template>
  <div id ="vue">
    <h1>vue page</h1>
    <img src="../assets/image/login/logo.png" alt="" width="100%">
    <router-link to="/vue/suppage">suppage</router-link>
    <router-link to="/vue/subpage">subpage</router-link>
    <h2>{{info}}</h2>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
  div {
    h1 {
      color: #123456;
    }
    h2 {
      color:#56118f;
    }
  }
</style>

<script>
export default {
  name: 'vue',
  data(){
    return{
      info:''
    }
  },
  methods:{

  },
  mounted(){
    // this.info=1123
    // this.adfa()
    this.request()
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  }
}
</script>
