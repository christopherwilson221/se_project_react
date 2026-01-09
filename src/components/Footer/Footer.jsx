import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__developer">Developed by Christopher Wilson</p>
      <p className="footer__date">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
