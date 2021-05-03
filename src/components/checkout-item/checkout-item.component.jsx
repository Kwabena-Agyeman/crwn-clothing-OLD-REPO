import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = (props) => {
  const { name, imageUrl, price, quantity } = props.cartItem;
  const { clearItem, addItem, removeItem } = props;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => {
            return removeItem(props.cartItem);
          }}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>

        <div
          className='arrow'
          onClick={() => {
            return addItem(props.cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        onClick={() => {
          return clearItem(props.cartItem);
        }}
        className='remove-button'
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItem: (item) => {
      return dispatch(clearItemFromCart(item));
    },
    addItem: (item) => {
      return dispatch(addItem(item));
    },
    removeItem: (item) => {
      return dispatch(removeItem(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
