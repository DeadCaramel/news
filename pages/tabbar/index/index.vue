<template>
	<view class="home">
		<!-- 自定义组件 -->
		<navbar></navbar>
		<tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
		<view class="home-list">
			<list :tab="tabList" :activeIndex="activeIndex" @change="change"></list>
		</view>
	</view>
</template>

<script>
	import navbar from '@/components/navbar/navbar.vue'
	import tab from '@/components/tab/tab.vue'
	export default {
		components:{
			navbar
		},
		data() {
			return {
				title: 'Hello',
				tabList:[],
				tabIndex:0,
				activeIndex:0,
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			tab({data,index}){
				this.activeIndex=index
			},
			getLabel(){
				this.$api.get_label({
					type:"all"
				}).then((res)=>{
					const {data}=res
					data.unshift({
						name:"全部"
					})
					this.tabList=data
				})
			},
			change(current){
				this.tabIndex=current
				this.activeIndex=current
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
