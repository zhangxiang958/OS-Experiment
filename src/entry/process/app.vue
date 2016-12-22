<style>
	body {
		background: rgba(153, 153, 153, 0.8);

	}

	#wrapper {
		position: absolute;
	    top: 70px;
	    bottom: 0;
	    left: 20px;
	    right: 20px;
	    /*width: 800px;*/
	    border: 1px solid rgba(0,0,0,0.2);
	    background: #fff;
	    /*background: #c9e5f5;*/
	    -moz-border-radius-topleft: 15px;
	    -webkit-border-top-left-radius: 15px;
	    border-top-left-radius: 15px;
	    -moz-border-radius-topright: 15px;
	    -webkit-border-top-right-radius: 15px;
	    border-top-right-radius: 15px;
	    -webkit-box-shadow: 0 0 0 2px rgba(0,0,0,0.04);
	    box-shadow: 0 0 0 2px rgba(0,0,0,0.04);
	    overflow: hidden;
	}
	.el-dropdown-menu {
    	position: absolute;
    	top: 0;
    	left: 0;
		margin: 5px 0;
    	padding: 6px 0;
    	min-width: 100px;
    	background-color: #fff;
    	border: 1px solid #d3dce6;
    	box-shadow: 0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.12);
    	z-index: 10;
    	transform-origin: center top 0px;
	}
	.el-dropdown-menu__item {
		list-style: none;
    	line-height: 36px;
    	padding: 0 10px;
    	margin: 0;
    	cursor: pointer;
	}
	.el-dropdown-menu__item:hover {
    	background-color: #e5e9f2;
    	color: #475669;
	}
	.algorithm > div {
		float: left;
		width: 33.333%;
	}
	.checkbox-three {
		/*display: inline-block;*/
		float: left;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		line-height: 1;
		vertical-align: middle;
	}
	input[name="algorithm"] + label {
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		padding: 9px;
		border: 1px solid #c1caca;
		border-radius: 1000px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, .05), inset 0 -15px 10px -12px rgba(0, 0, 0, .05);
		background-color: #fff;
	}
	input[name="algorithm"]:checked + label:before {
		content: ' ';
		position: absolute;
		top: 3px;
		left: 3px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #253c4b;
		box-shadow: inset 0 15px 23px -10px rgba(187, 230, 240, .3), 0 2px 2px rgba(0, 0, 0, .1);
		opacity: .8;
	}
	h3 {
		text-align: center;
	}
	h3 .el-button--warning {
		float: right;
		color: #fff;
		font-weight: 900;
    	background-color: #f7ba2a;
    	border-color: #f7ba2a;	
	}
	.time-input {
		position: relative;
		/*margin: 30px auto;*/
		margin: 30px 5px;
		width: 80%;
	}
	.content .time-input .el-input__inner {
		width: 20%;
		border-radius: 4px;
	    border: 1px solid #c0ccda;
	}
	.time-button {
		position: absolute;
		left: 18%;
		top: 24px;
	}
	.do-wrapper {
		position: relative;
		margin-top: 100px;
	}
	.do-wrapper .el-button--success {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 300px;
		/*height: 100px;*/
		margin: 0 auto;
		color: #fff;
		font-weight: 900;
    	background-color: #13ce66;
    	border-color: #13ce66;
	}

</style>

<template>
	<div id="wrapper">
		<div class="content">
			<LogTable 
				:processArray="dataStruct_Array"
			/>
			<h3>
				[进程控制台]
				<button type="button" class="el-button el-button--warning" @click="reset">
					<!---->
					<!---->
					<span>重置</span>
				</button>
			</h3>
			<InputArea 
				v-on:join="joinProcess"
			/>
			<div class="time-input">
				请输入时间片:
				<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner" id="timeInput" v-model="time">
				<button type="button" class="el-button time-button" @click="submitTime">
            		<!---->
            		<!---->
            		<span>确定</span>
            	</button>
			</div>
			<div>
				<h4>选择算法:</h4>
				<div class="algorithm">
				    <div>
				    	<div class="checkbox-three">
							<input type="radio" value="1" id="StaticPriority" name="algorithm" v-on:change="ChoosetheAlgorithm"/>
							<label for="StaticPriority"></label>
							<label for="StaticPriority">静态优先权算法</label>
						</div>
				    </div>
					<!-- <div>
						<div class="checkbox-three">
							<input type="radio" value="2" id="DynamicPriority" name="algorithm" v-on:change="ChoosetheAlgorithm"/>
							<label for="DynamicPriority"></label>
							<label for="DynamicPriority">动态优先权算法</label>
						</div>
					</div> -->
					<div>
						<div class="checkbox-three">
							<input type="radio" value="3" id="SimplePath" name="algorithm"v-on:change="ChoosetheAlgorithm" />
							<label for="SimplePath"></label>
							<label for="SimplePath">简单轮转法</label>
						</div>
					</div>
					<div>
						<div class="checkbox-three">
							<input type="radio" value="4" id="VariableTime" name="algorithm" v-on:change="ChoosetheAlgorithm"/>
							<label for="VariableTime"></label>
							<label for="VariableTime">可变时间片轮转法</label>
						</div>
					</div>
					
				</div>
			</div>
			<div class="do-wrapper">
				<button type="button" class="el-button el-button--success" @click="executeAlgorithm">
					<!---->
					<!---->
					<span>执行算法</span>
				</button>
			</div>
		</div>
		<!-- <ul class="el-dropdown-menu">
			<li class="el-dropdown-menu__item">黄金糕</li>
			<li class="el-dropdown-menu__item">狮子头</li>
			<li class="el-dropdown-menu__item">螺蛳粉</li>
			<li class="el-dropdown-menu__item">双皮奶</li>
			<li class="el-dropdown-menu__item">蚵仔煎</li>
		</ul> -->
	</div>
