import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = (props) => {
  const { name, price, imageUrl } = props.item;
  const { addItem } = props;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton
        onClick={() => {
          addItem(props.item);
        }}
        inverted
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    },
  };
};

export default connect(null, mapDispatchtoProps)(CollectionItem);
