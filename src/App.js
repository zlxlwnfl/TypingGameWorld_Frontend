import React from 'react';
import { Route } from 'react-router-dom';

import Login from './page/Login';
import SignUp from './page/SignUp';
import Main from './page/Main';

import Header from './component/Header';

//import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />

      <Route path="/" component={Login} exact />
      <Route path="/signUp" component={SignUp} exact />
      <Route path="/main" component={Main} exact />
    </div>
  );
};

export default App;
