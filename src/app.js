import Vue 			      from 'vue';
import VueRouter 	      from 'vue-router';

import store		from './vuex/store';
import routers 		from './router';

Vue.use(VueRouter);


const router = new VueRouter({
	base: __dirname,
	routes: routers,
	linkActiveClass: 'active'
});


const app = new Vue({
	store,
	router
}).$mount('#app');
