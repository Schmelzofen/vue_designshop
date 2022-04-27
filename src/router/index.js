import { createRouter, createWebHistory } from 'vue-router'
import ProductComp from "../components/ProductComp.vue"
import AddProduct from "../components/AddProduct.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductComp,
  },
  {
    path: '/add',
    name: 'Add Product',
    component: AddProduct,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
