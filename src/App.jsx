import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
};

export default App;
