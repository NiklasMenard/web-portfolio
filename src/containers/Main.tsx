import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "../types";

const MainContainer = (props: ChildrenProps) => {
  return <Main>{props.children}</Main>;
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export default MainContainer;
