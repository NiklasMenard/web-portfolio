import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, Theme } from './globalandtheme';

import Header from './containers/Header';
import PageRoutes from './PageRoutes';

import { MoonLayer, PancakeStack } from './ComponentStyles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Theme>
        <PancakeStack>
          <Header />
          <PageRoutes />
        </PancakeStack>
      </Theme>
      <MoonLayer />
    </BrowserRouter>
  );
};

export default App;
