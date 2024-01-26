import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FadeInEffect } from '../ComponentStyles';
import HamburgerMenu from '../components/HamburgerMenu';

const menuLinks = [
  { label: 'About', link: '/' },
  { label: 'Projects', link: '/projects' },
  { label: 'Contact', link: '/contact' },
];

const Header = () => {
  return (
    <HeaderContainer>
      <HamburgerMenu menuItems={menuLinks} />
      <LinkContainer>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </LinkContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  grid-row: 1;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 15;
  background: linear-gradient(to bottom, rgb(51, 51, 51) 75%, transparent 100%);
  min-height: 3.5rem;
  margin-right: 1rem;
  a:not(:first-of-type) {
    margin-left: 2rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 35rem;
  min-height: 5rem;

  a {
    text-decoration: underline;
    display: none;

    @media ${({ theme }) => theme.devices.md} {
      display: block;
    }

    &:not(:first-of-type) {
      margin-left: auto;
    }
  }
`;

export default Header;
