import React, { useEffect, useState } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../App.css';
import '../manageCursorTorch';

import WelcomeTips from './WelcomeTips';
import BrightnessSlider from './BrightnessSlider';
import LightSwitch from './LightSwitch';
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
  const [destroyed, setDestroyed] = useState(false);

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
    document.documentElement.style.setProperty('--firstBgColorOpacity', 0);
    document.documentElement.style.setProperty('--secondBgColorOpacity', .3);
    document.documentElement.style.setProperty('--thirdBgColorOpacity', 1);
    beginning = new Date();
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
      <div className="initialCredits">
        {beginning === undefined && <WelcomeTips />}
      </div>
      <div className="endCredits">
        {beginning === null && !destroyed && <ScoreBox startGame={startGame} time={time} setDestroyed={setDestroyed} />}
      </div>
      <div className="w-100 d-flex justify-content-center sliderBox">
        {beginning === null &&
          <BrightnessSlider start={start} beginning={beginning} this={this} />
        }
      </div>
      {beginning &&
        <LightSwitch endGame={endGame} start={start} />
      }
      {!start && beginning === null &&
        <div className="me">
          <ProfileButtons />
        </div>
      }

    </div >
  );

}

export default App;
