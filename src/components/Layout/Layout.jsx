import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="container-fluid px-5 py-4 position-relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
