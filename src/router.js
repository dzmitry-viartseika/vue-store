import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import Cart from './views/Cart.vue';
import CartTemplate from "./components/CartTemplate";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartTemplate,
    },
  ],
  mode: 'history'
});
