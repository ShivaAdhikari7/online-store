import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const location = useLocation();

  const [footerClassName, setFooterClassName] = useState("");

  const { isLoading } = useSelector((state) => state.ui);
  const { items } = useSelector((state) => state.cart);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    isLoading || (items.length <= 3 && location.pathname.includes("/cart"))
      ? setFooterClassName("w-100 position-fixed bottom-2")
      : setFooterClassName("");
  }, [items, isLoading, location.pathname]);

  return (
    <footer className={`footer text-center ${footerClassName}`}>
      Copyright &copy; {currentYear}, OnlineStore
    </footer>
  );
};

export default Footer;
