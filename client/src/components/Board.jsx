import React, { Component } from 'react';
import SidebarContainer from '../containers/sidebarContainer';

export default class Board extends Component {
  componentDidMount() {
    //update board depending on level
    const { level } = this.props;
    let h, w, b;
    if (level === 'beginner') {
      h = 8;
      w = 8;
      b = 10;
    } else if (level === 'intermediate') {
      h = 16;
      w = 16;
      b = 40;
    } else if (level === 'expert') {
      h = 24;
      w = 24;
      b = 99;
    }
    this.props.handleBoard(h, w, b);
  }

  updateTimer() {
    //activate timer
    const { updateTime } = this.props;
    updateTime({
      sec: 0,
      count: true
    });
    //increment timer
    let startTimer = setInterval(() => {
      const { updateTime, time, game, stopTime } = this.props;
      //if game ended or reset was clicked, stop timer
      if (!time.count || game) {
        clearInterval(startTimer);
        stopTime();
      }
      let newTime = Object.assign({}, time);
      newTime.sec++;
      updateTime(newTime);
    }, 1000);

    startTimer;
  }

  //if timer didn't start, start it
  checkMine(mine, row, col) {
    const { game, updateLoss, updateMines, updateWin, time } = this.props;
    if (time.count === false) {
      this.updateTimer();
    }
    //if game did not end, handle win/loss and recursion on zeros
    if (!game) {
      if (mine.bomb) {
        updateLoss();
      } else {
        updateMines(row, col, mine.count);
        updateWin();
      }
    }
  }

  //if flag mode activated, flag that mine
  flag(row, col) {
    this.props.toggleFlag(row, col);
  }

  //if flag mode activated, toggle mine to be flag, otherwise handle square scenarios
  handleClick(mine, row, col) {
    const { auth, flag } = this.props;
    let context = this;
    //if mine is flagged, change image to be a square
    let src = mine.flagged
      ? require(`../../dist/images/flag.png`)
      : require(`../../dist/images/square.png`);

    //if admin, show all bombs
    if (auth.username === 'Andrew' && mine.bomb) {
      src = require(`../../dist/images/showBomb.png`);
    }
    return (
      <img
        src={src}
        className='cover'
        onClick={
          flag
            ? this.flag.bind(context, row, col)
            : this.checkMine.bind(context, mine, row, col)
        }
      />
    );
  }
  //show image of number or bomb if mine is toggled
  //if mine isn't toggled, return image of square or flag with click functionality
  renderMine(mine, row, col) {
    let view = (
      <img
        src={require(`../../dist/images/${mine.count}.png`)}
        className='tile'
      />
    );
    if (mine.bomb) {
      view = (
        <img className='bomb' src={require(`../../dist/images/bomb.png`)} />
      );
    }
    return mine.toggled ? view : this.handleClick(mine, row, col);
  }

  render() {
    const { board, size } = this.props;
    const height = 600 / size.h;
    const width = 600 / size.w;
    return (
      <div className='sub-container'>
        <div className='board'>
          <table cellPadding='0' cellSpacing='0'>
            <tbody>
              {board.map((row, rowInd) => {
                return (
                  <tr key={rowInd}>
                    {row.map((col, colInd) => {
                      return (
                        <td
                          key={colInd}
                          className='piece'
                          style={{ height: height, width: width }}
                        >
                          {this.renderMine(col, rowInd, colInd)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <SidebarContainer />
      </div>
    );
  }
}
