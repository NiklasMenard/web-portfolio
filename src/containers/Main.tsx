import  { ReactNode } from "react";
import styled from "styled-components";


const MainContainer = ({children}: {children: ReactNode}) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export default MainContainer;
