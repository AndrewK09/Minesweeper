import React, { Component } from 'react';

export default class Board extends Component {
  renderButton(mine, row, col) {
    const { game, updateLoss, updateMines, updateWin } = this.props;
    return (
      <img
        src='/client/dist/images/square.png'
        className='cover'
        onClick={() => {
          if (!game) {
            if (mine.bomb) {
              updateLoss();
            } else {
              updateMines(row, col, mine.count);
              updateWin();
            }
          }
        }}
      />
    );
  }

  renderMine(mine, row, col) {
    // let view = <p>{mine.count > 0 ? mine.count : ''}</p>;

    let view = (
      <img src={`/client/dist/images/${mine.count}.png`} className='tile' />
    );
    if (mine.bomb) {
      view = <img className='bomb' src='/client/dist/images/bomb.png' />;
    }
    // return view;
    return mine.toggled ? view : this.renderButton(mine, row, col);
  }

  render() {
    const { board, game, restartBoard } = this.props;
    return (
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
        {game ? (
          <div className='loss'>
            You {game}
            <button
              onClick={() => {
                restartBoard();
              }}
            >
              Reset
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
