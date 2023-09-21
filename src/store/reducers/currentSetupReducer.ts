import { createSlice } from "@reduxjs/toolkit";
import { CurrentSetupItem } from "../../globalTypes/storeTypes";

const initialState: CurrentSetupItem = {
  name: "Loading...",
  id: "Loading...",
  image: "Loading...",
  baseRatio: 0,
  base: [
    {
      id: "Loading...",
      basePercentage: 0,
    },
  ],
  ingredients: [
    {
      id: "Loading...",
      amountPercent: 0,
    },
  ],
};

const currentSetupSlice = createSlice({
  name: "currentSetup",
  initialState: initialState,
  reducers: {
    setCurrentSetup: (_, action) => action.payload,
    addIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    removeBase: (state, action) => {
      state.base = state.base.filter((base) => base.id !== action.payload);
    },
    addBase: (state, action) => {
      state.base.push(action.payload);
    },

    // updateIngredient: (state, action) => {
    //   state.ingredients.map((ingredient)=> ingredient.id !== action.payload.id ? ingredient : )
    // }
  },
});

export const {
  setCurrentSetup,
  addIngredient,
  removeIngredient,
  removeBase,
  addBase,
} = currentSetupSlice.actions;
export default currentSetupSlice.reducer;
