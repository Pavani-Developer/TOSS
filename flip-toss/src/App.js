import './App.css';
import TossGame from './Tossgame';

function App() {

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


// This is the main component

export default App;
