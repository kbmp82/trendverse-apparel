import "./footer.scss";
import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer__wrapper">
          <div className="footer__logo">
            <img src="/logo_2.png" alt="logo" />
          </div>
          <div className="footer__copyright">
            Copyright &copy; {new Date().getFullYear()}
          </div>
        </div>
      </Container>
    </footer>
  );
}
