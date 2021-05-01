import React from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';

const CartIcon = (props) => {
  const { toggleCartDisplay } = props;
  return (
    <div className='cart-icon' onClick={toggleCartDisplay}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'></span>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    toggleCartDisplay: () => {
      dispatch(toggleCartHidden());
    },
  };
};

export default connect(null, mapDispatchtoProps)(CartIcon);
