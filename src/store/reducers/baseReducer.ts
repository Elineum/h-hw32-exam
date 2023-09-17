import { createReducer } from "@reduxjs/toolkit";
import createSetBaseAction from "../actions/createSetBaseAction";

const initialState: { name: string }[] = [];

export default createReducer(initialState, {
  [createSetBaseAction.type]: (state, action) => [...state, action.payload],
});
