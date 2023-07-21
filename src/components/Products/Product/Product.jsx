import Button from "../../Button/Button";
import Ratings from "../Ratings/Ragings";

const Product = (props) => {
  const { className, productInfo } = props;

  return (
    <div className={`${className || ""}`}>
      <div className="product-card d-flex align-items-center flex-column gap-4 px-4 py-2 w-100 h-100">
        <img src={productInfo.image} alt={productInfo.title} />

        <ul className="product-info d-flex flex-column gap-3 pt-3 pb-1 w-100">
          <li className="product-price">$ {productInfo.price}</li>
          <li className="product-title">{productInfo.title}</li>
          <Ratings rating={productInfo.rating} />
        </ul>

        <Button className="w-100 py-3 btn-primary btn-pill mb-2">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
