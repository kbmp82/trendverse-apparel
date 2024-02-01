import {
  HeaderContainer,
  NavContainer,
  Logo,
  NavLink,
  NavigationWrapper,
  NavigationLinks,
} from "./header.styles";
import React, { useContext, useState } from "react";
//import { Link } from "react-router-dom";
//import { UserContext } from "../../context/user.context";
//import { signOutUser } from "../../utils/firebase/firebase.utils";
import { signOutStart } from "../../store/user/user.action";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

//components
import Container from "./Container";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

export default function Header() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const cartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  //const [cartOpen, setCartOpen] = useState(false);

  function toggleCartDrawer(e) {
    e.preventDefault();
    dispatch(setIsCartOpen(!cartOpen));
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
                    dispatch(signOutStart());
                  }}
                >
                  sign out
                </NavLink>
              ) : (
                ""
              )}
              <NavLink onClick={toggleCartDrawer} to="/cart" aria-label="cart">
                <CartIcon cartCount={cartCount} />
              </NavLink>
            </NavigationLinks>
          </NavigationWrapper>
        </Container>
      </NavContainer>
      <CartDropdown
        open={cartOpen}
        setIsCartOpen={setIsCartOpen}
        cartCount={cartCount}
      />
    </HeaderContainer>
  );
}
