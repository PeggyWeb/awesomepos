<template>
	<div class="bg-gray">
    <el-tabs>
      <el-tab-pane label="新订单">
        <el-row>
          <el-col :span="16">
            <div class="order-detail">
              <div class="header">
                <b class="color-blue f16">31</b>
                希望尽快送达，建议11：15分送达
                <b class="fr">等待接单</b>
              </div>
              <div>
                <span class="f16">王小虎</span><span class="color-666">#90天内第3次下单</span>
                <span>18888888888</span>
                上海市普陀区金沙江路1518
                地图
              </div>
              <div>
                <span>备注</span>不要辣,不要一次性筷子
                <span>发票:天天快递</span>
              </div>
              <div>
                商品
                收起
              </div>
              <div>
                美式奥尔良鸡腿原味咖喱饭<span>[大份+微辣]</span></div>
              1
              89.00
              <div>美式奥尔良鸡腿原味咖喱饭<span>[大份+微辣]</span></div>
              1
              89.00
              <div>美式奥尔良鸡腿原味咖喱饭<span>[大份+微辣]</span></div>
              2
              89.00
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
.bg-gray{
  text-align:left;
  background-color:#EFF2F7
}
.el-tabs__header{background-color: #fff;}
.el-tabs__content{
	margin: 20px;
	background-color:#fff;
}
.order-detail{
	padding:0 15px;
	line-height: 30px;
}
.header{
	border-bottom: 1px solid #eee;
	padding:5px 0;
}
.color-666{color:#666}
.color-blue{color:#20A0FF}
.f16{font-size: 16px;}
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
