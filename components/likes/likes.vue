<template>
	<view class="icons" @click.stop="likeTap">
		<uni-icons size="20" color="#f07373" :type="like?'heart-filled':'heart'"></uni-icons>
	</view>
</template>

<script>
import $http from '../../common/http';
	export default {
		name: "likes",
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
				like:false
			};
		},
		watch:{
			item(newVal){
				this.like=this.item.is_like
			}
		},
		created(){
			this.like=this.item.is_like
		},
		methods:{
			likeTap(){
				this.like=!this.like
				console.log(this.item.id);
				this.updateLike()
			},
			updateLike(){
				uni.showLoading()
				this.$api.update_like({
					user_id:"640eb8e60c801c2ac923dabc",
					article_id:this.item.id
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
				}).catch(()=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style>
	.icons {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
	}
</style>