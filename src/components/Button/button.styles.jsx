import { styled, keyframes } from "styled-components";

const colorfade = keyframes`
   0% {
    background: black;
    border: 1px solid black;
  }

  100% {
    color: white;
    background: var(--primary-red);
    border: 1px solid var(--primary-red);
  }
`;

export const DefaultButton = styled.button`
  min-height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 3px;
  width: 100%;

  &:hover {
    cursor: pointer;
    animation-name: ${colorfade};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    opacity: 0.9;
  }
`;

export const GoogleSignInButton = styled(DefaultButton)`
  background: white;
  border: 1px solid black;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    border-color: var(--light-grey);
  }

  img {
    max-width: 35px;
    display: inline;
    order: 1;
  }
`;

export const ATCButton = styled(DefaultButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-transform: capitalize;
  opacity: 0.8;

  &:hover {
    animation-name: ${colorfade};
    animation-duration: 0.3s;

    animation-fill-mode: forwards;
    opacity: 0.9;
  }
`;
