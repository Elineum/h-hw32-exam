import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "none";

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    setModal: (_, action) => action.payload,
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
