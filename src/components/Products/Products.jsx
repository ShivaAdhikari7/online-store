import Product from "./Product/Product";

const Products = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-5 mb-5">
      <Product className="col" />
      <Product className="col" />
      <Product className="col" />
      <Product className="col" />

      <Product className="col" />
      <Product className="col" />
      <Product className="col" />
      <Product className="col" />

      <Product className="col" />
      <Product className="col" />
      <Product className="col" />
      <Product className="col" />
    </div>
  );
};

export default Products;
