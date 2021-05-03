import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utility';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { setCurrentuser } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;

  async componentDidMount() {
    const { setCurrentuser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        await userRef.onSnapshot((snapShot) => {
          return setCurrentuser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentuser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route exact path='/signin'>
            {this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentuser: (user) => {
      dispatch(setCurrentuser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
