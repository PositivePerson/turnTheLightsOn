import React, { useState, useEffect } from 'react';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const BrightnessSlider = (props) => {
    const [darkness, setDarkness] = useState(0.3);

    const handleDoubleClick = async () => {
        setDarkness(1);
    }

    useEffect(() => {
        // .addEventListener('click', () => console.log(component))
        // console.log(component);
        // console.log(document.getElementsByClassName("sliderBox")[0].children);
        document.getElementsByClassName("sliderBox")[0].children[0].addEventListener("dblclick", () => {
            handleDoubleClick();

            // document.getElementsByClassName("sliderBox")[0].children[0].children[0].childNodes[1].children[0].ariaValueNow = "0.7";
            console.log(document.getElementsByClassName("sliderBox")[0].children[0].children[0].childNodes[1].children);
            console.log(document.getElementsByClassName("sliderBox")[0].children[0].children[0].childNodes[1].children[0].ariaValueNow);
            console.log(document.getElementsByClassName("sliderBox")[0].children[0].children[0].childNodes[1].children[0].ariaValueText);
        });
        document.getElementsByClassName("noUi-handle")[0].style.setProperty("outline", "none");
    }, [])

    useEffect(() => {
        // console.log(darkness);

        if (!props.start && props.beginning !== undefined) {
            document.documentElement.style.setProperty('--secondBgColorOpacity', (1 - darkness) * 0.3);
            document.documentElement.style.setProperty('--thirdBgColorOpacity', 1 - darkness);
        }
        // eslint-disable-next-line
    }, [darkness]);

    useEffect(() => {
        if (props.beginning === null) setDarkness(0.2);
    }, [props.beginning])

    // const component = React.createElement(Nouislider, {
    //     style: slideStyle,
    //     range: {
    //         min: 0,
    //         max: 1
    //     },
    //     start: [darkness],
    //     onUpdate: value => setDarkness(parseFloat(value))
    // });

    const component = <Nouislider style={slideStyle} range={{ min: 0, max: 1 }} start={darkness} onUpdate={(value) => setDarkness(parseFloat(value))} />

    return (
        component)
}

const slideStyle = {
    width: "75em",
    transform: "scale(.5)"
}

export default BrightnessSlider
