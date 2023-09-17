import { createReducer } from "@reduxjs/toolkit";
import createSetIngredientsAction from "../actions/createSetIngredientsAction";

const initialState: { name: string }[] = [];

export default createReducer(initialState, {
  [createSetIngredientsAction.type]: (state, action) => [
    ...state,
    action.payload,
  ],
});
