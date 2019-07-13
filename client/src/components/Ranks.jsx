import React from 'react';
const handlePadding = num => {
  if (num < 10) {
    return '0' + num;
  }
  return num;
};

const handleTime = num => {
  let min = handlePadding(Math.floor(num / 60));
  let sec = handlePadding(num % 60);
  let time = `${min}:${sec}s`;
  return time;
};
const Ranks = ({ ranks }) => {
  return (
    <div className='highscore'>
      <table className='highscore-table'>
        <caption>Top 10 Scores:</caption>
        <thead>
          <tr>
            <th className='rank'>Rank</th>
            <th className='name'>Name</th>
            <th className='time'>Time</th>
          </tr>
        </thead>
        <tbody>
          {ranks.map((rank, i) => {
            return (
              <tr key={rank.time}>
                <td>{i + 1}. </td>
                <td className='name'>Admin</td>
                <td className='time'>{handleTime(rank.time)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Ranks;
