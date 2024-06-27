import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as colors from '@mui/material/colors';
import { Button, Snackbar, Alert, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import StripePaymentForm from './StripePaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CartContext } from './CartContext';
import { userConnectInfos } from '../services/authInfos';

const stripePromise = loadStripe('pk_test_51PVFKgFIKwAXFKFkLw042PAD3owEteum3TVWJZ18rDI82Kn5RBwEpTBvv59Jy2W1Copfmq4IykmNmvSCtyJMzFHt00cFI4RZrV');

const validationSchema = Yup.object({
  nom: Yup.string().required('Required'),
  prenom: Yup.string().required('Required'),
  adresse: Yup.string().required('Required'),
  cp: Yup.string().required('Required'),
  ville: Yup.string().required('Required'),
  tel: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  pays: Yup.string().required('Required'),
});

const Title = styled.h5`
    color: var(--contactFieldTxt);
    font-weight: 600;
    margin: 0 0 10px;
`;

const StyledTextField = styled(TextField)`
  background-color: var(--contactFieldBg);
  
  & .MuiInputBase-input {
    color: var(--contactFieldTxt);
  }

  & .MuiInputLabel-root.Mui-focused,
  & .MuiInputLabel-root {
    color: var(--contactFieldTxt);
  }
`;

const DivFieldsContainer = styled.div`
  margin-bottom: 25px;
  @media (max-width: 580px) {
      width: 97%;
  }
`;
const DivField = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 750px) {
      display: block;
  }
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

const ComponentContainer = styled.div`
  @media (max-width: 580px) {
      align-self: center; 
  }
`;

const PaymentButton = styled(Button)`
  width: 50%;
`;

const CheckoutForm = () => {
  const [open, setOpen]             = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { cart, removeFromCart }    = useContext(CartContext);
  const navigate                    = useNavigate();
  const { username }                = userConnectInfos();

  const [ userFirstName, userLastName ] = username.split(' ');

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
    cart.forEach(produit => { if(produit.username === username){ removeFromCart(produit); } });
    navigate('/');
  };

  const handleCardComplete = (isComplete) => {
    console.log("Card is complete:", isComplete);
    if(isComplete){
      setIsDisabled(false);
    }
    else{
      setIsDisabled(true);
    }
  };

  return (
    <ComponentContainer>
      <Title>Mes informations</Title>
      <Formik
        initialValues={{ nom: userLastName, prenom: userFirstName, email: '', adresse: '', cp: '', ville: '', tel: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <DivFieldsContainer>
              <SubTitleForm>Contact</SubTitleForm>
              <DivField>
                <StyledTextField
                  name="email"
                  type="text"
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
              </DivField>
              <SubTitleForm>Livraison</SubTitleForm>
              <DivField>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel sx={{ color: "var(--contactFieldTxt)", }}  id="paysSelectLabel">Pays</InputLabel>
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
                  value={userLastName}
                  defaultValue={userLastName}
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
                  value={userFirstName}
                  defaultValue={userFirstName}
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
              <Elements stripe={stripePromise}>
                <StripePaymentForm onCardComplete={handleCardComplete} />
              </Elements>
            </DivFieldsContainer>
            <PaymentButton id="paymentButton" sx={{
                  fontWeight      : 600,
                  color           : colors.deepOrange[400],
                  backgroundColor : colors.blueGrey[100],
                  '&:hover':
                  {
                    color           : colors.deepOrange[500],
                    backgroundColor : colors.blueGrey[200],
                    cursor          : 'pointer',
                  },
              }} type="submit" variant="contained" disabled={isDisabled}>
              PAYER
            </PaymentButton>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Paiement effectué !
        </Alert>
      </Snackbar>
    </ComponentContainer>
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

export default CheckoutForm;
