import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/contactForm';
import TitlePage from '../components/TitlePage';

const DivContainer = styled.div`
  margin: 10% 25%;
  margin-bottom: 500px;
  @media (max-width: 1200px) {
      margin: 20% 20%;
  }
  @media (max-width: 900px) {
      margin: 20% 15%;
  }
  @media (max-width: 600px) {
      margin: 20% 10%;
  }
`;

function Contact() {
  return (
    <DivContainer>
      <TitlePage title="Contactez-nous" />
      <ContactForm></ContactForm>
    </DivContainer>
);
}

export default Contact;