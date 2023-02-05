import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import ProjectList from './pages/Projects';
import ContactInfo from './pages/Contact';

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
