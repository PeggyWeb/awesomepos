<template>
	<div>
		<h1>一起胖</h1>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="短信登录" name="first">
				<el-input placehoder="手机号">
					<template slot="prepend"></template>
				</el-input>
				<el-input placehoder="验证码">
					<template slot="prepend"></template>
				</el-input>
			</el-tab-pane>
			<el-tab-pane label="密码登录" name="second">
				密码登录
			</el-tab-pane>	
		</el-tabs>
		
	</div>
</template>