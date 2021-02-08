import React from 'react';
import { Route } from 'react-router-dom';

import Login from './page/Login';
import SignUp from './page/SignUp';

//import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <Route path="/" component={Login} exact />
        <Route path="/signUp" component={SignUp} exact />
      </div>
    </div>
  );
};

export default App;
