import React, { useState } from 'react';
import './Tossgame.css';

const TossGame = () => {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);
  const [balloons, setBalloons] = useState([]);

  const tossCoin = () => {
    setFlipping(true);

    setTimeout(() => {
      const tossResult = Math.random() > 0.5 ? 'Heads' : 'Tails';
      setResult(tossResult);
      setFlipping(false);
      createBalloons(tossResult);
    }, 2000);
  };

  const createBalloons = (result) => {
    const newBalloons = [];
    for (let i = 0; i < 10; i++) {
      newBalloons.push({
        id: i,
        text: result,
        left: Math.random() * 80 + 10 + '%',
        top: Math.random() * 80 + 10 + '%',
        color: getRandomColor(),
      });
    }
    setBalloons(newBalloons);

    // Remove balloons after the animation
    setTimeout(() => setBalloons([]), 2000);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="toss-game">
      <h1>Flip the Toss</h1>
      <div className={`coin ${flipping ? 'flipping' : ''}`}>
        {result ? result : 'Toss the Coin'}
      </div>
      <button onClick={tossCoin} disabled={flipping}>
        {flipping ? 'Tossing...' : 'Toss Coin'}
      </button>
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{ left: balloon.left, top: balloon.top, color: balloon.color }}
        >
          {balloon.text}
        </div>
      ))}
    </div>
  );
};

export default TossGame;
