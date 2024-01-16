import {
  HeaderContainer,
  NavContainer,
  Logo,
  NavLink,
  NavigationWrapper,
  NavigationLinks,
} from "./header.styles";
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
    <HeaderContainer>
      <NavContainer>
        <Container>
          <NavigationWrapper>
            <NavLink to="/" aria-label="home">
              <Logo src="/logo_2.png" alt="TrendVerse Logo" />
            </NavLink>
            <NavigationLinks>
              <NavLink to="/shop" aria-label="shop">
                shop
              </NavLink>
              <NavLink to="/contact" aria-label="contact us">
                contact
              </NavLink>
              <NavLink to="/account" aria-label="my account">
                account{" "}
              </NavLink>
              {currentUser ? (
                <NavLink
                  as="span"
                  onClick={() => {
                    signOutUser();
                  }}
                >
                  sign out
                </NavLink>
              ) : (
                ""
              )}
              <NavLink onClick={toggleCartDrawer} to="/cart" aria-label="cart">
                <CartIcon />
              </NavLink>
            </NavigationLinks>
          </NavigationWrapper>
        </Container>
      </NavContainer>
      <CartDropdown open={cartOpen} setCartOpen={setCartOpen} />
    </HeaderContainer>
  );
}
