<style>
    
	.el-table {
        position: relative;
        border-right: 0;
        border-bottom: 0;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        background-color: #fff;
        border: 1px solid #e0e6ed;
        font-size: 14px;
        color: #1f2d3d;
    }
    .el-table:before {
        content: '';
        position: absolute;
        background-color: #e0e6ed;
        z-index: 1;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
    }
    .el-table .hidden-columns {
        visibility: hidden;
        position: absolute;
        z-index: -1;
    }
    .el-table__header-wrapper {
        width: 100%;
        overflow: hidden;
    }
    .el-table__header, .el-table__body {
        table-layout: fixed;
        width: 100%;
    }
    .el-table th {
        position: relative;
        box-sizing: border-box;
        min-width: 0;
        height: 40px;
        border-right: 1px solid #e0e6ed;
        background-color: #eff2f7;
        text-align: left;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
    }
    .el-table td {
        position: relative;
        box-sizing: border-box;
        height: 40px;
        min-width: 0;
        border-bottom: 1px solid #e0e6ed;
        border-right: 1px solid #e0e6ed;
        text-overflow: ellipsis;
        vertical-align: middle;
    }
    .el-table th.isleaf {
        border-bottom: 1px solid #e0e6ed;
    }
    .el-table .cell {
        box-sizing: border-box;
        padding-left: 18px;
        padding-right: 18px;
        line-height: 24px;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        overflow: hidden;
    }
    .el-table th > .cell {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        line-height: 20px;
        vertical-align: middle;
        text-overflow: ellipsis;
        word-wrap: normal;
    }
    .el-table__body-wrapper {
        position: relative;
        width: 100%;
        /*height: 300px;*/
        height: 240px;
        overflow: auto;
    }
    .areaBody {
        height: 240px;
    }
</style>

<template>
	<div class="el-table">
        <div class="hidden-columns">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="el-table__header-wrapper">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header">
                <thead>
                    <tr>
                        <!--=============================================-->
                        <!-- <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">进程名</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">优先权</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">需要运行的时间</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">已经运行的时间</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">状态</div>
                        </th>
                        <th class="gutter" style="width: 0px;"></th> -->
                        <!--=============================================-->
                       <!--  <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">作业名</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">到达时间</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">服务时间</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">完成时间</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">周转时间</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">带权周转时间</div>
                        </th> -->
                        <!--=============================================-->
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">分区块</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">分区首地址</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">分区大小</div>
                        </th>
                        <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">分配状态</div>
                        </th>
                        <th class="gutter" style="width: 0px;"></th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="el-table__body-wrapper areaBody">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
                <tbody>
                    <tr v-for="item in areaArray">
                        
                        <td>
                            <div class="cell">{{ item.name }}</div>
                        </td>
                        <td>
                            <div class="cell">{{ item.addr }}</div>
                        </td>
                        <td>
                            <div class="cell">{{ item.size }}</div>
                        </td>
                        <td>
                            <!-- 运行中,等待中,运行完毕 -->
                            <div class="cell">{{ item.state }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>
</template>

<script>
	export default {
		props: ['areaArray'],
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>