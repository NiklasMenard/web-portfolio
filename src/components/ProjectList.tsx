import styled from 'styled-components';
import { CenterContainer } from '../ComponentStyles';

const ProjectList = () => {
  return (
    <CenterContainer>
      <StyledProjectList>
        <li>
          <h2>Beach Volley application</h2>
          <p>
            University project course project where we developed an progressive web app for
            arranging beach volley games. It utilized an React, Graphile, ApolloClient stack and I
            was mainly responsible for coding the front-end portion.
          </p>
          <a href="https://github.com/NiklasMenard/beach-volley-app">Github link</a>
        </li>

        <li>
          <h2>Random Maze Generator Game</h2>
          <p>
            Fun small Java Game where a maze is generated every time you restart the game. Uses and
            depth-first search approach to generate the maze.
          </p>
          <a href="https://github.com/NiklasMenard/random_maze_generator_game">Github link</a>
        </li>

        <li>
          <h2>Dijktras algorithm in python</h2>
          <p>
            Implementation of Dijkstras shortest path algorithm written in Python. It reads nodes
            from a textfile and then determines the optimal path.
          </p>
          <a href="https://github.com/NiklasMenard/dijkstra_shortest_path">Github link</a>
        </li>
      </StyledProjectList>
    </CenterContainer>
  );
};

const StyledProjectList = styled.ul`
  a {
    display: inline-block;
    font-size: 1rem;
    text-decoration: underline;
  }
  li {
    padding: 2rem 0;
  }
`;

export default ProjectList;
