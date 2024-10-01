import styled from 'styled-components';
import { CenterContainer, GradientListItem } from '../ComponentStyles';
import { ReactComponent as ThoughtBubbleIcon } from '../assets/thought-bubble.svg';

const ProjectList = () => {
  return (
    <CenterContainer>
      <StyledProjectList>
        <ProjectListItem>
          <h2>Re-vibe</h2>
          <ThoughtBubbleIcon />
          <p>
            This project is designed to showcase a demo website for selling used clothing and
            potentially other items in the future. The aim is to create a platform where users can
            list, browse, and purchase second-hand clothes.
          </p>
          <div></div>
          <a href="https://demo.niklasmenard.xyz/">Visit demo site</a>
          <a href="https://github.com/NiklasMenard/re-vibe">Github</a>
        </ProjectListItem>

        <ProjectListItem>
          <h2>Beach Volley</h2>
          <ThoughtBubbleIcon />
          <p>
            As part of a university project course, I worked on a team that developed a progressive
            web app for arranging beach volley games.
          </p>
          <p>It had a React, Graphile, and ApolloClient stack.</p>
          <a href="https://github.com/NiklasMenard/beach-volley-app">Github</a>
        </ProjectListItem>

        <ProjectListItem>
          <h2>Maze Generator</h2>
          <ThoughtBubbleIcon />
          <p>A fun small-scale Java game that challenges you to navigate a maze.</p>
          <p>With each play, a unique maze is generated using a depth-first search algorithm.</p>
          <a href="https://github.com/NiklasMenard/random_maze_generator_game">Github</a>
        </ProjectListItem>

        <ProjectListItem>
          <h2>Dijktra's</h2>
          <ThoughtBubbleIcon />
          <p>
            As part of a school assignment, I successfully implemented Dijkstra's shortest path
            algorithm using Python.
          </p>

          <p>
            This algorithm allows for finding the most efficient path between nodes in a specific
            context.
          </p>
          <a href="https://github.com/NiklasMenard/dijkstra_shortest_path">Github</a>
        </ProjectListItem>
      </StyledProjectList>
    </CenterContainer>
  );
};

const StyledProjectList = styled.ul`
  text-align: center;

  a {
    display: inline-flex;
    margin: 1.5rem auto;
    text-decoration: underline;
  }
  svg {
    position: absolute;
    top: 0.9rem;
    right: 0.5rem;
    width: 2.5rem;
  }
`;

const ProjectListItem = styled(GradientListItem)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.5rem;
  margin-bottom: 2rem;
  position: relative;
`;

export default ProjectList;
