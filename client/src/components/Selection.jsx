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
      mines = '10';
    } else if (level === 'intermediate') {
      difficulty = 'Between easy and hard';
      size = '16 x 16';
      mines = '40';
    } else if (level === 'expert') {
      difficulty = 'More difficult than it was to make this app';
      size = '24 x 24';
      mines = 'a whopping 99';
    }
    return (
      <div>
        {/* <h1>How difficult? {difficulty}</h1> */}
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
            {/* <button className='difficulty'>Difficulty:</button> */}
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
          <div className='description'>
            {/* <h1>Description:</h1> */}
            {this.renderDescription()}
          </div>
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
