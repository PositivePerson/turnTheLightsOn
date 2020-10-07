import React, { Fragment } from 'react';
import styled from 'styled-components';
import '../App.css';

const Div = styled.h4`
z-index: 101;
font-size: 1.5em;
font-weight: 700;
color: pink;
margin: .25em;
    `;

const Tip = styled.h5`
font-weight: 400;
font-size: 1.5em;
color: rgba(255,255,255,0.8);
`;

const WelcomeTips = () => {
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
