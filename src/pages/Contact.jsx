import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/contactForm';
import TitlePage from '../components/TitlePage';

const DivContainer = styled.div`
  margin: 10%;
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