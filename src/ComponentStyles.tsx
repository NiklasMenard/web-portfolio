import styled from 'styled-components';
import background_image from './assets/background-moon.png';

export const PancakeStack = styled.div`
  display: grid;
  grid-template-rows: 10vh auto;
  position: relative;
  height: 100%;
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
  padding: 0 2.5rem;
  margin: 0 auto;
  text-align: center;

  div,
  ul {
    &:last-child {
      padding-bottom: 45vh;
    }
  }
  svg {
    margin: 0 1rem;
  }
`;

export const MoonLayer = styled.div`
  background-image: url(${background_image});
  overflow: hidden;
  background-size: cover;
  background-position: 100% 100%;
  min-height:  100vh;

  @media only screen and (max-width: 760px) {
    min-height:  60vh;
  }


  pointer-events: none;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
`;
