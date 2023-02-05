import { createGlobalStyle, ThemeProvider, DefaultTheme } from 'styled-components';
import { PropsWithChildren } from 'react';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0; 
    padding: 0; 
    border: 0;
    background-color: #333333;
    height: 100%;
    overflow-y: scroll;


  &::-webkit-scrollbar {
    width: 1.5rem;
    height: 1rem;
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

  }

  html {
    height: 100%;
    scroll-behavior:smooth
  }

  #root {
    height: 100%;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }


  *, *::after, *::before {
    box-sizing: border-box;
    font-family: IBM Plex Mono,monospace;
  }
  
  input, select, div {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.17rem; }
h4 { font-size: 1.00rem; }
h5 { font-size: 0.83rem; }
h6 { font-size: 0.67rem; }

img, svg, video, canvas {
  height: auto;
}
h1, h2, h3, h4, p, a, span, li {
  color: #eeeeee;
}
img { border-style: none; }

h1, a, li {
  font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
}

p {
  font-size: clamp(1rem, -0.875rem + 1rem, 1.5rem);
}

a{
  display: block;
  text-decoration: none;
  position: relative;
}

`;

const theme: DefaultTheme = {
  colors: {
    moonGrey: 'rgb(51, 51, 51)',
    fern: 'rgb(90, 174, 110)',
    viola: 'rgb(191, 127, 176)',
    violaOpacity: 'rgba(191, 127, 176, 0.4)',
  },
  mediaQuery: {
    mobileWidth: '480px',
    tabletWidth: '760px',
    smallDesktopWidth: '990px',
    desktopWidth: '1400px',
  },
};

const Theme = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { GlobalStyle, Theme };
