import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Selection extends Component {
  renderDescription() {
    //get level from state
    const { level } = this.props;
    let size, mines;
    if (level === 'beginner') {
      size = '8 x 8';
      mines = '10';
    } else if (level === 'intermediate') {
      size = '16 x 16';
      mines = '40';
    } else if (level === 'expert') {
      size = '24 x 24';
      mines = 'a whopping 99';
    }
    return (
      <div>
        <h1>Size: {size}</h1>
        <h1>Mines: {mines}</h1>
      </div>
    );
  }

  render() {
    const { updateLevel } = this.props;
    return (
      <div className='selection'>
        <div className='selection-wrapper'>
          <div className='difficulty-buttons'>
            <button
              className='beginner'
              onClick={() => {
                updateLevel('beginner');
              }}
            >
              Beginner
            </button>
            <button
              className='intermediate'
              onClick={() => {
                updateLevel('intermediate');
              }}
            >
              Intermediate
            </button>
            <button
              className='expert'
              onClick={() => {
                updateLevel('expert');
              }}
            >
              Expert
            </button>
          </div>
          <div className='description'>{this.renderDescription()}</div>
          <div className='start'>
            <Link to='/board'>
              <button className='start-button'>START</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
