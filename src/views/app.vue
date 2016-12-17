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
		width: 25%;
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
</style>

<template>
	<div id="wrapper">
		<div class="content">
			<LogTable />
			<h3>[进程控制台]</h3>
			<InputArea />
			<div class="time-input">
				请输入时间片:
				<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner">
				<button type="button" class="el-button time-button">
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
							<input type="radio" value="1" id="StaticPriority" name="algorithm" />
							<label for="StaticPriority"></label>
							<label for="StaticPriority">静态优先权算法</label>
						</div>
				    </div>
					<div>
						<div class="checkbox-three">
							<input type="radio" value="2" id="DynamicPriority" name="algorithm" />
							<label for="DynamicPriority"></label>
							<label for="DynamicPriority">动态优先权算法</label>
						</div>
					</div>
					<div>
						<div class="checkbox-three">
							<input type="radio" value="3" id="SimplePath" name="algorithm" />
							<label for="SimplePath"></label>
							<label for="SimplePath">简单轮转法</label>
						</div>
					</div>
					<div>
						<div class="checkbox-three">
							<input type="radio" value="4" id="VariableTime" name="algorithm" />
							<label for="VariableTime"></label>
							<label for="VariableTime">可变时间片轮转法</label>
						</div>
					</div>

				</div>
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
					name: '',
					right: 0,
					nTime: 0,
					rTime: 0,
					time: 0,
					state: ''
				},
				dataStruct_Array: []
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
			ChoosetheAlgorithm(event) {
				// console.log(event.currentTarget);
				console.log(event.currentTarget.firstElementChild);
				event.currentTarget.firstElementChild.firstElementChild.className += ' is-checked';
				console.log(event.target.value);
			}
		},
		components: {
			LogTable, InputArea
		}
	}
</script>