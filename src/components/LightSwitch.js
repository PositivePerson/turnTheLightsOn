import React, {
    useEffect, useState
} from 'react';
import styled from 'styled-components';
import '../App.css';

const SwitchDiv = styled.div`
position: absolute;
background: red;
    `;

export const renderPlace = () => {
    const screenWidth = document.getElementsByTagName("html")[0].clientWidth;
    const screenHeight = document.getElementsByTagName("html")[0].clientHeight;

    const X = Math.floor(Math.random() * (screenWidth - 60 + 1) + 10);
    const Y = Math.floor(Math.random() * (screenHeight - 40 + 1) + 10);

    document.getElementsByClassName("switch")[0].style.left = X + "px";
    document.getElementsByClassName("switch")[0].style.top = Y + "px";
}

const LightSwitch = (props) => {

    const [bright, setBright] = useState(false);

    useEffect(() => {
        // console.log(bright);
        // console.log(width);
        // console.log(height);

        // renderPlace();
        console.log(
            document.getElementsByClassName("switch")[0].style.left)
        console.log(
            document.getElementsByClassName("switch")[0].style.top);
        if (bright) props.endGame();
    }, [bright]);

    useEffect(() => {
        if (props.start) { setBright(false) }
    }, [props.start]);

    return (
        <SwitchDiv className="switch">
            <label>
                {/* Off */}
                <input type="checkbox" checked={bright} onChange={() => setBright(!bright)} />
                <span className="lever"></span>
                {/* On */}
            </label>
        </SwitchDiv>
    )
};

export default LightSwitch;
