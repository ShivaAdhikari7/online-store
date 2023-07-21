import { useSelector } from "react-redux";

const Footer = () => {
  const { isLoading } = useSelector((state) => state.ui);

  const currentYear = new Date().getFullYear();

  const footerClassName = isLoading ? "w-100 position-fixed bottom-2" : "";

  return (
    <footer className={`footer text-center ${footerClassName}`}>
      Copyright &copy; {currentYear}, OnlineStore
    </footer>
  );
};

export default Footer;
