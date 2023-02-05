import { useRef } from 'react';

import ContactInfo from '../components/ContactInfo';
import Header from '../containers/Header';
import CenterSection from '../containers/CenterSection';

import { MoonLayer, PancakeStack } from '../ComponentStyles';

const Contact = () => {
  return (
    <PancakeStack>
      <Header />
      <CenterSection>
        <ContactInfo />
      </CenterSection>
      <MoonLayer />
    </PancakeStack>
  );
};

export default Contact;
