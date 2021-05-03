import React from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = (props) => {
  const { toggleCartDisplay, itemCount } = props;
  return (
    <div className='cart-icon' onClick={toggleCartDisplay}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
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

const mapStateToProps = (state) => {
  // const { cartItems } = state.cart;
  return {
    itemCount: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(CartIcon);
