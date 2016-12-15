<style>
	#content {
		min-width: 960px;
	}
</style>

<template>
	<div>
		<div id="wrapper">
			<router-view></router-view>
    	</div>
	</div>
</template>

<script>
	export default {
		created() {
			// console.log("created");
		},
		mounted() {
			// console.log("mounted");
			// console.log(this.$el);
		},
		data() {
			return {
				message: 'Hello World',
				count: 0
			}
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			
		},
		components: {
			
		}
	}
</script>