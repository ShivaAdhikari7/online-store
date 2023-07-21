const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer d-flex align-items-center justify-content-center">
      Copyright &copy; {currentYear}, OnlineStore
    </footer>
  );
};

export default Footer;
