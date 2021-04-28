import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
    </Switch>
  );
}

export default App;
