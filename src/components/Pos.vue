<template>
  <div class="pos">
    <div>
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
            <el-table-column prop="goodsName" label="goods" width="50"></el-table-column>
            <el-table-column prop="count" label="" width="70"></el-table-column>
            <el-table-column prop="price" label="" fixed="right">
              <template scopr="scope">
                <el-button type="text" size="small">remove</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span='17'>
          产品栏
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default{
      name:'Pos',
    data(){
      return{

      }
    },
    mounted:function(){
        var orderHeight=document.body.clientHeight;
        document.getElementById('order').style.height=orderHeight+'px';
    }
  }
</script>
