import { mock, subCategory } from './../../interfaces/data';
import { category } from '@/interfaces/category';
import { Module } from 'vuex';
import mockData from '@/assets/mock.json';
import { findSubCategory } from '@/services/category';

// const data:mock = mockData;

const categoryStore: Module<category, any> = {
  namespaced: true,
  state: {
    main: mockData.categories[0].id,
    sub: mockData.subCategories[0].id,
  },
  mutations: {
    changeMainCate(state, payload) {
      state.main = payload;
      state.sub = findSubCategory(mockData.subCategories, state.main);
    },
    changeSubCate(state, payload) {
      state.sub = payload;
    },
  },
  getters: {
    selectMainCateId(state) {
      return state.main;
    },
    selectSubCateId(state) {
      return state.sub;
    },
  },
};

export default categoryStore;
