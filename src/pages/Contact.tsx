import styled from 'styled-components';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { CenterContainer } from '../ComponentStyles';

const ContactInfo = () => {
  return (
    <AboutContainer>
      <p>Best way to contact me is through LinkedIn</p>
      <p>Checkout my GitHub as well</p>
      <IconBox>
        <a href="https://linkedin.com/in/niklas-menard">
          <LinkedinIcon xlinkHref="https://linkedin.com/in/niklas-menard" />
        </a>
        <a href="https://github.com/NiklasMenard">
          <GithubIcon />
        </a>
      </IconBox>
    </AboutContainer>
  );
};

const AboutContainer = styled(CenterContainer)`
  text-align: center;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  svg {
    height: 3.5rem;
    width: 3.5rem;
  }

  a:first-of-type {
    margin-right: 1.5rem;
  }
`;

export default ContactInfo;
