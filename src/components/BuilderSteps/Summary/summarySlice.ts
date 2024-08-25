import { summaryData } from "@/config/builderData";
import { createSlice } from "@reduxjs/toolkit";

const summarySlice = createSlice({
  name: "summary",
  initialState: summaryData,
  reducers: {
    setInput: (state: { [key: string]: string }, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setInput } = summarySlice.actions;
export default summarySlice.reducer;
