<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height:statusBarHeight+'px'}"></view>
			<view class="nvabar-content" :style="{height:navBarHeight+'px',width:windowWidth+'px'}">
				<view class="navbar-search">
					<!-- <view class="navbar-search_icon iconfont icon-sousuo"></view> -->
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">
						search
					</view>
				</view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+navBarHeight+ 'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45,
				windowWidth:750
			};
		},
		created(){
			const info=uni.getSystemInfoSync()
			this.statusBarHeight=info.statusBarHeight
			this.windowWidth=info.windowWidth
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo=uni.getMenuButtonBoundingClientRect()
			this.navBarHeight=(menuButtonInfo.bottom-info.statusBarHeight)
			+(menuButtonInfo.top-info.statusBarHeight)
			this.windowWidth=menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icon.css';
	.navbar{
		.navbar-fixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			background-color: $mk-base-color;
			.nvabar-content{
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				height: 45px;
				-webkit-box-sizing: border-box;
				.navbar-search{
					display: flex;
					align-items: center;
					width: 100%;
					height: 30px;
					background-color: #fff;
					border-radius: 30px;
					padding: 0 10px;
					.navbar-search_icon{
						margin-right: 10px;
					}
					navbar-search_icon::before{
						display: inline-block;
						width: 10px;
						height: 10px;
						content: "";
						background-color: blue;
						
					}
					.navbar-search_text{
						font-size: 12px;
						color: #999;
					}
					
				}
			}
			
		}
		
	}
</style>