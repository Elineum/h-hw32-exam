export default {
  ingredients: {
    fruits: [
      {
        id: "empty",
        inStock: false,
        name: "Empty",
        literPrice: 0,
      },
    ],
    vegetables: [
      {
        id: "empty",
        inStock: false,
        name: "Empty",
        literPrice: 0,
      },
    ],
  },
  portions: [{ name: "Loading...", id: "Loading...", size: 0 }],
  templates: [
    {
      name: "Empty",
      id: "empty",
      ingredients: {
        fruits: [{ id: "fru-empty", amountPercent: 0 }],
        vegetables: [{ id: "veg-empty", amountPercent: 0 }],
      },
    },
  ],
  templateIngredients: [],
};
