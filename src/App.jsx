import Layout from "./components/Layout/Layout";
import SearchField from "./components/Input/SearchField";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <Layout>
      <SearchField />
      <Products />
    </Layout>
  );
};

export default App;
