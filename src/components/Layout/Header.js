import "./header.scss";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

//components
import Container from "./Container";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

export default function Header() {
  const { currentUser } = useContext(UserContext);

  const [cartOpen, setCartOpen] = useState(false);

  function toggleCartDrawer(e) {
    e.preventDefault();
    setCartOpen(!cartOpen);
  }
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
                to="/account"
                className="navigation__link"
                aria-label="my account"
              >
                account{" "}
              </Link>
              {currentUser ? (
                <span
                  onClick={() => {
                    signOutUser();
                  }}
                  className="navigation__link"
                >
                  sign out
                </span>
              ) : (
                ""
              )}
              <Link
                onClick={toggleCartDrawer}
                to="/cart"
                className="navigation__link"
                aria-label="cart"
              >
                <CartIcon />
              </Link>
            </div>
          </div>
        </Container>
      </nav>
      <CartDropdown open={cartOpen} />
    </header>
  );
}
