import React from 'react';
import MonetyAllegroLogo from '../../../../assets/images/allegroMonetyLogo.png';
import { Container, Button, PayPalText, Logo } from './MonetyAllegroAdv.styles';

export const MonetyAllegroAdv = ({ isPaypalShow, handlePayPalMove, payPalMove }) => {
  return (
    <Container isPaypalShow={isPaypalShow} payPalMove={payPalMove}>
      <Button onClick={handlePayPalMove}>
        <Logo source={MonetyAllegroLogo} />
        <PayPalText>Zgarnij Monety</PayPalText>
      </Button>
    </Container>
  );
};

