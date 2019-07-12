import React, { Component } from 'react';

export default class Board extends Component {
  renderMine(mine, row, col) {
    if (mine.toggled) {
      if (mine.bomb) {
        return <img src='/client/dist/bomb.png' />;
      } else {
        return <h6>{mine.count > 0 ? mine.count : ''}</h6>;
      }
    } else {
      return (
        <button
          className='cover'
          onClick={() => {
            if (mine.bomb) {
              this.props.updateLoss();
            } else {
              this.props.updateToggles(row, col, mine.count);
            }
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
