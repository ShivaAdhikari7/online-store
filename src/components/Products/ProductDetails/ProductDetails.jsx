import Button from "../../Button/Button";
import Ratings from "../Ratings/Ragings";

const ProductDetails = () => {
  const productDetails = {
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
    <div className="container mb-5 product-details">
      <div className="row align-items-center g-0">
        <div className="col-6">
          <img
            className="w-75"
            src={productDetails.image}
            alt={productDetails.title}
          />
        </div>
        <div className="col-6">
          <div className="d-flex flex-column gap-4">
            <h2 className="heading-secondary">{productDetails.title}</h2>

            <Ratings rating={productDetails.rating} />

            <p className="m-0 p-0 category">
              Category:{" "}
              <span className="text-capitalize">{productDetails.category}</span>
            </p>

            <span className="price">$ {productDetails.price}</span>

            <p className="m-0 p-0 description">{productDetails.description}</p>

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
