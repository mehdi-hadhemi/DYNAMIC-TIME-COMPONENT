import React from 'react';
import Convert from './convert'
import './App.css';
const milli=96855585;
function App() {
  return (
    <div className="App">
      <Convert time={milli}/>
    </div>
  );
}

export default App;
