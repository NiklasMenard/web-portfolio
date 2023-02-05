import React from 'react';
import { PancakeStack } from '../ComponentStyles';
import Header from '../containers/Header';
import CenterSection from '../containers/CenterSection';
import { MoonLayer } from '../ComponentStyles';
import About from '../components/About';

const Home = () => {
  return (
    <PancakeStack>
      <Header />
      <CenterSection>
        <About />
      </CenterSection>
      <MoonLayer />
    </PancakeStack>
  );
};

export default Home;
