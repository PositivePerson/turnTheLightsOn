import React, {
    useEffect, useState
} from 'react';
import '../App.css';

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
        console.log(
            document.getElementsByClassName("switch")[0].style.left)
        console.log(
            document.getElementsByClassName("switch")[0].style.top);
        if (bright) props.endGame();
        else renderPlace();
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
