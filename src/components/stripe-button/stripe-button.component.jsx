import React from 'react';
import Logo from '../../assets/4.3 crown.svg.svg';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51In9cWG42nDJHmmJrFgCHFyaO7IXcRBBtTmvpP5116Mx6MHu97P3Pzulg9MkQHuAGwVWIVkZEp9ZOhb2lnp3QClw00rGkfuHgK';

  const onToken = (token) => {
    console.log(token);
    return alert('Payement Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
