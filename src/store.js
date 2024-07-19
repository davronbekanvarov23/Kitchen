import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./app/userSlice";
import productReducer from "./app/productSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/login"],
        ignoredPaths: ["user.user"],
      },
    }),
});
