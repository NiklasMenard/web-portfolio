import styled from "styled-components";
import { CenterContainer, GradientListItem, Row } from "../ComponentStyles";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/javascript.svg";
import { ReactComponent as PHPIcon } from "../assets/php.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/typescript.svg";
import { ReactComponent as CSharpIcon } from "../assets/csharp.svg";
import { ReactComponent as HammerIcon } from "../assets/hammer-icon.svg";
import { ReactComponent as AzureIcon } from "../assets/azure.svg";
import { ReactComponent as RustIcon } from "../assets/rust.svg";

const About = () => {
  return (
    <CenterContainer>
      <TypedHeader>Hey there, I'm Niklas!</TypedHeader>

      <p>
        I'm a half-American and half-Finnish Full Stack Developer with a
        Bachelor’s degree in Computer Science and International Business.
      </p>

      <h2>What do I offer</h2>

      <p>
        Combining expertise in marketing, sales, and programming, I offer a
        unique skillset.
      </p>
      <p>
        My aim is to leverage my technical skills and business acumen to deliver
        innovative solutions.
      </p>

      <p>
        If you're looking for a talented developer who can help bring your ideas
        to life, look no further.
      </p>

      <SkillsList>
        <Row>
          <h2>My Tech Toolbox</h2>
          <HammerIcon />
        </Row>

        <SkillListItem>
          <span>React</span> <ReactIcon />
        </SkillListItem>
        <SkillListItem>
          <span>JavaScript</span>
          <JavaScriptIcon />
        </SkillListItem>
        <SkillListItem>
          <span>TypeScript</span>
          <TypeScriptIcon />
        </SkillListItem>
        <SkillListItem>
          <span>Rust</span>
          <RustIcon style={{ width: "3rem", height: "3rem" }} />
        </SkillListItem>
        <SkillListItem>
          <span>C#</span>
          <CSharpIcon />
        </SkillListItem>
        <SkillListItem>
          <span>Azure</span>
          <AzureIcon />
        </SkillListItem>
        <SkillListItem>
          <span>PHP</span>
          <PHPIcon />
        </SkillListItem>
      </SkillsList>
    </CenterContainer>
  );
};

const TypedHeader = styled.h1`
  overflow: hidden;
  border-right: 0.17em solid ${({ theme }) => theme.colors.melrose};
  white-space: nowrap;
  margin-right: auto;
  letter-spacing: 0.15em;
  animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${({ theme }) => theme.colors.melrose};
    }
  }
`;

const SkillsList = styled.ul`
  font-size: 0;
  padding-top: 3rem;
  svg {
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
  }
`;

const SkillListItem = styled(GradientListItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 1.5rem;
  span {
    margin-left: 2rem;
  }
`;

export default About;
