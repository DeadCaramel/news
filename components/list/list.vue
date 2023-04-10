<template>
		<swiper class="home-swiper" :current="activeIndex" @change="change" >
			<swiper-item v-for="(item,index) in list" :key="index" class="swiper-item">
				<list-item :list="list"></list-item>
			</swiper-item>
		</swiper>
</template>

<script>
	import listItem from "./list-item.vue"
	export default {
		components:{
			listItem
		},
		props:{
			tab:{
				type:Array,
				default(){
					return []
				}
			},
			activeIndex:{
				type: Number,
				default: 0
			}
		},
		name:"list",
		data() {
			return {
				list:[]
			}
		},
		created(){
			this.getList('后端开发');
		},
		methods:{
			change(e){
				const {current}=e.detail 
				this.getList(this.tab[current].name)
				this.$emit('change',current)
			},
			getList(name){
				this.$api.get_list({name}).then(res=>{
					const {data}=res
					this.list= data
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
			.list-scroll{
				height: 100%;
			}
		}
	}
</style>