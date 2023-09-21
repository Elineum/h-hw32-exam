export type BaseItem = {
  name: string;
  id: string;
  pricePer10ml: number;
};

export type IngredientItem = {
  id: string;
  image: string;
  name: string;
  pricePer10g: number;
};

export type PortionItem = {
  name: string;
  id: string;
  size: number;
};

export type TemplateItem = {
  name: string;
  id: string;
  image: string;
  baseRatioPercent: number;
  base: {
    id: string;
    basePercentage: number;
  }[];
  ingredients: {
    id: string;
    amountPercent: number;
  }[];
};

export type CurrentBaseItem = {
  id: string;
  basePercentage: number;
};

export type CurrentSetupItem = {
  name: string;
  id: string;
  image: string;
  baseRatio: number;
  base: CurrentBaseItem[];
  ingredients: {
    id: string;
    amountPercent: number;
  }[];
};

export type ReduxStore = {
  base: BaseItem[];
  ingredients: IngredientItem[];
  portions: PortionItem[];
  templates: TemplateItem[];
  currentSetup: CurrentSetupItem;
  activeModal: string;
};
