import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from '../store.js';
import startBoard from '../actions/board.js';

import HeaderContainer from '../containers/headerContainer.js';
import BoardContainer from '../containers/boardContainer.js';
import SelectionContainer from '../containers/selectionContainer.js';
import LoginContainer from '../containers/loginContainer.js';
import SignupContainer from '../containers/signupContainer.js';
import handleBoard from '../actions/handleBoard.js';
import handleLogin from '../actions/auth/login.js';
export default class App extends Component {
  componentDidMount() {
    //dispatch make board which adds size to state
    //call start board
    store.dispatch(handleBoard(10, 10, 10));
    store.dispatch(handleLogin());
  }

  render() {
    return (
      <div className='main-container'>
        <Router>
          <HeaderContainer />
          <Route exact path='/' component={SelectionContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignupContainer} />
          <Route path='/board' component={BoardContainer} />
        </Router>
      </div>
    );
  }
}
