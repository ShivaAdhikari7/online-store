import Button from "../../Button/Button";
import Ratings from "../Ratings/Ragings";

const Product = (props) => {
  const { className } = props;

  const productValue = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  return (
    <div className={`${className || ""}`}>
      <div className="product-card d-flex align-items-center flex-column gap-4 px-4 py-2">
        <img src={productValue.image} alt={productValue.title} />

        <ul className="product-info d-flex flex-column gap-3 pt-3 pb-2">
          <li className="product-price">$ {productValue.price}</li>
          <li className="product-title">{productValue.title}</li>
          <Ratings rating={productValue.rating} />
        </ul>

        <Button className="w-100 py-3 btn-primary btn-pill mb-3">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
