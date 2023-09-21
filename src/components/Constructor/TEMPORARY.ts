export default {
  name: "Tropical Berry Fusion",
  id: "tropical-berry-fusion",
  image: "image",
  base: {
    common: [
      { id: "milk", basePercentage: 40 },
      { id: "water", basePercentage: 30 },
    ],
    nested: [
      {
        id: "juice-fruit",
        list: [
          { id: "orange", basePercentage: 10 },
          { id: "apple", basePercentage: 10 },
          { id: "pear", basePercentage: 10 },
        ],
      },
    ],
  },
  ingredients: [
    { id: "strawberry", amountPercent: 10 },
    { id: "banana", amountPercent: 10 },
    { id: "blueberry", amountPercent: 10 },
    { id: "kiwi", amountPercent: 30 },
    { id: "grapefruit", amountPercent: 40 },
  ],
};
