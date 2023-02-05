import styled from 'styled-components';

import ToBottomButton from '../components/ToBottomButton';
import { CenterContainer, Row } from '../ComponentStyles';
import { ReactComponent as ReactIcon } from '../assets/react.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/javascript.svg';
import { ReactComponent as PHPIcon } from '../assets/php.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/typescript.svg';
import { ReactComponent as CSharpIcon } from '../assets/csharp.svg';

const About = () => {
  return (
    <AboutSection>
      <h1> Hello, My Name is Niklas</h1>
      <p>
        Programming started as a hobby but quickly grew to something I want to pursue full time and
        something I feel very passionate about. I feel like in order to be a great programmer you
        must have an unquenchable need to solve problems. Encountering roadblocks on the path to the
        solution is part of the process and ultimately that is what makes it so gratifying when you
        finally see the pieces of the puzzle lock into place.
      </p>
      <Row>
        <h2>What do I offer</h2>
        <ToBottomButton />
      </Row>
      <p id="what-i-offer">
        I am a problem solver with a background in marketing, sales and finance. My main focus
        currently is fullstack web and mobile development. I am currently working as a web developer
        and have a bachelors degree in computer science.
      </p>
      <p>
        My biggest strength is that im not only a programmer but somebody who has a thorough
        understanding of customer needs and how to answer them.
      </p>

      <SkillsList>
        <h2>Technical skills</h2>
        <li>
          React <ReactIcon />
        </li>
        <li>
          JavaScript <JavaScriptIcon />
        </li>
        <li>
          PHP
          <PHPIcon />
        </li>
        <li>
          TypeScript <TypeScriptIcon />
        </li>
        <li>
          C# <CSharpIcon />
        </li>
      </SkillsList>
    </AboutSection>
  );
};

const AboutSection = styled(CenterContainer)`
  p {
    text-align: left;
  }
  span {
    font-size: 2rem;
  }
`;

const SkillsList = styled.ul`
  span {
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export default About;
