import { MoonLayer, PancakeStack } from '../ComponentStyles';

import ProjectList from '../components/ProjectList';
import CenterSection from '../containers/CenterSection';
import Header from '../containers/Header';

const Projects = () => {
  return (
    <PancakeStack>
      <Header />
      <CenterSection>
        <ProjectList />
      </CenterSection>
      <MoonLayer />
    </PancakeStack>
  );
};

export default Projects;
