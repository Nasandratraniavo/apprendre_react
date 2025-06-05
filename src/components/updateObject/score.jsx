import { useState } from 'react';

export default function ScoreBoard() {
  const [player, setPlayer] = useState({
    firstName: 'Nasandratra',
    lastName: 'Niavo',
    score: 10,
  });

  function handleClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleChange(e) {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <label>
        Score: <b>{player.score}</b> <button onClick={handleClick}>+1</button>
      </label>
      <label>
        FirstName :
        <input
          type="text"
          name="firstName"
          value={player.firstName}
          onChange={handleChange}
        />
      </label>
      {'   '}
      <label>
        LastName :
        <input
          type="text"
          name="lastName"
          value={player.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        FullName :{' '}
        <b>{`${player.firstName} ${player.lastName} ${player.score}`}</b>
      </label>
    </>
  );
}
