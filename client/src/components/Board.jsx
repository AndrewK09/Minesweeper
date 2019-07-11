import React, { Component } from 'react';

export default class Board extends Component {
  render() {
    const { board } = this.props;
    return (
      <div>
        <table>
          <tbody>
            {board.map((row, i) => {
              return (
                <tr key={i}>
                  {row.map((col, i) => {
                    return (
                      <td key={i} className='piece'>
                        {col.count}, {col.bomb ? 'T' : 'F'}
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
