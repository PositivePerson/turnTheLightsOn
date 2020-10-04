import React, { useState } from 'react';

import '../App.css';
import '../manageCursorTorch';

import WelcomeTips from './WelcomeTips';

function App() {
  const [start, setStart] = useState(false);

  const startGame = () => {
    setStart(true);
    document.getElementsByTagName("html")[0].style.backgroundColor = "white";
  }

  return (
    <div className="App" style={!start ? { cursor: "pointer" } : { cursor: "default" }} onClick={() => { if (!start) { startGame() } }
    }>
      <header />
      <div className="welcomeTipsBox">
        {!start && <WelcomeTips />}
      </div>
    </div >
  );
}





export default App;
