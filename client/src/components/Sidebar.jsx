import React, { Component } from 'react';
import StopwatchContainer from '../containers/stopwatchContainer.js';
import Ranks from './Ranks.jsx';
export default class Sidebar extends Component {
  componentDidMount() {
    this.props.handleLogin();
    this.props.updateRanks();
  }

  handleGame() {
    const { game } = this.props;
    if (game) {
      return `You ${game}`;
    }
    return 'Timer';
  }
  renderGame() {
    const { restartBoard } = this.props;

    {
      let text = this.handleGame();
      return (
        <div className='game'>
          <p>{text}</p>
          <div className='game-buttons'>
            <button className='newGame'>New Game</button>
            <button
              className='restart'
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
        {/* timer */}
        <StopwatchContainer />
        {this.renderGame()}
        {/* highscore */}
        <Ranks ranks={this.props.ranks} />

        {/* personalscore */}
      </div>
    );
  }
}
