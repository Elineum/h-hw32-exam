import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TemplateItem } from "../../globalTypes/storeTypes";

const initialState: TemplateItem[] = [
  {
    name: "Loading...",
    id: "Loading...",
    image: "Loading...",
    baseRatioPercent: 0,
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
  },
];

export const fetchTemplates = createAsyncThunk(
  "templates/fetchAll",
  async () => {
    const templatesFetch = await fetch("http://localhost:9998/smoothie-list");
    const templates = await templatesFetch.json();
    return templates;
  }
);

const templatesSlice = createSlice({
  name: "templares",
  initialState: initialState,
  reducers: {
    setTemplates: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTemplates.fulfilled, (_, action) => action.payload);
  },
});

export const { setTemplates } = templatesSlice.actions;
export default templatesSlice.reducer;
