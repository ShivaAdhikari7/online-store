import Layout from "./components/Layout/Layout";
import SearchField from "./components/Input/SearchField";
// import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";

const App = () => {
  return (
    <Layout>
      <SearchField />
      <ProductDetails />
    </Layout>
  );
};

export default App;
