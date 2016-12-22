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
                            <div class="cell">进程名</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">优先权</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">需要运行的时间</div>
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
                            	<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner" v-model="right">
                            </div>
                        </td>
                        <td>
                            <div class="cell">
                            	<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner" v-model="time">
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
				right: '',
				time: ''
			}
		},
		methods: {
			joinProcess() {
				if(!this.processName || !this.right || !this.time) {
					alert("请输入数据!");
					return;
				} else {
					var processData = {
						name: this.processName,
						right: this.right,
						nTime: this.time,
						rTime: 0,
						time: 0,
						state: '等待中'
					};
					console.log(processData);
					this.$emit('join', processData);

					this.processName = '';
					this.right = '';
					this.time = '';
				}
				
			}
		}
	}
</script>