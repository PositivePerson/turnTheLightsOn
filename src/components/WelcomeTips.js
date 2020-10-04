import React, { Fragment } from 'react';
import styled from 'styled-components';
import '../App.css';

const Div = styled.h4`
font-weight: 700;
color: pink;
margin: .25em;
    `;



const WelcomeTips = () => {
    return (
        <Fragment>
            <Div>Welcome!</Div>
            <Div>As you can see it is dark everywhere...</Div>
            <Div>...except the cursor area:{')'}</Div>
            <Div>Find a button to turn on light!</Div>
            <h5 style={{ fontWeight: "500", color: "whitesmoke" }}> Click anywhere to start!</h5>
        </Fragment >
    )
}

export default WelcomeTips
