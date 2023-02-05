import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, Theme } from './globalandtheme';
import PageRoutes from './PageRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Theme>
        <PageRoutes />
      </Theme>
    </BrowserRouter>
  );
};

export default App;
