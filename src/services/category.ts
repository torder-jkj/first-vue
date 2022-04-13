import { mock, subCategory } from '@/interfaces/data';

export const findSubCategory = (data: subCategory[] | any, id: string): string =>
  data.find((el: subCategory) => el.parentCategoriesCodes[0] === id).id;
