<template>
	<div class="">
		<el-row>
			<el-col :span="6">
				<h3>交易额</h3>				
				 <line-chart :chart-data="datacollection"></line-chart>
    			 <button @click="fillData()">Randomize</button>
			</el-col>
			<el-col :span="18">
				<p>232</p>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="6" >
				<h3>订单数</h3>
			</el-col>
			<el-col :span="18">
				<p>232</p>
			</el-col>
		</el-row>
	</div>
</template>




<style type="text/css">
	
</style>
<script>
import LineChart from '../../assets/js/LineChart.js'

export default {
    components: {
        LineChart
    },
    data() {
        return {
            datacollection: null
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {

            this.datacollection= {
                labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt()],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt()]
                    }, {
                        label: 'Data One',
                        backgroundColor: '#0f0',
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),this.getRandomInt()]
                    }
                ]
            };
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    }
}

</script>




