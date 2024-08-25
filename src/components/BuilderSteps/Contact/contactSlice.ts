import { contactData } from "@/config/builderData";
import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: contactData,
  reducers: {
    setInput: (state: { [key: string]: string }, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setInput } = contactSlice.actions;
export default contactSlice.reducer;
