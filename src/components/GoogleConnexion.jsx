import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = '869772055579-vrfogvvn1lm7e4siqnnlje3eclkfer3q.apps.googleusercontent.com';

function GoogleConnexion() {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
  };

  const onError = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleConnexion;
