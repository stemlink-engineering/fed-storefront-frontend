import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setClientSecret: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClientSecret } = paymentSlice.actions;

export default paymentSlice.reducer;
