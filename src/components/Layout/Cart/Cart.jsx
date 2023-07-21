import CartIcon from "../../Icons/CartIcon";

const Cart = () => {
  return (
    <div className="cart position-relative">
      <CartIcon className="cart-icon" />
      <span className="d-flex align-items-center justify-content-center cart-item-count position-absolute text-center p-2">
        2
      </span>
    </div>
  );
};

export default Cart;
