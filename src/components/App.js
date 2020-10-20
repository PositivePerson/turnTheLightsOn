import React, { useEffect, useState } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../App.css';
import '../manageCursorTorch';
import styled from 'styled-components';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WelcomeTips from './WelcomeTips';
import BrightnessSlider from './BrightnessSlider';
import LightSwitch from './LightSwitch';
import ScoreBox from './ScoreBox';
import ProfileButtons from './ProfileButtons';
import { dropLetters } from './WelcomeTips';

const StyledToastContainer = styled(ToastContainer)`
  top: 2em;
  width: auto;
  z-index: 0;
`;

const calculateTime = (beginning) => {
  let difference = 0;
  if (beginning) {
    difference = new Date() - beginning;
  }
  return difference;
}

let firstGame = true;

const makeHintToast = () => {
  toast('Doule-click on ⬆slider⬆ to make it bright immediately!', {
    position: "top-center",
    // autoClose: 50000,
    // autoClose: 15000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  firstGame = !firstGame;
}

let beginning = undefined;
// let beginning = null;

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


  async function droppingLetters() {
    dropLetters();

    return new Promise(async resolve => {
      const checkAreAllLettersTransitioned = () => {

        function checkIfLetterIsTransitioned(presentLetter) {
          return new Promise(insideResolve => {
            presentLetter.addEventListener('madeTransparent', () => {
              insideResolve("Function 'checkIfLetterIsTransitioned': letter transitioned!");
            })
          })
        }

        let numOfNotAnimated = [...document.getElementsByClassName("letterBox")].filter((letter) => letter.textContent !== ' ').length;
        console.log("numOfNotAnimated: " + numOfNotAnimated);
        document.querySelectorAll(".letterBox").forEach(async (letter, index, array) => {
          if (letter.textContent === ' ') {
            console.log("Blank space appeared in: 'checkAreAllLettersTransitioned' func");
          } else await checkIfLetterIsTransitioned(letter).then((resolve) => {
            numOfNotAnimated--;
            console.log(numOfNotAnimated + " not animated letters");
          });
          if (numOfNotAnimated === 0) {
            setTimeout(() => {
              resolve("Function 'droppingLetters': completed");
            }, 500);
          };
        })

      }
      await checkAreAllLettersTransitioned();
    })
  }

  const startGame = async () => {
    if (beginning === undefined) await droppingLetters();
    setStart(true);
    document.documentElement.style.setProperty('--firstBgColorOpacity', 0);
    document.documentElement.style.setProperty('--secondBgColorOpacity', .3);
    document.documentElement.style.setProperty('--thirdBgColorOpacity', 1);
    beginning = new Date();
  }

  const endGame = () => {
    setStart(false);
    beginning = null;


    if (firstGame) makeHintToast();
  }

  // const cursorType = !start && beginning === undefined ? { cursor: "pointer" } : { cursor: "default" };
  const cursorType = () => {
    if (!start && beginning === undefined) {
      return { cursor: "pointer" }
    } else if (start) {
      return { cursor: "grab" }
    } else {
      return { cursor: "default" }
    }
  }

  return (
    <div className="App" style={cursorType()} onClick={() => { if (!start && beginning === undefined) { startGame() } }
    }>
      {beginning === null &&
        <StyledToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={false}
        />
      }
      <header />
      <div className="initialCredits">
        {beginning === undefined && <WelcomeTips />}
      </div>
      <div className="endCredits">
        {beginning === null && !destroyed && <ScoreBox startGame={startGame} time={time} destroyed={destroyed} setDestroyed={setDestroyed} />}
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
