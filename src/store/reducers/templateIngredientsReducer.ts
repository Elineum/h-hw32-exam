import { createSlice } from "@reduxjs/toolkit";
import { ConstuctorIngredientItem } from "../../globalTypes/storeTypes";

const initialState: ConstuctorIngredientItem[] = [];

const templateIngredientsSlice = createSlice({
  name: "template-ingredients",
  initialState: initialState,
  reducers: {
    resetCurrIngredient: () => [],
    addCurrIngredients: (state, action) => {
      state.push(action.payload);
    },
    removeCurrIngredients: (state, action) => {
      return state.filter(({ fieldId }) => fieldId !== action.payload);
    },
    updateCurrIngredients: (state, action) => {
      return state.map((item) =>
        item.fieldId === action.payload.fieldId ? action.payload : item
      );
    },
    recalculateAmount: (state, action) => {
      return state.map((item) => ({
        ...item,
        amount: action.payload.size / action.payload.length,
      }));
    },
  },
});

export const {
  addCurrIngredients,
  removeCurrIngredients,
  updateCurrIngredients,
  resetCurrIngredient,
  recalculateAmount,
} = templateIngredientsSlice.actions;
export default templateIngredientsSlice.reducer;
