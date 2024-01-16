import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  background-color: white;
  max-width: 300px;
  width: 100%;
  position: absolute;
  top: -100%;

  right: -100%;
  opacity: 0;
  z-index: -1;
  padding: 20px;
  max-height: 80vh;
  overflow: auto;
  border: 2px solid black;
  transition: all 0.2s ease-in;
  &.active {
    top: 170px;
    right: 20px;
    height: auto;
    opacity: 1;
  }
`;

export const CartDropdownHeader = styled.div`
  padding-bottom: 30px;
  text-align: center;
`;

export const CartQuantity = styled.span`
  font-weight: 600;
`;

export const CartDropdownFooter = styled.div`
  padding-top: 20px;
  border-top: 1px solid var(--primary-grey);
`;
