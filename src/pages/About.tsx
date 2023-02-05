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
      <h1>Hi, my name is Niklas</h1>
      <p>
        I am a full-stack web and mobile developer with a passion for programming. I started my
        journey as a hobbyist, but soon realized that it was my calling. To me, being a great
        programmer requires an insatiable thirst for solving problems, and I relish the challenge of
        overcoming obstacles along the way.
      </p>
      <Row>
        <h2>What do I offer</h2>
        <ToBottomButton />
      </Row>
      <p id="what-i-offer">
        I bring a unique blend of skills to the table, with a background in marketing, sales, and
        finance, and a bachelor's degree in computer science. My diverse experience has given me a
        deep understanding of customer needs and a strategic approach to solving complex problems.
      </p>
      <p>
        My aim is to leverage my technical skills and business acumen to deliver innovative
        solutions that meet the needs of my clients. If you're looking for a talented developer who
        can help bring your ideas to life, look no further.
      </p>

      <SkillsList>
        <h2>My Technical skills</h2>
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
    width: 2rem;
    height: 2rem;
  }
`;

export default About;
