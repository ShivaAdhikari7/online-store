import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "./Product/Product";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinnner";

import { fetchAllProducts } from "../../store/actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.product);
  const { isLoading } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <h2 className="heading-secondary mb-5">All Products</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-5 mb-5">
          {allProducts.map((product) => (
            <Product productInfo={product} key={product.id} className="col" />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
