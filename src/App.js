import React from 'react';
import Lottery from './Lottery';
import Ball from './Ball';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} numBalls={4}/>
    </div>
  );
}

export default App;
