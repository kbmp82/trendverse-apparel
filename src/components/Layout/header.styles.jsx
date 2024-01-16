import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 9;
`;
export const NavContainer = styled.nav`
  background-color: var(--primary-red);
  color: white;
`;
export const Logo = styled.img`
  max-width: 200px;
`;
export const NavLink = styled(Link)`
  color: var(--primary-pink);
  text-decoration: none;
  &:visited {
    color: var(--primary-pink);
  }
  &:hover {
    cursor: pointer;
    color: var(--primary-pink);
    opacity: 0.7;
  }
`;
export const NavigationWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0;

  @media (min-width: 768px) {
    & {
      justify-content: space-between;
      gap: 0px;
      flex-direction: row;
    }
  }
`;
export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  text-transform: uppercase;
  color: var(--primary-pink);
  font-size: 1.8rem;
`;
