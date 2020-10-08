import React, { useState, useEffect, useRef } from 'react';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const BrightnessSlider = (props) => {
    const [darkness, setDarkness] = useState(0);

    const refValue = useRef(0);

    const handleDoubleClick = () => {
        setDarkness(1);
        component.props.start[0] = 1;
    }

    useEffect(() => {
        // .addEventListener('click', () => console.log(component))
        console.log(component);
        console.log(document.getElementsByClassName("sliderBox")[0].children);
        document.getElementsByClassName("sliderBox")[0].children[0].addEventListener("dblclick", () => handleDoubleClick());
        setTimeout(console.log(refValue.current), 1000);
        // component.addEventListener("dblclick", () => console.log("dbclickeddd"));
    }, [])

    useEffect(() => {
        console.log(darkness);

        if (!props.start && props.beginning !== undefined) {
            document.documentElement.style.setProperty('--secondBgColorOpacity', (1 - darkness) * 0.3);
            document.documentElement.style.setProperty('--thirdBgColorOpacity', 1 - darkness);
        }
        // eslint-disable-next-line
    }, [darkness]);

    useEffect(() => {
        if (props.beginning === null) setDarkness(0.2);
    }, [props.beginning])

    const component = <Nouislider style={slideStyle} ref={refValue} range={{ min: 0, max: 1 }} start={[0.2]} onUpdate={(value) => setDarkness(parseFloat(value))} />

    return (
        component)
}

const slideStyle = {
    width: "75em",
    transform: "scale(.5)"
}

export default BrightnessSlider
