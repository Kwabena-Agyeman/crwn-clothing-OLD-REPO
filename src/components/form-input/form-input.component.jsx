import React from 'react';

import './form-input.styles.scss';

const FormInput = (props) => {
  const { label, handleChange, name, type, value, required } = props;

  return (
    <div className='group'>
      <input className='form-input' name={name} type={type} value={value} required={required} onChange={handleChange} />
      {label ? <label className={`${value.length ? 'shrink' : ''} form-input-label `}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
