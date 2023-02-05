import styled from 'styled-components';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { CenterContainer } from '../ComponentStyles';

const ContactInfo = () => {
  return (
    <CenterContainer>
      <h1>Best way to contact me is through LinkedIn</h1>
      <h2>Checkout my GitHub as well</h2>
      <IconBox>
        <a href="https://linkedin.com/in/niklas-menard">
          <LinkedinIcon xlinkHref="https://linkedin.com/in/niklas-menard" />
        </a>
        <a href="https://github.com/NiklasMenard">
          <GithubIcon />
        </a>
      </IconBox>
    </CenterContainer>
  );
};

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

export default ContactInfo;
