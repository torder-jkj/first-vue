import { mainCategory, subCategory } from '@/interfaces/MockDataInterface';
import { categoryState } from '@/interfaces/store/CategoryStoreInterface';
import { Module } from 'vuex';
import mockData from '@/assets/mock.json';

const categoryStore: Module<categoryState, any> = {
  namespaced: true,
  state: {
    selectMainCategory: mockData.categories[0],
    selectSubCategory: mockData.subCategories[0],
  },
  mutations: {
    changeMainCate(state, payload: mainCategory) {
      state.selectMainCategory = payload;
    },
    changeSubCate(state, payload: subCategory) {
      state.selectSubCategory = payload;
    },
  },
  getters: {
    getMainCategoryId(state) {
      return state.selectMainCategory.id;
    },
    getSubCategoryId(state) {
      return state.selectSubCategory.id;
    },
  },
};

export default categoryStore;
