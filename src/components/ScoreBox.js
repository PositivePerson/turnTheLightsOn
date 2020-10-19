import React, { useState } from 'react';
import styled from 'styled-components';

import ParticleEffectButton from 'react-particle-effect-button';

const Seconds = styled.div`
    color: white;
    font-size: 2em;
    font-weight: 600;
    display: inline-flex;
    position: relative;

    margin-bottom: .4em;
`;

const Ms = styled.div`
    font-size: .5em;
    font-weight: 400;
    position: absolute;
    bottom: .3em;
    right: -1.5em;
`;

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
        // console.log('the end of \'Puff\' animations');
    }

    return (
        <div>
            <ParticleEffectButton color='whitesmoke' type='rectangle' direction='right' hidden={hidden} duration={duration} >
                <Seconds className="b">{props.time}<Ms>ms</Ms></Seconds>
            </ParticleEffectButton>
            <div>
                <ParticleEffectButton color='whitesmoke' type='rectangle' direction='right' hidden={hidden} duration={duration} >
                    <button className="a waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => props.startGame()}>Play again</button>
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
