import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import uiReducer from "./slices/ui";

const store = configureStore({
  reducer: { product: productReducer, ui: uiReducer },
});

export default store;
