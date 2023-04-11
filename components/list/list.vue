<template>
		<swiper class="home-swiper" :current="activeIndex" @change="change" >
			<swiper-item v-for="(item,index) in listCatchData" :key="index" class="swiper-item">
				<list-item :list="listCatchData[index]"></list-item>
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
				list:[],
				listCatchData:{}
			}
		},
		watch:{
			tab(newVal){
				if(newVal.length===0){
					return 
				}
				this.getList(this.activeIndex)
			},
			activeIndex(newVal){
				this.getList(newVal)
			}
		},
		created(){
		},
		methods:{
			change(e){
				console.log(e);
				const {current}=e.detail 
				this.$emit('change',current)
				if(!this.listCatchData[current]||this.listCatchData[current].length===0){
					this.getList(current)
				}
			},
			getList(current){
				this.$api.get_article({
					classify: this.tab[current].name==='全部'?'':this.tab[current].name
					}).then(res=>{
					const {data}=res
					// this.list= data
					// this.listCatchData[current]=data
					this.$set(this.listCatchData,current,data)
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