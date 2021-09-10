import React from "react";
import ToBottomButton from "../components/ToBottomButton";
import { CenterContainer, Row } from "../ComponentStyles";

const About = () => {
  return (
    <CenterContainer height={"140vh"}>
      <h1> Hello, My Name is Niklas</h1>
      <p>
        Programming started as a hobby but quickly grew to something I want to
        pursue full time and something I feel very passionate about. I feel like
        in order to be a great programmer you must have an unquenchable need to
        solve problems. Encountering roadblocks on the path to the solution is
        part of the process and ultimately that is what makes it so gratifying
        when you finally see the pieces of the puzzle lock into place.
      </p>
      <Row>
        <h1>What do I offer</h1>
        <ToBottomButton />
      </Row>
      <p id="what-i-offer">
        I am a problem solver with a background in marketing, sales and finance.
        My main focus currently is fullstack web and mobile development. I am
        currently working as a web developer and have a bachelors degree in
        computer science.
      </p>
      <p>
        My biggest strength is that im not only a programmer but somebody who
        has a thorough understanding of customer needs and how to answer them.
      </p>

      <ul >
        <h1>Technical skills</h1>
        <li>ReactJS</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>TypeScript</li>
        <li>Node.js</li>
      </ul>
    </CenterContainer>
  );
};

export default About;
