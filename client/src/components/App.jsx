import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from '../store.js';
import startBoard from '../actions/board.js';

import HeaderContainer from '../containers/headerContainer.js';
import BoardContainer from '../containers/boardContainer.js';
import LoginContainer from '../containers/loginContainer.js';
export default class App extends Component {
  componentDidMount() {
    store.dispatch(startBoard(10, 10));
  }

  render() {
    return (
      <div className='main-container'>
        <Router>
          <HeaderContainer />
          <Route exact path='/' component={BoardContainer} />
          <Route path='/login' component={LoginContainer} />
        </Router>
      </div>
    );
  }
}
