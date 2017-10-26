<template>

  <div id="app">
    <!-- <topBar></topBar> -->
    <leftNav v-show="$route.path!=='/login'"></leftNav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import leftNav from './components/common/leftNav'
  import topBar from './components/common/topBar'
export default {
  name: 'app',
  components:{
    leftNav,
    topBar
  }
}
</script>

<style>
#app {
  min-width: 1110px;
  font-family: 'microsoft yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .main{
    float:left;
    width:95%;
    height:100%;
    background-color:#fff;
    overflow: auto;
  }
  a {color:inherit;text-decoration:none;}
</style>
