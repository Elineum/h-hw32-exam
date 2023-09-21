import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseItem } from "../../globalTypes/storeTypes";

const initialState: BaseItem[] = [
  { name: "Loading...", id: "Loading...", pricePer10ml: 0 },
];

export const fetchBase = createAsyncThunk("base/fetchAll", async () => {
  const baseFetch = await fetch("http://localhost:9998/smoothie-base");
  const base = await baseFetch.json();
  return base;
});

const baseSlice = createSlice({
  name: "base",
  initialState: initialState,
  reducers: {
    setBase: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBase.fulfilled, (_, action) => action.payload);
  },
});

export const { setBase } = baseSlice.actions;
export default baseSlice.reducer;
