import React from "react";
import { PancakeStack } from "../ComponentStyles";
import Header from "../containers/Header";
import MainContainer from "../containers/Main";
import { MoonLayer } from "../ComponentStyles";
import About from "../components/About";

const Home = () => {
  return (
    <PancakeStack>
      <Header />
      <MainContainer>
        <About />
      </MainContainer>
      <MoonLayer />
    </PancakeStack>
  );
};

export default Home;
