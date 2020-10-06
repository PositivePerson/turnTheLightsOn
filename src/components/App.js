import React, { useEffect, useState } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../App.css';
import '../manageCursorTorch';

import WelcomeTips from './WelcomeTips';
import BrightnessSlider from './BrightnessSlider';
import LightSwitch, { renderPlace } from './LightSwitch';
import ScoreBox from './ScoreBox';
import ProfileButtons from './ProfileButtons';

function App() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })

  const startGame = () => {
    setStart(true);
    document.getElementsByTagName("html")[0].style.backgroundColor = "white";
    renderPlace();
  }

  return (
    <div className="App" style={!start ? { cursor: "pointer" } : { cursor: "default" }} onClick={() => { if (!start) { startGame() } }
    }>
      <header />
      <div className="credits">
        {!start && <WelcomeTips />}
        {start && <ScoreBox />}
      </div>
      <BrightnessSlider />
      <LightSwitch />
      {/* <div className="result">
        <ScoreBox />
      </div> */}
      <div className="me">
        <ProfileButtons />
      </div>

    </div >
  );
}





export default App;
