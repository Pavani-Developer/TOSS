import React, { useState } from 'react';
import TossGame from './Tossgame';

function App() {
  const [count, setCount] = useState(0);

  const appStyle = {
    backgroundColor: '#f0f0f0', 
    minHeight: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={appStyle}>
      <TossGame />
    </div>
  );
}

export default App;
