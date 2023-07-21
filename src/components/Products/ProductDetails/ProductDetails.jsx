import { useLocation } from "react-router-dom";

import Button from "../../Button/Button";
import Ratings from "../Ratings/Ratings";

const ProductDetails = () => {
  const {
    state: { productInfo },
  } = useLocation();

  return (
    <div className="container mb-5 product-details">
      <div className="row align-items-center g-0">
        <div className="col-6">
          <img
            className="w-75"
            src={productInfo.image}
            alt={productInfo.title}
          />
        </div>
        <div className="col-6">
          <div className="d-flex flex-column gap-4">
            <h2 className="heading-secondary">{productInfo.title}</h2>

            <Ratings rating={productInfo.rating} />

            <p className="m-0 p-0 category">
              Category:{" "}
              <span className="text-capitalize">{productInfo.category}</span>
            </p>

            <span className="price">$ {productInfo.price}</span>

            <p className="m-0 p-0 description">{productInfo.description}</p>

            <div className="d-flex align-items-center gap-4">
              <Button className="btn-secondary py-3 px-5">Buy now</Button>
              <Button className="btn-primary py-3 px-5">Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
