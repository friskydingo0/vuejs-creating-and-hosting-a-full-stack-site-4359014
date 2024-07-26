import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductPage from './pages/ProductPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'

createApp(App)
.use(VueRouter.createRouter({
	history: VueRouter.createWebHistory(process.env.BASE_URL),
	routes: [{
		path: '/cart',
		component: ShoppingCartPage,
	}, {
		path: '/products',
		component: ProductPage,
	}, {
		path: '/products/:productId',
		component: ProductDetailPage,
	}]
}))
.mount('#app')
