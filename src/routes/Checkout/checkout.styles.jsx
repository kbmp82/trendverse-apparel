import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  & > div {
    width: 100%;
  }

  @media (min-width: 1025px) {
    & > div {
      width: calc(50% - 50px);
    }
  }
`;
