import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { changeTitle } from './App';

import ParticleEffectButton from 'react-particle-effect-button';

const Seconds = styled.span`
    color: white;
    font-size: 2em;
    font-weight: 600;
    display: inline-flex;
    position: relative;
    margin-bottom: .4em;
    padding-left: .6em;
`;

const Ms = styled.span`
    color: white;
    font-weight: 400;
    padding-left: .15em;
`;

// const Ms = styled.div`
//     font-size: .5em;
//     font-weight: 400;
//     position: absolute;
//     bottom: .3em;
//     right: -1.5em;
// `;

const playAgain = (props) => {
    props.startGame();
}

const ScoreBox = (props) => {
    const [hidden, setHidden] = useState(false);

    const duration = 900;

    const destroyScoreBox = async (props) => {

        function movedUpAboutMe() {
            return new Promise(resolve => {
                document.querySelector(".me").addEventListener('transitionend', () => {
                    resolve('ended moving \'about me\'');
                })
            });
        }

        async function remove_and_shuffle() {
            document.getElementsByClassName("endCredits")[0].style.setProperty('display', 'none');
            document.getElementsByClassName("me")[0].style.setProperty('top', '40%');
        }

        setHidden(true);

        setTimeout(() => {
            remove_and_shuffle();
            // }, 1300);
        }, 1750);

        await movedUpAboutMe();
        await props.setDestroyed(true);
        changeTitle();
        // console.log('the end of \'Puff\' animations');

        // document.getElementsByClassName('noUi-target')[0].noUiSlider.destroy();
        // console.log(document.getElementsByClassName('Toastify__toast-container'));
    }

    useEffect(() => {
        console.log(document.getElementsByClassName("b")[0].offsetWidth);
        // document.getElementsByClassName("b")[0].style.width = `calc(100% + ${document.getElementsByClassName("b1")[0].offsetWidth + 'px'} + 1.5em)`;
    }, [])

    return (
        <div>
            <ParticleEffectButton color='whitesmoke' type='rectangle' direction='right' hidden={hidden} duration={duration} >
                <Seconds className="b">{props.time}</Seconds>
                <Ms className="b1">ms</Ms>
            </ParticleEffectButton>
            <div>
                <ParticleEffectButton color='whitesmoke' type='rectangle' direction='right' hidden={hidden} duration={duration} >
                    <button className="a waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => playAgain(props)}>Play again</button>
                </ParticleEffectButton>
                <ParticleEffectButton color='whitesmoke' type='rectangle' direction='right' hidden={hidden} duration={duration}>
                    <button className="a waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => destroyScoreBox(props)}>Puff it</button>
                </ParticleEffectButton>
            </div>
        </div >
    )
}

const constWidth = {
    width: "8.5em"
}

export default ScoreBox
