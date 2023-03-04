import React, { useState } from 'react';

import styled from 'styled-components';

interface MenuItem {
  label: string;
  link: string;
}

interface HamburgerMenuProps {
  menuItems: MenuItem[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyleHamburgerMenu>
      <HamburgerButton open={isOpen} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </HamburgerButton>

      <MenuItems open={isOpen}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </MenuItems>
    </StyleHamburgerMenu>
  );
};

const StyleHamburgerMenu = styled.div`
  position: fixed;
  right: 0.75rem;
  top: 0.75rem;
  z-index: 10;
  display: block;
  @media ${({ theme }) => theme.devices.md} {
    display: none;
  }
`;

const HamburgerButton = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  .bar {
    z-index: 15;
    width: 2rem;
    height: 0.25rem;
    border-radius: 0.1rem;
    border: 1px solid black;
    background-color: ${({ theme }) => theme.colors.melrose};
    transition: transform 0.3s, opacity 0.3s;
  }

  .bar:nth-child(1) {
    transform: ${(props) => (props.open ? 'translateY(9.5px) rotate(50deg)' : 'none')};
  }

  .bar:nth-child(2) {
    opacity: ${(props) => (props.open ? '0' : '1')};
  }

  .bar:nth-child(3) {
    transform: ${(props) => (props.open ? 'translateY(-9px) rotate(-50deg)' : 'none')};
  }
`;

const MenuItems = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 9;
  height: ${(props) => (props.open ? '100%' : '0')};
  background-color: ${({ theme }) => theme.colors.shamrock};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  overflow: hidden;
  transition: all 0.3s;
  text-align: center;

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }

  li {
    padding: 10px;
    display: inline-block;
    margin: auto;
  }

  a {
    color: #333;
    text-decoration: underline;
  }
`;

export default HamburgerMenu;
