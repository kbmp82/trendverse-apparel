import { styled, keyframes } from "styled-components";

export const colorfadetext = keyframes`
    0% {
    color: var(--light-grey);
  }

  100% {
    color: var(--primary-red);
  }
`;

export const CategoryGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const CategoryImage = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const CategoryCTA = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--light-grey);
  text-transform: capitalize;
`;

export const CategoryContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: white;
  padding: 15px;
  opacity: 0.7;
  transition: opacity 0.3s linear;
  border: 2px solid var(--primary-grey);
  border-radius: 3px;

  &:hover {
    cursor: pointer;

    ${CategoryCTA} {
      animation-name: ${colorfadetext};
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
    }
  }
`;

export const Category = styled.div`
  width: 100%;
  overflow: hidden;
  border: 2px solid var(--primary-grey);
  border-radius: 3px;

  .category__wrapper {
    position: relative;
    height: 100%;
  }

  .category__title {
    font-weight: 600;
    font-size: 1.8rem;
    text-transform: uppercase;
  }

  &:hover {
    ${CategoryImage} {
      transform: scale(1.2);
      transition: transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    ${CategoryContent} {
      opacity: 0.9;
    }
  }

  &.category--medium {
    height: 300px;
  }

  &.category--large {
    height: 400px;
  }
  @media (min-width: 768px) {
    &.category--medium {
      max-width: calc((100% / 3) - var(--gap) + (var(--gap) / 3));
    }

    &.category--large {
      max-width: calc((100% / 2) - var(--gap) + (var(--gap) / 2));
    }
  }
`;
