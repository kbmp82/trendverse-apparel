import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  /* min-height: 30px; */
  display: flex;
  /* margin-top: 100px; */
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 25px;
  height: fit-content;
  /* justify-content: center; */

  & > h2 {
    font-weight: 400;
  }
`;

export const FormContainer = styled.form`
  margin-top: 50px;
  min-height: 100px;
  /* max-width: 900px; */
  width: 100%;
  & > div {
    width: 100%;
  }
`;
