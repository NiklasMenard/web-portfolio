import styled from "styled-components";
import background_image from "./assets/background-moon.png";

export const PancakeStack = styled.div`
  display: grid;
  grid-template-rows: 15vh auto;
  position: relative;
`;

export const FadeInEffect = styled.div`
  animation: 1.5s ease-out 0s 1 fadeIn;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ICenterContainer {
  height?: string;
}

export const CenterContainer = styled(FadeInEffect)<ICenterContainer>`
  max-width: 35rem;
  text-align: center;
  min-height: ${(props) => props.height};
  @media only screen and (min-width: ${(props) => props.theme.mediaQuery.tabletWidth}) {
    min-height: 130vh;
  }
  svg {
    margin: 1rem;
  }
`;

export const MoonLayer = styled.div`
  background-image: url(${background_image});
  overflow: hidden;
  background-size: cover;
  background-position: 100% 100%;
  min-height: 55vh;
  pointer-events: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
