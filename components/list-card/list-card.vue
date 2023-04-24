<template>
	<view @click="open">
	<!-- 基础卡片 -->
	<view v-if="item.mode==='base'" class="listcard">
		<view class="listcard-image">
			<image :src="item.cover[0]" mode="aspectFill"></image>
		</view>
		<view class="listcard-content">
			<view class="listcard-content_title">
				<text>{{item.title}}</text>
				<likes :item="item"></likes>
			</view>
			<view class="listcard-content__des">
				<view class="listcard-content__des-label">
					<view class="listcard-content__des-label-item">
						{{item.classify}}
					</view>
				</view>
				<view class="listcard-content__des-browe">
					{{item.browse_count}}浏览
				</view>
			</view>
		</view>
	</view>
	<!-- 多图卡片 -->
	<view v-if="item.mode==='column'" class="listcard mode-column">
		<view class="listcard-content">
			<view class="listcard-content_title">
				<text>{{item.title}}</text>
				<likes :item="item"></likes>
			</view>
			<view class="listcard-image">
				<view v-if="index<3" v-for="(item,index) in item.cover" :key="index" class="listcard-image__item">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</view>
			<view class="listcard-content__des">
				<view class="listcard-content__des-label">
					<view class="listcard-content__des-label-item">
						{{item.classify}}
					</view>
				</view>
				<view class="listcard-content__des-browe">
					{{item.browse_count}}浏览
				</view>
			</view>
		</view>
	</view>
	
	<!-- 大图卡片 -->
	<view v-if="item.mode==='image'" class="listcard mode-image">
		<view class="listcard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
		</view>
		<view class="listcard-content">
			<view class="listcard-content_title">
				<text>{{item.title}}</text>
				<likes :item="item"></likes>
			</view>
			<view class="listcard-content__des">
				<view class="listcard-content__des-label">
					<view class="listcard-content__des-label-item">
						{{item.classify}}
					</view>
				</view>
				<view class="listcard-content__des-browe">
					{{item.browse_count}}浏览
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name:"list-card",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			open(){
				console.log("open");
			}
		}
	}
</script>

<style lang="scss">
	// 基础卡片
	.listcard{
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		.listcard-image{
			flex-shrink: 0;
			height: 60px;
			width: 60px;
			border-radius: 5px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.listcard-content{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;
			box-sizing: border-box;
			.listcard-content_title{
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;
				text{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				
			}
			.listcard-content__des{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content__des-label{
					display: flex;
					.listcard-content__des-label-item{
						padding: 0 5px;
						color: $mk-base-color;
						margin-right: 5px;
						border-radius: 15px;
						border: 1px $mk-base-color solid;
					}
				}
				.listcard-content__des-browe{
					color: #999;
					line-height: 1.5;
				}
			}
		}
		// 多图模式
		&.mode-column{
			.listcard-content{
				width: 100%;
				padding-left: 0;
				.listcard-content_title{
					text{
						-webkit-line-clamp: 1;

					}
				}
			}
			.listcard-image{
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;
				.listcard-image__item{
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					&:first-child{
						margin-left: 0;
					}
					image{
						widows: 100%;
						height: 100%;
					}
				}
			}
			.listcard-content__des{
				margin-top: 10px;
			}
		}
		// 大图模式
		&.mode-image{
			flex-direction: column;
			.listcard-image{
				width: 100%;
				height: 100px;
			}
			.listcard-content{
				padding-left: 0;
				margin-top: 10px;
				.listcard-content__des{
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>