import React from 'react';
import { usePaymentInputs, PaymentInputsWrapper } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  svg {
    width: 24px;
    height: auto;
  }
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PaymentForm = () => {
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta: { erroredInputs }
  } = usePaymentInputs();

  return (
    <PaymentInputsWrapper>
      <FieldWrapper>
        <InputRow>
          <IconWrapper>
            <svg {...images.VISA} />
          </IconWrapper>
          <InputField {...getCardNumberProps()} placeholder="Card number" />
        </InputRow>
        {erroredInputs.cardNumber && <ErrorMessage>Invalid card number</ErrorMessage>}
      </FieldWrapper>
      <FieldWrapper>
        <InputRow>
          <InputField {...getExpiryDateProps()} placeholder="MM/YY" style={{ marginRight: '10px' }} />
          <InputField {...getCVCProps()} placeholder="CVC" />
        </InputRow>
        {(erroredInputs.expiryDate || erroredInputs.cvc) && (
          <ErrorMessage>
            {erroredInputs.expiryDate && "Invalid expiry date "}
            {erroredInputs.cvc && "Invalid CVC"}
          </ErrorMessage>
        )}
      </FieldWrapper>
    </PaymentInputsWrapper>
  );
};

export default PaymentForm;
