import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import productSlice from "./productslice";
import commandeslice from "./commandeslice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    produit: productSlice,
    commande: commandeslice,
  },
});
