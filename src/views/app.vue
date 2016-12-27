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
				:processArray="dataReady_Array"
			/>
			<MemoryTable 
				:areaArray="areaFree_Array"
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
			<!-- <div class="time-input">
				请输入时间片:
				<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner" id="timeInput" v-model="time">
				<button type="button" class="el-button time-button" @click="submitTime">
            		<span>确定</span>
            	</button>
			</div> -->
			<div>
				<h4>选择算法:</h4>
				<div class="algorithm">
				    <div>
				    	<div class="checkbox-three">
							<input type="radio" value="1" id="first" name="algorithm" v-on:change="ChoosetheAlgorithm"/>
							<label for="first"></label>
							<label for="first">首次适应算法</label>
						</div>
				    </div>
					<div>
						<div class="checkbox-three">
							<input type="radio" value="2" id="best" name="algorithm"v-on:change="ChoosetheAlgorithm" />
							<label for="best"></label>
							<label for="best">最佳适应算法</label>
						</div>
					</div>
					<div>
						<div class="checkbox-three">
							<input type="radio" value="3" id="whileFirst" name="algorithm" v-on:change="ChoosetheAlgorithm"/>
							<label for="whileFirst"></label>
							<label for="whileFirst">循环首次适应算法</label>
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
	import MemoryTable  from '../components/memoryTable.vue';	

	export default {
		created() {
			// console.log("created");
		},
		mounted() {
			// console.log("mounted");
			// console.log(this.$el);
			this.initializeArea();

		},
		data() {
			return {
				message: 'Hello World',
				count: 0,
				processStruct: {
					name: '',    		//进程名
					serveTime: 0,	 	//服务时间
					size: 0,			//空间大小
					addr: 0,			//zone first address
					state: ''    		//运行状态
				},			
				areaStruct: {
					name: '',           //分块名称
					size: 0,			//块空间大小
					addr: 0,			//首地址
					state: ''			//状态
				},
				dataReady_Array: [{
					name: 'job1',
					serveTime: 8,
					size: 6,
					addr: 0,
					state: '未分配'
				},{
					name: 'job2',
					serveTime: 5,
					size: 100,
					addr: 0,
					state: '未分配'
				},{
					name: 'job3',
					serveTime: 12,
					size: 40,
					addr: 0,
					state: '未分配'
				},{
					name: 'job4',
					serveTime: 10,
					size: 70,
					addr: 0,
					state: '未分配'
				}],
				dataAs_Array: [],
				areaFree_Array: [],
				areaAs_Array: [],
				area_Array: [],
				algorithmType: 0
			}
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			reset() {
				
				for(var i = 0; i < this.dataReady_Array.length; i ++) {
					var addr = this.dataReady_Array[i].addr;

					for(var j = 0; j < this.area_Array.length; j++) {
						if(addr == this.area_Array[j].addr) {
							if(j == 0) {
								for(var k = 0; k < this.areaFree_Array.length; k++) {
									if(this.areaFree_Array[k] == this.area_Array[1]) {
										alert("回收两块(No.0,1)空间");
										var zoom = this.area_Array[0].size + this.area_Array[1].size;
										alert("大小为" + zoom);
									} else {
										alert("回收1块(No.0)空间");
										var zoom = this.area_Array[0].size;
										alert("大小为" + zoom);
									}
								}

							} else if(j == this.area_Array.length -1) {

								for(var k = 0; k < this.areaFree_Array.length; k++) {
									if(this.areaFree_Array[k] == this.area_Array[j - 1]) {
										alert("回收两块(Nolast.0,1)空间");
										var zoom = this.area_Array[j].size + this.area_Array[j - 1].size;
										alert("大小为" + zoom);
									} else {
										alert("回收1块(Nolast.0)空间");
										var zoom = this.area_Array[j].size;
										alert("大小为" + zoom);
									}
								}

							} else {

								for(var k = 0; k < this.areaFree_Array.length; k++) {
									var zoom = 0;

									if(this.areaFree_Array[k] == this.area_Array[j - 1]) {
										// alert("回收两块(Nolast.0,1)空间");
										zoom += this.area_Array[j - 1].size;
										
									} else if(this.areaFree_Array[k] == this.area_Array[j + 1]) {
										zoom += this.area_Array[j + 1].size;
										
									} else {
										alert("回收1块空间");
										zoom += this.area_Array[j].size;
										
									}
									
								}
								alert("回收空间完成");
								alert("大小为" + zoom);
							}
						}
					}
				}
				this.areaFree_Array = this.area_Array;
			},
			ChoosetheAlgorithm(event) {
				// console.log(event.currentTarget);
				console.log(event.target.value);
				this.algorithmType = event.target.value;
			},
			joinProcess(processData) {
				console.log(processData);
				this.dataReady_Array.push(processData);
			},
			createArea(name, size, addr) {
				
				var area = {
					name: name,
					size: size,
					addr: addr,
					state: '未分配'
				};

				return area;
			},
			initializeArea() {
				var areaA = this.createArea('a', 10, 5);
				this.area_Array.push(areaA);
				this.areaFree_Array.push(areaA);				
				var areaB = this.createArea('b', 120, 10);
				this.area_Array.push(areaB);
				this.areaFree_Array.push(areaB);
				var areaC = this.createArea('c', 40, 160);
				this.area_Array.push(areaC);
				this.areaFree_Array.push(areaC);
				var areaD = this.createArea('d', 10, 220);
				this.area_Array.push(areaD);
				this.areaFree_Array.push(areaD);
				var areaE = this.createArea('e', 20, 250);
				this.area_Array.push(areaE);
				this.areaFree_Array.push(areaE);
				var areaF = this.createArea('f', 80, 330);
				this.area_Array.push(areaF);
				this.areaFree_Array.push(areaF);

				console.log(this.area_Array);
				// this.areaFree_Array = this.area_Array;
			},
			executeAlgorithm() {

				switch(this.algorithmType){
					case "1": 
						this.FIRST();
						break;
					case "2": 
						this.BEST();
						break;
					case "3":
						this.WHILEFIRST();
						break;
					default: 
						alert("请先选择算法");				
				} 
			},
			FIRST() {
				alert("执行首次适应算法");

				if(!this.dataReady_Array.length) {
					alert("就绪队列为空");
					return;
				} else {
					console.log(this.dataReady_Array);
					this.dataReady_Array.sort(this.compare());
					alert("作业排序完成!");
					for(var index = 0; index < this.dataReady_Array.length; index ++) {
						// alert(index);
						this.Core(1 * 1000, index);
					}

				}
			},
			BEST() {
				alert("执行最佳适应算法");

				if(!this.dataReady_Array.length) {
					alert("就绪队列为空");
					return;
				} else {
					console.log(this.dataReady_Array);
					this.dataReady_Array.sort(this.compare());
					alert("作业排序完成!");
					for(var index = 0; index < this.dataReady_Array.length; index ++) {
						// alert(index);
						this.Core(1 * 1000, index);
					}

				}
				console.log(this.area_Array);
			},
			WHILEFIRST() {
				alert("执行循环首次适应算法");

				if(!this.dataReady_Array.length) {
					alert("就绪队列为空");
					return;
				} else {
					console.log(this.dataReady_Array);
					this.dataReady_Array.sort(this.compare());
					alert("作业排序完成!");
					for(var index = 0; index < this.dataReady_Array.length; index ++) {
						// alert(index);
						this.worstCore(1 * 1000, index);
					}

				}				
			},
			Core(n, i) {
				var  start = new Date().getTime();   

			    // this.dataStruct_Array[i].state = '运行中';

			    console.log(this.dataReady_Array);

			    while(true) {
			    	if(new Date().getTime() - start > n) {

						// this.dataReady_Array[i].rTime += this.time;
			    		// $($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[3]).html(this.dataReady_Array[i].rTime.toString());

						console.log(this.dataReady_Array[i]);
						
						for(var j = 0; j < this.areaFree_Array.length; j++) {
							if(this.areaFree_Array[j].size >= this.dataReady_Array[i].size) {
								
								this.dataReady_Array[i].state = '已分配';
								$($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[3]).html('已分配');

								this.dataReady_Array[i].addr = this.areaFree_Array[j].addr;
								$($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[2]).html(this.areaFree_Array[j].addr);

								// this.area_Array[j].state = '已分配';
								this.areaAs_Array.push(this.areaFree_Array[j]);
								this.areaFree_Array.splice(j, 1);
								alert("分配完成");
								break;
							}
						}

						// alert("没有合适的分区");
						break;	
			    	} 
			    }
			},
			worstCore(n, i) {
				var  start = new Date().getTime();   

			    // this.dataStruct_Array[i].state = '运行中';

			    console.log(this.dataReady_Array);
			    var temp = [];

			    while(true) {
			    	if(new Date().getTime() - start > n) {

						// this.dataReady_Array[i].rTime += this.time;
			    		// $($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[3]).html(this.dataReady_Array[i].rTime.toString());

						console.log(this.dataReady_Array[i]);
						
						for(var j = i; j < this.areaFree_Array.length; j++) {
							if(this.areaFree_Array[j].size >= this.dataReady_Array[i].size) {
								this.dataReady_Array[i].state = '已分配';
								$($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[3]).html('已分配');
								this.dataReady_Array[i].addr = this.areaFree_Array[j].addr;
								$($($(".el-table__body-wrapper table tbody tr")[i]).find('td')[2]).html(this.areaFree_Array[j].addr);
								alert("分配完成");
								break;
							}
						}

						alert("没有合适的分区");
						break;	
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
			LogTable, InputArea, MemoryTable
		}
	}
</script>