import React, { Component } from 'react';

export default class Board extends Component {
  renderMine(mine, row, col) {
    if (mine.toggled) {
      return mine.bomb ? (
        <img src='/client/dist/bomb.png' />
      ) : (
        <h6>{mine.count > 0 ? mine.count : ''}</h6>
      );
    } else {
      return (
        <button
          className='cover'
          onClick={() => {
            this.props.updateToggles(row, col, mine.count);
          }}
        />
      );
    }
  }

  render() {
    const { board } = this.props;
    return (
      <div className='board'>
        <table>
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
    );
  }
}
