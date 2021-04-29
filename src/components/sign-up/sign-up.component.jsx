import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utility';

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, { displayName: displayName });

        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            minLength='6'
            required={true}
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required={true}
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            minLength='6'
            required={true}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confrim Password'
            minLength='6'
            required={true}
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
