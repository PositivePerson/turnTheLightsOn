import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../App.css';
import '../manageCursorTorch';

import WelcomeTips from './WelcomeTips';
import BrightnessSlider from './BrightnessSlider';
import LightSwitch from './LightSwitch';

function App() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })


  const childRef = useRef();

  const startGame = () => {
    setStart(true);
    document.getElementsByTagName("html")[0].style.backgroundColor = "white";
    childRef.current.renderPlace();
  }

  return (
    <div className="App" style={!start ? { cursor: "pointer" } : { cursor: "default" }} onClick={() => { if (!start) { startGame() } }
    }>
      <header />
      <div className="welcomeTipsBox">
        {/* {!start && <WelcomeTips />} */}
      </div>
      <BrightnessSlider />
      <LightSwitch />
    </div >
  );
}





export default App;
