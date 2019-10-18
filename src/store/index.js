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
  },
});
