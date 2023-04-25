<template>
	<view class="home">
		<navbar :isSearch="true"></navbar>
		<view class="home-list">
			<view class="label-box">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear">清空</text>
				</view>
				<view class="label-content">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
		background-color: #f5f5f5;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		.label-box{
			background-color: #fff;
			margin-bottom: 10px;
			display: flex;
			flex-direction: column;
			height: 200px;
			.label-header{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 5px;
				font-size: 14px;
				color: #666;
				border-bottom: 1px solid #f5f5f5 ;
				.label-title{
				}
				.label-clear{
				}
			}
		}
	}
</style>
