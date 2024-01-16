import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
  top: -20px;
  font-size: 1.2rem;
  color: var(--primary-grey);
`;

export const FormInputLabel = styled.label`
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  top: 10px;
  left: 0;
  color: var(--light-grey);
  position: absolute;
  font-size: 1.4rem;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const FormInputBox = styled.input`
  border-color: var(--primary-grey);
  border: none;
  min-height: 35px;
  border-bottom: 1px solid var(--primary-grey);

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 30px;
`;
