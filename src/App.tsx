import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, Theme } from './globalandtheme';

import Header from './containers/Header';
import PageRoutes from './PageRoutes';

import { MoonLayer, PancakeStack, ScrollWrapper } from './ComponentStyles';
import CenterSection from './containers/CenterSection';

const App = () => {
  return (
    <ScrollWrapper>
      <BrowserRouter>
        <GlobalStyle />
        <Theme>
          <PancakeStack>
            <Header />
            <CenterSection>
              <PageRoutes />
            </CenterSection>
          </PancakeStack>
        </Theme>
        <MoonLayer />
      </BrowserRouter>
    </ScrollWrapper>
  );
};

export default App;
