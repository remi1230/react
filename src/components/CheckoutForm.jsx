import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Snackbar, Alert, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
//import PaymentForm from './PaymentForm';
import StripePaymentForm from './StripePaymentForm';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
  pays: Yup.string().required('Required'),
  expirationDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Format MM/AA requis")
    .required('Date d\'expiration requise'),
});

const StyledTextField = styled(TextField)`
  background-color: var(--contactFieldBg);
  
  & .MuiInputBase-input {
    color: var(--contactFieldTxt);
  }

  & .MuiInputLabel-root.Mui-focused,
  & .MuiInputLabel-root {
    color: var(--contactFieldTxt);
  }

  /* Masquer le texte jj/mm/aaaa sans masquer le label */
  & input[type="date"]::-webkit-datetime-edit-text {
    opacity: 0;
  }

  & input[type="date"]::-webkit-datetime-edit-month-field,
  & input[type="date"]::-webkit-datetime-edit-day-field,
  & input[type="date"]::-webkit-datetime-edit-year-field {
    color: var(--contactFieldTxt);
  }

  & input[type="date"]::-webkit-inner-spin-button,
  & input[type="date"]::-webkit-clear-button {
    display: none;
  }

  /* Pour les autres navigateurs */
  & input[type="date"]::-moz-placeholder {
    opacity: 0;
  }
  
  & input[type="date"]::-ms-input-placeholder {
    opacity: 0;
  }
  
  & input[type="date"]::placeholder {
    opacity: 0;
  }
`;

const DivFieldsContainer = styled.div`
  margin-bottom: 25px;
`;
const DivField = styled.div`
  display: flex;
  gap: 10px;
`;

const SubTitleForm = styled.div`
  font-size: 20px;
  color: var(--contactFieldTxt);
`;

