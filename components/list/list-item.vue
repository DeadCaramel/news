<template>
	<list-scroll class="list-scroll">
		<list-card v-for="item in list" :item="item" :key="item._id"></list-card>
		<!-- <uni-load-more iconType="snow" :status="loading"></uni-load-more> -->
	</list-scroll>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>