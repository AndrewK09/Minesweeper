import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Selection extends Component {
  renderDescription() {
    //get level from state
    const { level } = this.props;
    let difficulty, size, mines;
    if (level === 'beginner') {
      difficulty = 'Way too easy';
      size = '8 x 8';
      mines = 'Only 10';
    } else if (level === 'intermediate') {
      difficulty = 'Between easy and hard';
      size = '16 x 16';
      mines = '40';
    } else if (level === 'expert') {
      difficulty = 'Probably more difficult than it was to make this app';
      size = '24 x 24';
      mines = 'A whopping 99';
    }
    return (
      <div className='description'>
        <h1>How difficult? {difficulty}</h1>
        <h1>Size: {size}</h1>
        <h1>Mines: {mines}</h1>
      </div>
    );
  }

  render() {
    const { updateLevel } = this.props;
    return (
      <div className='selection'>
        <h1>Select Difficulty:</h1>

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

        {this.renderDescription()}
        <Link to='/board'>
          <button className='start'>START</button>
        </Link>
      </div>
    );
  }
}
