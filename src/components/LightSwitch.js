import React, {
    useEffect, useState
} from 'react';
import '../App.css';

export const renderPlace = () => {
    const screenWidth = document.getElementsByTagName("html")[0].clientWidth;
    const screenHeight = document.getElementsByTagName("html")[0].clientHeight;

    let X = Math.floor(Math.random() * (screenWidth - 60 + 1) - 68);
    if (X < 0) { X = -X };
    let Y = Math.floor(Math.random() * (screenHeight - 40 + 1) - 28);
    if (Y < 0) { Y = -Y };

    document.getElementsByClassName("switch")[0].style.left = X + "px";
    document.getElementsByClassName("switch")[0].style.top = Y + "px";
}

const LightSwitch = (props) => {

    const [bright, setBright] = useState(false);

    useEffect(() => {
        console.log(
            document.getElementsByClassName("switch")[0].style.left)
        console.log(
            document.getElementsByClassName("switch")[0].style.top);
        if (bright) props.endGame();
        else renderPlace();

        // eslint-disable-next-line
    }, [bright]);

    useEffect(() => {
        if (props.start) { setBright(false) }
    }, [props.start]);

    return (
        <div style={{ "position": "absolute" }} className="switch">
            <label>
                {/* Off */}
                <input type="checkbox" checked={bright} onChange={() => setBright(!bright)} />
                <span className="lever"></span>
                {/* On */}
            </label>
        </div>
    )
};

export default LightSwitch;
