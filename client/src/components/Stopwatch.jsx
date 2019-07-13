import React, { Component } from 'react';

export default class Stopwatch extends Component {
  handlePadding(num) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  }

  handleTime(num) {
    let min = this.handlePadding(Math.floor(num / 60));
    let sec = this.handlePadding(num % 60);
    return `${min}:${sec}`;
  }

  render() {
    const { time } = this.props;
    return (
      <div className='stopwatch'>
        <h1>{this.handleTime(time.sec)}</h1>
      </div>
    );
  }
}
