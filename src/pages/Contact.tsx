import React from "react";
import ContactInfo from "../components/ContactInfo";
import { MoonLayer, PancakeStack } from "../ComponentStyles";
import Header from "../containers/Header";
import MainContainer from "../containers/Main";

const Contact = () => {
  return (
    <PancakeStack>
      <Header />
      <MainContainer>
      <ContactInfo />
      </MainContainer>
      <MoonLayer />
    </PancakeStack>
  );
};

export default Contact;
