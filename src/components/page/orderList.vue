<template>
	<div class="bg-gray order">
    <el-tabs>
      <el-tab-pane label="新订单">
        <el-row>
          <el-col :span="16">
            <div class="order-detail bg-fff">
              <div class="header mb-20">
                <b class="color-blue f18">31</b>
                希望尽快送达，建议11：15分送达
                <b class="fr">等待接单</b>
              </div>
              <div>
                <b class="f18">王小虎</b><span class="text-commentaries">#90天内第3次下单</span>
                <span class="color-blue fr"><span class="iconfont">&#xe610;</span>18888888888</span>
              </div>
              <div>
                上海市普陀区金沙江路1518
                <span class="fr color-blue"><span class="iconfont">&#xe65b;</span>地图</span>
              </div>
              <div>
                <p><span class="color-orange">备注:</span><b>不要辣,不要一次性筷子</b></p>
                <p><span class="color-orange">发票:</span>天天快递</p>
              </div>
              <div class="header">
                <b>商品</b>
                <span class="fr color-blue">收起<span class="iconfont">&#xe611;</span></span>
              </div>
              <table class="product-tlist">
                <tr>
                  <td>美式奥尔良鸡腿原味咖喱饭<p class="colorn-blue">[大份+微辣]</p></td>
                  <td><b><span class="iconfont">&#xe634;</span>1</b></td>
                  <td>89.00</td>
                </tr>
                <tr>
                  <td>日本照烧鸡排原味咖喱饭<p class="color-blue">[大份+微辣]</p></td>
                  <td><b><span class="iconfont">&#xe634;</span>1</b></td>
                  <td>89.00</td>
                </tr>
              </table>
            </div>
          </el-col>
          <el-col :span="8">
            <asideData></asideData>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="预订单提醒">
      </el-tab-pane>
      <el-tab-pane label="取消订单">
      </el-tab-pane>
      <el-tab-pane label="配送异常">
      </el-tab-pane>
      <el-tab-pane label="催单">
      </el-tab-pane>
      <el-tab-pane label="售后退款">
      </el-tab-pane>
    </el-tabs>
	</div>
</template>
<style>
  .order{height: 100%;}
  .bg-gray{
    text-align:left;
    background-color:#EFF2F7
  }
  .el-tabs__header{background-color: #fff;}
  .el-tabs__content{margin: 20px;}
  .bg-fff{background-color:#fff;}
  .order-detail{
    padding:0 15px;
    line-height: 30px;
    font-size:15px;
  }
  .header{
    border-bottom: 1px solid #eee;
    padding:5px 0;
  }
  .text-commentaries{
    margin:0 10px;
    font-size: 14px;
    color:#666;
  }
  .meals-address{
    font-size:16px;
  }
  .product-tlist{
    width:100%;
    font-size: 15px;
    font-weight:500;
  }
  .product-tlist td{vertical-align: middle;}
  .product-tlist tr td:last-child{text-align:center;}
  .color-blue{color:#20A0FF}
  .f18{font-size: 18px;}
    b{font-weight:800;}
    .mt-20{margin-top: 20px;}
    .mb-20{margin-bottom:20px;}
    .ml-20{margin-left:20px;}
    .card-simple{padding:15px 20px}
    .card-content{
      padding:20px 0;
      line-height:26px;
    }
</style>

<script>
import asideData from "../common/asideData"
  export default{
  	name:"orderLists",
  	data(){
	  return{

	  }
  	},
  	components:{
      asideData
  	},
  	mounted:function(){

  	}
  }
</script>
