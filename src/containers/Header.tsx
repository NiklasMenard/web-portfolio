import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FadeInEffect } from '../ComponentStyles';

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
  grid-row: 1;
  a {
    text-decoration: underline;
  }

  a::after {
    content: '';
    background: white;
    mix-blend-mode: exclusion;
    width: calc(100% + 1rem);
    height: 0;
    position: absolute;
    bottom: -0.25rem;
    left: -0.7rem;
    border-radius: 0.75rem;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  a:hover::after {
    height: calc(100% + 0.5rem);
  }

  a:not(:first-child) {
    margin-left: 2rem;
  }
`;

export default Header;
