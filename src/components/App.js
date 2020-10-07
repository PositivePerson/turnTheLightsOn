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

const calculateTime = (beginning) => {
  let difference = 0;
  if (beginning) {
    difference = new Date() - beginning;
  }
  return difference;
}

let beginning = undefined;

function App() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      const calculated = calculateTime(beginning);
      if (calculated) setTime(calculateTime(beginning));
    }, 10);
    return () => clearTimeout(timer);
  })

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })

  const startGame = () => {
    setStart(true);
    beginning = new Date();
    document.getElementsByTagName("html")[0].style.backgroundColor = "white";
    renderPlace();
  }

  const endGame = () => {
    setStart(false);
    beginning = null;
  }

  const cursorType = !start && beginning === undefined ? { cursor: "pointer" } : { cursor: "default" };

  return (
    <div className="App" style={cursorType} onClick={() => { if (!start && beginning === undefined) { startGame() } }
    }>
      <header />
      <div className="credits">
        {!start && beginning === undefined && <WelcomeTips />}
        {!start && beginning === null && <ScoreBox startGame={startGame} time={time} />}
      </div>
      <span> {time} </span>
      <div className="w-100 d-flex justify-content-center">
        <BrightnessSlider />
      </div>
      <LightSwitch endGame={endGame} start={start} />
      {/* <div className="result">
        <ScoreBox />
      </div> */}
      {!start && beginning === null &&
        <div className="me">
          <ProfileButtons />
        </div>
      }

    </div >
  );

}

export default App;
