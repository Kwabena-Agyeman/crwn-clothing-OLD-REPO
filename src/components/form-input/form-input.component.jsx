import React from 'react';

import './form-input.styles.scss';

const FormInput = (props) => {
  const { label, handleChange, name, type, value, required, minLength } = props;

  return (
    <div className='group'>
      <input
        className='form-input'
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={handleChange}
        minLength={minLength}
      />
      {label ? <label className={`${value.length ? 'shrink' : ''} form-input-label `}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
