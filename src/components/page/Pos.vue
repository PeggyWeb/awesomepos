<template>
  <div class="pos">
    <el-row>
      <el-col :span='7'>
        <el-tabs>
          <el-tab-pane label='点餐'>
            点餐
          </el-tab-pane>
          <el-tab-pane label='挂单'>
            挂单
          </el-tab-pane>
          <el-tab-pane>
            外卖
          </el-tab-pane>
        </el-tabs>
        <el-table :data="tableData" border show-summaty style="width:100%">
          <el-table-column prop="goodsName" label="商品"></el-table-column>
          <el-table-column prop="goodsName" label="量" width="50"></el-table-column>
          <el-table-column prop="count" label="金额" width="70"></el-table-column>
          <el-table-column prop="price" label="操作" fixed="right">
            <template scopr="scope">
              <el-button type="text" size="small">删除</el-button>
              <el-button type="text" size="small">增加</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="div-btn">
          <el-button type="warning">挂单</el-button>
          <el-button type="danger">删除</el-button>
          <el-button type="success">结账</el-button>
        </div>
      </el-col>
      <el-col :span='17'>
        产品栏
      </el-col>
    </el-row>
  </div>
</template>
<style>
.pos-order{background-color: #F9fafc;border-right:1px solid #c0ccda;height: 100%}
.div-btn{margin-top:10px;}
}
</style>
<script>
  export default{
      name:'Pos',
    data(){
      return{
         tableData: [{          
            goodsName: '可口可乐',
            price: 8,
            count:1
          }, {
            
            goodsName: '香辣鸡腿堡',
            price: 15,
            count:1
          }, {
           
            goodsName: '爱心薯条',
            price: 8,
            count:1
          }, {
           
            goodsName: '甜筒',
            price: 8,
            count:1
          }]
        }     
      },
    mounted:function(){
        var orderHeight=document.body.clientHeight;
        document.getElementById('order').style.height=orderHeight+'px';
    }
  }
</script>
