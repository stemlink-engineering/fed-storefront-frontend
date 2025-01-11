import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

import { Api } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

setupListeners(store.dispatch);
