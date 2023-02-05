import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default PageRoutes;
