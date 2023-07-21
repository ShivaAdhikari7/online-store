import { fetchProducts } from "../../api/api";

import { productActions } from "../slices/product";
import { uiActions } from "../slices/ui";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(uiActions.updateUI({ isLoading: true }));

    const allProducts = await fetchProducts();

    console.log(allProducts);

    dispatch(productActions.updateProducts(allProducts));
    dispatch(uiActions.updateUI({ isLoading: false }));
  } catch (errors) {
    dispatch(uiActions.updateUI({ isLoading: false }));
  }
};
