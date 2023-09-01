import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Header() {
  return (
    <header>
      <nav className="navigation">
        <Container>
          <div className="navigation__wrapper">
            <Link to="/" className="navigation__link" aria-label="home">
              <img src="/logo_2.png" alt="TrendVerse Logo" />
            </Link>
            <div className="navigation__links">
              <Link
                to="/products"
                className="navigation__link"
                aria-label="shop"
              >
                shop
              </Link>
              <Link
                to="/contact"
                className="navigation__link"
                aria-label="contact us"
              >
                contact
              </Link>
              <Link
                to="/sign-in"
                className="navigation__link"
                aria-label="my account"
              >
                account
              </Link>
              <Link to="/cart" className="navigation__link" aria-label="cart">
                cart
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}