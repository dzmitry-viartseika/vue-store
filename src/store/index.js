import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    brands: [
      {
        title: 'Apple',
        id: 1,
      },
      {
        title: 'Huawei',
        id: 2,
      },
      {
        title: 'Meuzi',
        id: 3,
      },
      {
        title: 'Samsung',
        id: 4,
      },
      {
        title: 'Versel',
        id: 5,
      },
      {
        title: 'Xiaomi',
        id: 6,
      },
      {
        title: 'Asus',
        id: 7,
      },
    ],
    goods: [
      {
        id: 1,
        title: 'Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)',
        img: '9801258729522.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        price: '4,241.50',
      },
      {
        id: 2,
        title: 'Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)',
        img: '9801258729522.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        price: '4,241.50',
      },
      {
        id: 3,
        title: 'Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)',
        img: '9801258729522.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        price: '4,241.50',
      },
      {
        id: 4,
        title: 'Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)',
        img: '9801258729522.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        price: '4,241.50',
      },
    ],
  },
});
