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

    const duration = 1000;

    const destroyScoreBox = async (props) => {
        setHidden(true);
        setTimeout(() => {
            props.setDestroyed(true);
            document.getElementsByClassName("me")[0].style.top = "40%"
        }, duration);
    }

    return (
        <div>
            <ParticleEffectButton color='whitesmoke' hidden={hidden} duration={duration} >
                <Seconds>{props.time}<Ms>ms</Ms></Seconds>
            </ParticleEffectButton>
            <div>
                <ParticleEffectButton color='whitesmoke' hidden={hidden} duration={duration} >
                    <button className="waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => props.startGame()}>Play again</button>
                </ParticleEffectButton>
                <ParticleEffectButton color='whitesmoke' hidden={hidden} duration={duration} >
                    <button className="waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => destroyScoreBox(props)}>Puff it</button>
                </ParticleEffectButton>
            </div>
        </div >
    )
}

const constWidth = {
    width: "8.5em"
}

export default ScoreBox
