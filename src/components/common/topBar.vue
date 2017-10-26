<template>
	<div class="topBar">
		<router-link to="/" class="fl">一起胖</router-link>
		<router-link to="/login" class="fr">
			<i class="icon iocnfont"></i>
			登录
		</router-link>
	</div>
</template>
<style type="text/css">
  .topBar{
  	padding:15px 20px;
  	font-weight: bold;
  	background-color: #1F2D3D;
  	color:#fff;
  	overflow: hidden;
  }  
</style>


<script type="text/javascript">
	export default{
		name:'topBar',
		data(){
			return{


			}
		}
	}
</script>










