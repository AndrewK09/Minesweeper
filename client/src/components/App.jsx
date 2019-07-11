import React, { Component } from 'react';
import store from '../store.js';
import startBoard from '../actions/board.js';

import BoardContainer from '../containers/boardContainer.js';

export default class App extends Component {
  componentDidMount() {
    store.dispatch(startBoard(10, 10));
  }

  render() {
    return (
      <div className='container'>
        <BoardContainer />
      </div>
    );
  }
}
