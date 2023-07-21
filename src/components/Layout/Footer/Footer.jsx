const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer text-center">
      Copyright &copy; {currentYear}, OnlineStore
    </footer>
  );
};

export default Footer;
