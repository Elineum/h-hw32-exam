import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TemplateItem } from "../../globalTypes/storeTypes";

const initialState: TemplateItem[] = [
  {
    name: "Empty",
    id: "empty",
    ingredients: {
      fruits: [{ id: "fru-empty", amountPercent: 0 }],
      vegetables: [{ id: "veg-empty", amountPercent: 0 }],
    },
  },
];

export const fetchTemplates = createAsyncThunk(
  "templates/fetchAll",
  async () => {
    const templatesFetch = await fetch(
      "http://localhost:9998/smoothie-templates"
    );
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
