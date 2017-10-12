<template>
	<div class="">
		<el-row>
			<el-col :span="6">
				<h3>交易额</h3>	
				<div class="progressbar">
        			<div class="left-container">
			            <div class="left-circle" :style="{transform:'rotate('+dataProgressBar[0]+'deg)'}"></div>
			        </div>
			        <div class="right-container">
			            <div class="right-circle" :style="{transform:'rotate('+dataProgressBar[1]+'deg)'}"></div>
			        </div>
			    </div>		
				 <p>30天最高7000</p>
			</el-col>
			<el-col :span="18">
				<line-chart :chart-data="datacollection"></line-chart>
    			<button @click="fillData()">Randomize</button>
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
	.progressbar{
    position: relative;
    margin: 50px auto;
    width: 100px;
    height: 100px;
    border: 2px solid #ccc;
    border-radius: 50%;
}
.left-container,.right-container{
    position: absolute;
    width: 70px;
    height: 140px;
    top:-3px;
    overflow: hidden;
    z-index: 1;
}
.left-container{
    left: -20px;
}
.right-container{
    right: -3px;
}
.left-circle,.right-circle{
    position: absolute;
    top:0;
    width: 98px;
    height: 98px;
    border:4px solid transparent;   
    border-radius: 50%;    
    transition: all .5s linear;
    z-index: 2;
}
.left-circle{
    left: 17px;
    border-top: 4px solid #1D8ce0;
    border-left: 4px solid #1D8ce0;
    transform: rotate(-225deg);
}
.right-circle{
    border-right: 4px solid #1D8ce0;
    border-bottom: 4px solid #1D8ce0;
    right: 0;
    transform: rotate(-45deg);
}
</style>
<script>
import LineChart from '../../assets/js/LineChart.js'

export default {
    components: {
        LineChart
    },
    data() {
        return {
            datacollection: null,
            dataProgressBar:[0,0]
        }
    },
    mounted() {
        this.fillData();
        this.setProgessBar(8000,5000);
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
        },
        setProgessBar(max,cur){
        	max=+max;
        	cur=+cur;
        	let mcPercent=cur/max,
        	    ldeg=mcPercent*360-180-225,
        	    rdeg=mcPercent*360-225;
        	if(typeof max ==='number' && typeof cur ==='number'){
        	    if(mcPercent>0.5){
        	    	return this.dataProgressBar=[ldeg,-45]
        	    }else if(mcPercent<=0.5){
        	    	return this.dataProgressBar=[-225,rdeg]
        	    }
        	}else{
        	    return false;
        	}
        }
    }
}

</script>




