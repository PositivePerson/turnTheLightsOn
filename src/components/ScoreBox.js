import React from 'react';
import styled from 'styled-components';

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

const destroyScoreBox = (props) => {
    props.setDestroyed(true);
    document.getElementsByClassName("me")[0].style.top = "40%"
}

const ScoreBox = (props) => {

    return (
        <div>
            <Seconds>{props.time}<Ms>ms</Ms></Seconds>
            <div>
                <button className="waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => props.startGame()}>Play again</button>
                <button className="waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => destroyScoreBox(props)}>Puff it</button>
            </div>
        </div >
    )
}

const constWidth = {
    width: "8.5em"
}

export default ScoreBox