const StyledSelect = styled(Select)`
  &.MuiInputBase-root {
    background-color: var(--contactFieldBg);
    color: var(--contactFieldTxt);
  }
  & .MuiSelect-icon {
    color: var(--contactFieldTxt);
  }
  &.Mui-focused {
    background-color: var(--contactFieldBgFocused);
    color: var(--contactFieldTxtFocused);
  }
  &.Mui-focused .MuiSelect-icon {
    color: var(--contactFieldTxtFocused);
  }
  &.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--contactFieldBorderFocused);
  }
  & .MuiPaper-root {
    background-color: var(--contactFieldBgFocused);
    color: var(--contactFieldTxtFocused);
  }
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
        initialValues={{ name: '', email: '', message: '', pays: '', expirationDate: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <DivFieldsContainer>
              <SubTitleForm>Contact</SubTitleForm>
              <DivField>
                <StyledTextField
                  name="contact"
                  type="text"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.contact && Boolean(errors.contact)}
                  helperText={touched.contact && errors.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact}
                />
              </DivField>
              <SubTitleForm>Livraison</SubTitleForm>
              <DivField>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="paysSelectLabel">Pays</InputLabel>
                  <StyledSelect
                    labelId="paysSelectLabel"
                    id="paysSelect"
                    value={values.pays}
                    label="Pays"
                    onChange={handleChange}
                    name="pays"
                  >
                    {pays.map((p) => (
                      <MenuItem key={p} value={p}>
                        {p}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </FormControl>
              </DivField>
              <DivField>
                <StyledTextField
                  name="nom"
                  type="text"
                  label="Nom"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.nom && Boolean(errors.nom)}
                  helperText={touched.nom && errors.nom}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom}
                />
                <StyledTextField
                  name="prenom"
                  type="text"
                  label="Prenom"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.prenom && Boolean(errors.prenom)}
                  helperText={touched.prenom && errors.prenom}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prenom}
                />
              </DivField>
              <DivField>
                <StyledTextField
                  name="adresse"
                  type="text"
                  label="Adresse"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.adresse && Boolean(errors.adresse)}
                  helperText={touched.adresse && errors.adresse}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adresse}
                />
              </DivField>
              <DivField>
                <StyledTextField
                  name="cp"
                  type="text"
                  label="Code postal"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.cp && Boolean(errors.cp)}
                  helperText={touched.cp && errors.cp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cp}
                />
                <StyledTextField
                  name="ville"
                  type="text"
                  label="Ville"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.ville && Boolean(errors.ville)}
                  helperText={touched.ville && errors.ville}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ville}
                />
              </DivField>
              <DivField>
                <StyledTextField
                  name="tel"
                  type="text"
                  label="Téléphone"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={touched.tel && Boolean(errors.tel)}
                  helperText={touched.tel && errors.tel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                />
              </DivField>
              <SubTitleForm>Paiement</SubTitleForm>
              {/*<PaymentForm />*/}
              <StripePaymentForm />
            </DivFieldsContainer>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              PAYER
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
          Paiement effectué !
        </Alert>
      </Snackbar>
    </div>
  );
};

const pays = [
  'Afghanistan', 'Albanie', 'Algérie', 'Andorre', 'Angola',
  'Antigua-et-Barbuda', 'Arabie Saoudite', 'Argentine', 'Arménie', 'Australie',
  'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade',
  'Belgique', 'Belize', 'Bénin', 'Bhoutan', 'Biélorussie', 'Birmanie',
  'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunei', 'Bulgarie',
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodge', 'Cameroun', 'Canada',
  'Chili', 'Chine', 'Chypre', 'Colombie', 'Comores', 'Congo-Brazzaville',
  'Congo-Kinshasa', 'Corée du Nord', 'Corée du Sud', 'Costa Rica',
  'Côte d’Ivoire', 'Croatie', 'Cuba', 'Danemark', 'Djibouti', 'Dominique',
  'Égypte', 'Émirats Arabes Unis', 'Équateur', 'Érythrée', 'Espagne', 'Estonie',
  'Eswatini', 'États-Unis', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon',
  'Gambie', 'Géorgie', 'Ghana', 'Grèce', 'Grenade', 'Guatemala', 'Guinée',
  'Guinée-Bissau', 'Guinée équatoriale', 'Guyana', 'Haïti', 'Honduras',
  'Hongrie', 'Inde', 'Indonésie', 'Irak', 'Iran', 'Irlande', 'Islande', 'Israël',
  'Italie', 'Jamaïque', 'Japon', 'Jordanie', 'Kazakhstan', 'Kenya',
  'Kirghizistan', 'Kiribati', 'Koweït', 'Laos', 'Lesotho', 'Lettonie', 'Liban',
  'Libéria', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Madagascar',
  'Malaisie', 'Malawi', 'Maldives', 'Mali', 'Malte', 'Maroc', 'Maurice',
  'Mauritanie', 'Mexique', 'Micronésie', 'Moldavie', 'Monaco', 'Mongolie',
  'Monténégro', 'Mozambique', 'Namibie', 'Nauru', 'Népal', 'Nicaragua', 'Niger',
  'Nigeria', 'Norvège', 'Nouvelle-Zélande', 'Oman', 'Ouganda', 'Ouzbékistan',
  'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay',
  'Pays-Bas', 'Pérou', 'Philippines', 'Pologne', 'Portugal', 'Qatar',
  'République Centrafricaine', 'République Dominicaine', 'République Tchèque',
  'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda', 'Saint-Kitts-et-Nevis',
  'Saint-Vincent-et-les Grenadines', 'Sainte-Lucie', 'Salomon', 'Salvador',
  'Samoa', 'São Tomé-et-Príncipe', 'Sénégal', 'Serbie', 'Seychelles',
  'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Somalie', 'Soudan',
  'Soudan du Sud', 'Sri Lanka', 'Suède', 'Suisse', 'Suriname', 'Syrie',
  'Tadjikistan', 'Tanzanie', 'Tchad', 'Thaïlande', 'Timor-Leste', 'Togo',
  'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turkménistan', 'Turquie', 'Tuvalu',
  'Ukraine', 'Uruguay', 'Vanuatu', 'Venezuela', 'Viêt Nam', 'Yémen', 'Zambie',
  'Zimbabwe'
];

export default ContactForm;
