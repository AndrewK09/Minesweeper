import React, { Component } from 'react';
import SidebarContainer from '../containers/sidebarContainer';
export default class Board extends Component {
  updateTimer() {
    const { updateTime } = this.props;
    updateTime({
      sec: 0,
      count: true
    });
    let startTimer = setInterval(() => {
      const { updateTime, time, game, stopTime } = this.props;
      //if game ended or reset was clicked, stop timer
      if (!time.count || game) {
        clearInterval(startTimer);
        stopTime();
      }
      let newTime = Object.assign({}, time);
      newTime.sec++;
      console.log(newTime);
      updateTime(newTime);
    }, 1000);

    startTimer;
  }

  renderButton(mine, row, col) {
    const { game, updateLoss, updateMines, updateWin, time } = this.props;
    const auth = 'admin';

    let src = require(`../../dist/images/square.png`);
    if (auth === 'admin' && mine.bomb) {
      src = require(`../../dist/images/showBomb.png`);
    }
    return (
      <img
        src={src}
        className='cover'
        onClick={() => {
          if (time.sec === 0) {
            this.updateTimer();
          }
          if (!game) {
            if (mine.bomb) {
              updateLoss();
            } else {
              updateMines(row, col, mine.count);
              updateWin();
            }
          } else {
          }
        }}
      />
    );
  }

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
    return mine.toggled ? view : this.renderButton(mine, row, col);
  }

  render() {
    const { board } = this.props;
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
                        <td key={colInd} className='piece'>
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
