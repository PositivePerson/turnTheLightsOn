import React, { Fragment, useEffect } from 'react';
import { cssTransition } from 'react-toastify';
import styled from 'styled-components';
import '../App.css';

const Div = styled.h4`
z-index: 101;
font-size: 1.5em;
font-weight: 700;
color: pink;
margin: .25em;
position: relative;
height: 1em;
margin-left: auto;
margin-right: auto;
    `;

const Tip = styled.h5`
font-weight: 400;
font-size: 1.5em;
color: rgba(255,255,255,0.8);
`;

const separateLetters = (line) => {
    const characters = line.textContent.split("");
    while (line.firstChild) {
        line.removeChild(line.firstChild);
    }
    characters.map((character) => {
        character !== ' ' ? line.innerHTML += ("<span class='letterBox' style=''><span class='letters'>" + character + "</span></span>") : line.innerHTML += "<span class='letterBox' style='position: absolute; '><span class='letters'>" + character + "</span><span class='letterBox'>";
        return 0;
    })
}

const evenlySpreadAbsoluteLetters = (line) => {
    const letterBoxes = [...line.children];
    const numOfChildren = letterBoxes.length;
    let left = 0;

    letterBoxes.forEach((letter, index) => {
        if (index && index < numOfChildren) {
            if (letter.firstChild.textContent !== ' ') {
                left += letter.previousElementSibling.offsetWidth + 0.01
                letter.style.left = left + "px";
            } else {
                left += 20;
                letter.style.left = 20 + "px";
            };
        }
    })

    line.style.width = left + "px";
}

export const blinkingHint = () => {
    const hint = document.getElementsByTagName("h5")[0];
    console.log(hint);
    let interval = 100;
    setInterval(() => {
        hint.style.visibility = hint.style.visibility === "visible" ? "hidden" : "visible";
        interval *= 0.05;
    }, interval);
}

export const dropLetters = () => {
    const letters = document.getElementsByClassName("letterBox");
    const delays = [];

    const minimum = 0;
    const maximum = 3500;
    [...letters].forEach((letter, index) => {

        delays[index] = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        if (letter.textContent !== ' ') setTimeout(() => {
            letter.animate([
                { transform: 'translateY(550px)' },
            ], {
                duration: 1000,
                // easing: "linear",
                // cubic-bezier(.81,.8,.84,.41)
                // iterations: Infinity
            })
            letter.style.setProperty("opacity", 0);
            return 0;
        }, delays[index] * 0.5)
        // }, (index + 1) * 15)
    });

    blinkingHint();

    // props.setStart(true);

    // return;

    // console.log(letters[0].getAnimations());
    // console.log(letters[1].getAnimations());
}

const WelcomeTips = (props) => {

    useEffect(() => {

        [...(document.getElementsByTagName("h4"))].map((line) => {
            separateLetters(line);
            evenlySpreadAbsoluteLetters(line);
            return 0;
        })

        // dropLetters();
        // setTimeout(() => {
        //     dropLetters();
        // }, 1500);

    }, [])

    return (
        <Fragment>
            <Div>Welcome!</Div>
            <Div>As you can see it is dark everywhere...</Div>
            <Div>...except the cursor area:{')'}</Div>
            <Div>Find a button to turn light on!</Div>
            <Tip> Click anywhere to start!</Tip>
        </Fragment >
    )
}

export default WelcomeTips
