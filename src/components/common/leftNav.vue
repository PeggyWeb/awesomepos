<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-wodezichan"></i>
        <div>收银</div>
      </li>
      <li>
          <i class="icon iconfont icon-dianpu"></i>
          <div>店铺</div>
      </li>
      <li>
        <router-link to="/">
          <i class="icon iconfont icon-hanbao"></i>
          <div>商品</div>
        </router-link>
      </li>
      <li>
        <router-link to="/order">
          <i class="icon iconfont icon-huiyuanqia"></i>
          <div>订单</div>
        </router-link>
      </li>
      <li>
        <router-link to="/statistics">
        <i class="icon iconfont icon-tongji"></i>
        <div>统计</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style>
  .left-nav{
    float: left;
    width:5%;
    height:100%;
    font-size: 10px;
    color:#fff;
    text-align:center;
    background-color: #1D8ce0;
  }
  .left-nav .iconfont{
    font-size:24px;
  }
  .left-nav ul{
    padding:0px;
    margin:0px;
  }
  .left-nav li{
    list-style: none;
    text-align: center;
    border-bottom:1px solid #20a0ff;
    padding:10px;
  }
  .left-nav a{color:inherit;text-decoration: none}
</style>
<script>
  export default{
    name:'leftNav',
    data(){
          return{

          }
    }
  }
</script>
