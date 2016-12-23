<style>
	.inputArea {

	}
	.inputArea .el-table__body-wrapper {
		height: auto;
	}
	.inputArea-header tr {
		background: #c9e5f5;
	}
	.el-input__inner {
		-webkit-appearance: none;
	    -moz-appearance: none;
	    appearance: none;
	    background-color: #fff;
	    background-image: none;
	    /*border-radius: 4px;
	    border: 1px solid #c0ccda;*/
	    border: none;
	    box-sizing: border-box;
	    color: #1f2d3d;
	    display: block;
	    font-size: inherit;
	    height: 36px;
	    line-height: normal;
	    outline: none;
	    padding: 3px 10px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    width: 100%;
	}
	.inputArea .cell {
		padding: 0;
	}
	.el-button {
		display: inline-block;
	    margin: 0 50px;
	    padding: 10px 15px;
	    box-sizing: border-box;
	    border-radius: 4px;
	    border: 1px solid #c0ccda;
	    color: #1f2d3d;
	    line-height: 1;
	    white-space: nowrap;
	    text-align: center;
	    font-size: 14px;
	    background: #fff;
	    cursor: pointer;
	    -webkit-appearance: none;
	    outline: none;
	    -moz-user-select: none;
	    -webkit-user-select: none;
	    -ms-user-select: none;
	}
</style>

<template>
	<div class="el-table inputArea">
        <div class="hidden-columns">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="el-table__header-wrapper inputArea-header">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header">
                <thead>
                    <tr>
                        
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">作业名</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">到达时间</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">服务时间</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell"></div>
                        </th>
                        <th class="gutter" style="width: 0px;"></th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="el-table__body-wrapper inputArea-body">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
                <tbody>
                    <tr>
                        <td>
                            <div class="cell">
                            	<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner" v-model="processName">
                            </div>
                        </td>
                        <td>
                            <div class="cell">
                            	<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner" v-model="arriveTime">
                            </div>
                        </td>
                        <td>
                            <div class="cell">
                            	<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner" v-model="serveTime">
                            </div>
                        </td>
                        <td>
                            <div class="cell">
                            	<button type="button" class="el-button el-button--default" @click="joinProcess">
                            		<!---->
                            		<!---->
                            		<span>加入该进程</span>
                            	</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				processName: '',
				arriveTime: '',
				serveTime: ''
			}
		},
		methods: {
			joinProcess() {
				if(!this.processName || !this.arriveTime || !this.serveTime) {
					alert("请输入数据!");
					return;
				} else {
					var processData = {
						name: this.processName,
						arriveTime: parseInt(this.arriveTime),
						serveTime: parseInt(this.serveTime),
						rTime: 0, 
						completeTime: 0,
						arroundTime: 0,
						weightTime: 0
					};
					console.log(processData);
					this.$emit('join', processData);

					this.processName = '';
					this.arriveTime = '';
					this.serveTime = '';
				}
				
			}
		}
	}
</script>