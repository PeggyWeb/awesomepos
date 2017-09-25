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
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-tongji"></i>
        <div>统计</div>
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
  .iconfont{
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
