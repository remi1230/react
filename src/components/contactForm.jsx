import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const StyledLabel = styled.label`
  margin-top: 10px;
`;

const StyledField = styled(Field)`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const StyledButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        message: Yup.string()
          .min(20, 'Must be 20 characters or more')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="name">Nom</StyledLabel>
        <StyledField name="name" type="text" />
        <StyledErrorMessage>
          <ErrorMessage name="name" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledField name="email" type="email" />
        <StyledErrorMessage>
          <ErrorMessage name="email" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="message">Message</StyledLabel>
        <StyledField name="message" as="textarea" />
        <StyledErrorMessage>
          <ErrorMessage name="message" />
        </StyledErrorMessage>

        <StyledButton type="submit">Envoyer</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;