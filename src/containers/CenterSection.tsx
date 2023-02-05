import { ReactNode } from 'react';
import styled from 'styled-components';

const CenterSection = ({ children }: { children: ReactNode }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  grid-row: 2;
`;

export default CenterSection;
