<template>
	<div class="login-wrap">
		<h1>一起胖</h1>
		<el-row type="flex" justify="center">
			<el-col :span="5">
				<el-tabs v-model="activeName" >
					<el-tab-pane label="短信登录" name="first">
						<el-input placeholder="手机号" size="large">
							<template slot="append">获取验证码</template>
						</el-input>
						<el-input placeholder="验证码" size="large">
							 
						</el-input>
						<p class="tips">温馨提示：未注册的手机号，登录时将自动注册，切代表您已同意《用户服务协议》</p>
					</el-tab-pane>
					<el-tab-pane label="密码登录" name="second">
						<el-input placeholder="手机/邮箱/用户名" size="large">
						</el-input>
						<el-input placeholder="密码" size="large">
							 <el-switch v-model="value1" slot="append" on-text="abc" off-text="···" size="small">
							 	
							 </el-switch>
						</el-input>
					</el-tab-pane>	
				</el-tabs>
				<el-button type="success" size="large" class="btn-login">登录</el-button>
			</el-col>
		</el-row>		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				activeName:'first',
				value1:true
			}
		}
	}
</script>
<style type="text/css">
	.el-tabs__nav-scroll{
		display: flex;
		justify-content: center;
	}
	.el-input{margin-bottom:15px}
	.login-wrap{min-width: 1200px;}
	.btn-login{width:100%;}
	.tips{color:#888;font-size:14px;}
</style>

















