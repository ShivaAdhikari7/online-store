import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-5">
      <h1 className="heading-primary">OnlineStore</h1>
      <Cart />
    </div>
  );
};

export default Header;
