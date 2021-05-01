import React from 'react';

import './custom-button.styles.scss';

const CustomButton = (props) => {
  const { children, isGoogleSignIn, inverted, ...otherProps } = props;
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in custom-button' : 'custom-button'} ${
        inverted ? 'inverted' : ''
      }   `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
