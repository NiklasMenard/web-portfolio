import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FadeInEffect } from "../ComponentStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(FadeInEffect)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.moonGrey};
  a {
    text-decoration: underline;
  }
  a:not(:first-child) {
    margin-left: 2rem;
  }

`;

export default Header;
