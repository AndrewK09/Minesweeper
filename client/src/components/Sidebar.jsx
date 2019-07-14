import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StopwatchContainer from '../containers/stopwatchContainer.js';
import Ranks from './Ranks.jsx';

export default class Sidebar extends Component {
  componentDidMount() {
    this.props.handleLogin();
    this.props.updateRanks();
  }

  //change imgage of sun depending on a win/loss/flag mode
  handleGame() {
    const { game, toggleFlag, flag } = this.props;
    let img = 'default';
    if (game) {
      img = game;
    }
    if (flag) {
      img = 'flag';
    }
    return (
      <div className='flag-container'>
        <img
          className='flag'
          src={require(`../../dist/images/${img}.png`)}
          onClick={toggleFlag}
        />
      </div>
    );
  }

  //display restart/new game button with functionality
  renderGame() {
    const { restartBoard } = this.props;

    {
      return (
        <div className='game'>
          {this.handleGame()}
          <div className='game-buttons'>
            <Link to='/'>
              <button className='options'>New Game</button>
            </Link>
            <button
              className='options'
              onClick={() => {
                restartBoard();
              }}
            >
              Restart
            </button>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className='sidebar'>
        <StopwatchContainer />
        {this.renderGame()}
        <Ranks ranks={this.props.ranks} />
        {this.props.auth.id ? (
          ''
        ) : (
          <p className='auth'>Must be logged in to save score</p>
        )}
      </div>
    );
  }
}
