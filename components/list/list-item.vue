<template>
	<list-scroll class="list-scroll" @loadmore="loadmore">
		<list-card v-for="item in list" :item="item" :key="item._id">
			
		</list-card>
		<uni-load-more v-if="list.length>9" iconType="snow" :status="load.loading"></uni-load-more>
	</list-scroll>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default () {
					return []
				}
			},
			load:{
				type:Object,
				default (){
					return {
						loading:'loading'
					}
				}
			}
		},
		watch:{
			load(newVal){
				console.log(newVal)
			}
		},
		methods: {
			loadmore(){
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>