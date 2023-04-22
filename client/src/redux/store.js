import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/";

import cartReducer, { getTotals } from "./reducer/cartslice";
import productModalReducer from "./reducer/productModalSlice"

const store = configureStore({
  reducer: {
    rootReducer,
    cart: cartReducer,
    productModal: productModalReducer,
  },
},);

store.dispatch(getTotals());
export default store;
