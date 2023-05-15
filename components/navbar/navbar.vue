<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height:statusBarHeight+'px'}"></view>
			<view class="nvabar-content" :class ="{search:isSearch}" :style="{height:navBarHeight+'px',width:windowWidth+'px'}" @click.stop="open">
				<view v-if="isSearch" class="navbar-conent__search-icons" @click="back">
					<uni-icons type="back" size="22" color="#fff" ></uni-icons>
				</view>
				<view v-if="!isSearch" class="navbar-search">
					<!-- <view class="navbar-search_icon iconfont icon-sousuo"></view> -->
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">
						search 
					</view>
				</view>
				<view v-else class="navbar-search">
					<input class="navbar-search_text" type="text" v-model="val" @input="inputChange" placeholder="请输入您要搜索的内容">
				</view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+navBarHeight+ 'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		props:{
			value:{
				type:[String,Number],
				default:''
			},
			isSearch:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45,
				windowWidth:750,
				val:''
			};
		},
		watch:{
			value(newVal){
				this.val=newVal
			}
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
		},
		methods:{
			back(){
				// uni.navigateBack()
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			},
			open(){
				if(this.isSearch) return
				uni.navigateTo({
					url:"/pages/home-search/home-search"
				})
			},
			inputChange(e){
				 const {value}=e.detail
				 this.$emit('input',value)
			}
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
						width: 100%;
						font-size: 12px;
						color: #999;
					}
				}
				&.search{
					padding-left: 0;
					.navbar-content__search-icons{
						margin-left: 10px;
						margin-left: 10px;
					}
					.navbar-search{
						border-radius: 5px;
					}
				}
			}
			
			
		}
		
	}
</style>