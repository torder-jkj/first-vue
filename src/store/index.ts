import { createStore } from 'vuex';
import CategoryStore from './modules/CategoryStore';

export default createStore({
  modules: {
    category: CategoryStore,
  },
});
