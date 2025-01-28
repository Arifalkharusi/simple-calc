import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "Name",
  initialState: { data: [] },
  reducers: { func: (state, action) => {} },
});

export const { func } = calculatorSlice.actions;
export default calculatorSlice.reducer;
