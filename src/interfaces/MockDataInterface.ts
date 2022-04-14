export interface mockDataType {
  store: store[];
  table: table[];
  categories: mainCategory[];
  subCategories: subCategory[];
  event: event[];
  serviceItems: serviceItems[];
}

export interface store {
  id: string;
  name: string;
  logoURL: string;
}

export interface table {
  id: string;
  title: string;
}

export interface mainCategory {
  id: string;
  name: string;
}

export interface subCategory {
  id: string;
  parentCategoriesCodes: string[];
  name: string;
}

export interface event {
  name: string;
  imgUrl: string;
}

export interface serviceItems {
  id: string;
  name: string;
}
