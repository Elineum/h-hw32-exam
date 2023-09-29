export type IngredientItem = {
  id: string;
  inStock: boolean;
  name: string;
  literPrice: number;
};

export type IngredientList = {
  [category: string]: IngredientItem[];
};

export type PortionItem = {
  name: string;
  id: string;
  size: number;
};

export type TemplateIngredientItem = {
  id: string;
  amountPercent: number;
};

export type TemplateItem = {
  name: string;
  id: string;
  ingredients: {
    fruits: TemplateIngredientItem[];
    vegetables: TemplateIngredientItem[];
  };
};

export type ConstuctorIngredientItem = {
  name: string;
  id: string;
  inStock: boolean;
  literPrice: number;
  fieldId: string;
  amount: number;
};

export type ReduxStore = {
  ingredients: IngredientList;
  portions: PortionItem[];
  templates: TemplateItem[];
  templateIngredients: ConstuctorIngredientItem[];
};
