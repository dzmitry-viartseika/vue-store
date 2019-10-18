import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cart from './views/Cart.vue';
import Product from './views/Product.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'About Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our example app.',
          },
          {
            property: 'og:description',
            content: 'The about page of our example app.',
          },
        ],
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title: 'About Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our example app.',
          },
          {
            property: 'og:description',
            content: 'The about page of our example app.',
          },
        ],
      },
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        title: 'About Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our example app.',
          },
          {
            property: 'og:description',
            content: 'The about page of our example app.',
          },
        ],
      },
    },
  ],
  mode: 'history',
});
