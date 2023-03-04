import styled from 'styled-components';
import background_image from './assets/background-moon.png';

export const PancakeStack = styled.div`
  display: grid;
  grid-template-rows: 10vh auto;
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
  margin: 0 1.3rem;
  hyphens: auto;
  word-break: normal;
  div,
  ul {
    &:last-child {
      padding-bottom: 40vh;
    }
  }
`;

export const ScrollWrapper = styled.div`
  position: fixed;
  height: 100svh;
  width: 100vw;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.8);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(left, #888, #777);
  }

  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const MoonLayer = styled.div`
  pointer-events: none;
  position: fixed;
  background-image: url(${background_image});
  background-size: cover;
  background-position: 100% 100%;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 35svh;
  @media (min-width: 1024px) {
    min-height: 100svh;
    right: 1rem;
  }
`;

export const GradientListItem = styled.li`
  border: 1px black solid;
  border-radius: 0.75rem;

  transition: transform 0.3s, box-shadow 0.3s;
  background-image: linear-gradient(
    45deg,
    hsl(162deg 60% 55%) 0%,
    hsl(160deg 45% 58%) 21%,
    hsl(159deg 31% 59%) 30%,
    hsl(157deg 18% 59%) 39%,
    hsl(156deg 6% 59%) 46%,
    hsl(255deg 7% 59%) 54%,
    hsl(253deg 20% 60%) 61%,
    hsl(251deg 35% 62%) 69%,
    hsl(248deg 50% 63%) 79%,
    hsl(245deg 67% 64%) 100%
  );
  &:hover {
    transform: scale(1.05);
  }

  p,
  h2,
  a,
  span,
  svg {
    filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.5));
  }
`;
