import React from "react";
import ProjectList from "../components/ProjectList";
import { MoonLayer, PancakeStack } from "../ComponentStyles";
import MainContainer from "../containers/Main";
import Header from "../containers/Header";

const Projects = () => {
  return (
    <PancakeStack>
      <Header />
      <MainContainer>
        <ProjectList />
      </MainContainer>
      <MoonLayer />
    </PancakeStack>
  );
};

export default Projects;
