import React from 'react';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
  const { cartItems, history, toggleCartDisplay } = props;
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
        <CustomButton
          onClick={() => {
            history.push('/checkout');
            toggleCartDisplay();
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartDisplay: () => {
      dispatch(toggleCartHidden());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
