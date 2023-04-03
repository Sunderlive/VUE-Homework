import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage"
import NotFoundPage from "@/pages/NotFoundPage"
import ProductPage from "@/pages/ProductPage"
import CartPage from "@/pages/CartPage"

Vue.use(VueRouter)  // нужно сообщить что мы собираемся использовать VueRouter

const routes = [
{name:'main', component: MainPage, path:'/'},
{name:'product', component: ProductPage, path:'/product/:id'}, // динамический адрес после id
{name:'notFound', component: NotFoundPage, path:'*'},
{name:'cart', component: CartPage, path:'/cart'},
];
// у маршрутов есть приоритет

const router = new VueRouter({               // новый экземпляр роутера
  routes
})

export default router




