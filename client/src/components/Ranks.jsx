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
  let time = `${min} : ${sec}s`;
  return time;
};
const Ranks = ({ ranks }) => {
  return (
    <table className='highscore'>
      <caption>Top 10 Scores:</caption>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {ranks.map((rank, i) => {
          return (
            <tr key={rank.time}>
              <td>{i + 1}. </td>
              <td>{handleTime(rank.time)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Ranks;
