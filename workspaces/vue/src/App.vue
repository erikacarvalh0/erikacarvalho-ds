<template>
		<div id="app">
			     <Button data-component class="btn">Go</Button>     <Img data-component class="image test" />
		</div>
	</template>

	<script>
	
import Button from "./components/button/index.vue";
import Img from "./components/img/index.vue";

	export default {
		name: 'App',
		components: {
			
	Button,
	Img,
		}
	}
	</script>