</template>

<script>
	import LogTable  	from '../components/table.vue';
	import InputArea	from '../components/inputArea.vue';	

	export default {
		created() {
			// console.log("created");
		},
		mounted() {
			// console.log("mounted");
			// console.log(this.$el);
		},
		data() {
			return {
				message: 'Hello World',
				count: 0,
				dataStruct: {
					name: '',    //进程名
					right: 0,    //优先权
					nTime: 0,	 //需要运行的时间
					rTime: 0,    //已运行时间
					time: 0,	 //
					state: ''    //运行状态
				},
				dataStruct_Array: [
				{
					name: 'a',
					right: '5',
					nTime: 1,
					rTime: 0,
					state: '等待中'
				},
				{
					name: 'b',
					right: '2',
					nTime: 2,
					rTime: 0,
					state: '等待中'
				},
				{
					name: 'c',
					right: '3',
					nTime: 3,
					rTime: 0,
					state: '等待中'
				}],
				algorithmType: 0,
				time: 1
			}
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			testMdl() {
				alert("!!!!!");
			},
			reset() {
				this.dataStruct_Array = [];
			},
			ChoosetheAlgorithm(event) {
				// console.log(event.currentTarget);
				console.log(event.target.value);
				this.algorithmType = event.target.value;
			},
			submitTime() {
				if(this.time === 0) {
					alert("请输入时间片");
				} else {
					alert("时间片已确定");
				}
			},
			joinProcess(processData) {
				console.log(processData);
				this.dataStruct_Array.push(processData);
			},
			executeAlgorithm() {

				switch(this.algorithmType){
					case "1": 
						this.StaticPriority();
						break;
					case "2": 
						this.DynamicPriority();
						break;
					case "3":
						this.SimplePath();
						break;
					case "4": 
						this.VariableTime();
						break;
					default: 
						alert("请先选择算法");				
				} 
			},
			StaticPriority() {
				
				if(!this.dataStruct_Array.length) {
					alert("就绪队列为空");
					return;
				} else {
					console.log(this.dataStruct_Array);
					this.dataStruct_Array.sort(this.compare('right'));
					console.log(this.dataStruct_Array);
					for(var index = 0; index < this.dataStruct_Array.length; index ++) {
						// alert(index);
						index = this.Core(this.time * 1000, index);
					}

				}
				
			}, 
			// DynamicPriority() {
			// 	alert("DynamicPriority");
			// },
			SimplePath() {
				// alert("SimplePath");

				if(!this.dataStruct_Array.length) {
					alert("就绪队列为空");
					return;
				} else {

					for(var index = 0; index < this.dataStruct_Array.length; index ++) {
						// alert(index);
						index = this.Core(this.time * 1000, index);
					}

				}

			},
			Core(n, i) {
				var  start = new Date().getTime();   

			    // this.dataStruct_Array[i].state = '运行中';

			    console.log(this.dataStruct_Array);
			    this.$set(this.dataStruct_Array[i], 'state', '运行中');
			    $($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[4]).html('运行中');
			   	alert("时间片执行完毕");
			    // this.dataStruct_Array = [];
			    console.log(this.dataStruct_Array);
			    while(true) {
			    	if(new Date().getTime() - start > n) {

						this.dataStruct_Array[i].rTime += this.time;
			    		$($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[3]).html(this.dataStruct_Array[i].rTime.toString());

						console.log(this.dataStruct_Array[i]);
						
						if(this.dataStruct_Array[i].rTime == this.dataStruct_Array[i].nTime){
							//break
							this.dataStruct_Array[i].state = '已完成';
							$($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[4]).html('已完成');
							// this.dataStruct_Array.splice(i, 1);
							// i ++;
						} else {
							i --;
						}
			    		return i;	
			    	} 
			    }
			},
			VariableTime() {
				// alert("VariableTime");
				if(!this.dataStruct_Array.length || !this.time) {
					alert("就绪队列为空");
					return;
				} else {

					for(var index = 0; index < this.dataStruct_Array.length; index ++) {
						// alert(index);
						index = this.Core(this.time * 1000, index);
					}

				}
			},
			compare(prop) {
				return function(a, b){
					var value1 = a[prop];
					var value2 = b[prop];
					return value1 - value2;
				}
			}
		},
		components: {
			LogTable, InputArea
		}
	}
</script>