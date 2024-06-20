import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Snackbar, Alert, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

const StyledTextField = styled(TextField)`
  background-color: var(--contactFieldBg);
  & .MuiInputBase-input {
    color: var(--contactFieldTxt);
  }
`;

const DivFieldsContainer = styled.div`
  margin-bottom: 25px;
`;

const ContactForm = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Logique d'envoi du formulaire
    console.log('Formulaire envoyé', values);
    setOpen(true); // Ouvrir l'alerte après l'envoi
    setSubmitting(false);
    resetForm();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); // Fermer l'alerte
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <DivFieldsContainer>
              <div>
                <StyledTextField
                  name="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <div>
                <StyledTextField
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div>
                <StyledTextField
                  name="message"
                  type="text"
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={4}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </div>
            </DivFieldsContainer>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Envoyer
            </Button>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Formulaire envoyé avec succès !
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
