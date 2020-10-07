import React, { useState, useEffect } from 'react';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const BrightnessSlider = (props) => {
    const [darkness, setDarkness] = useState(0);

    useEffect(() => {
        console.log(darkness);

        if (!props.start && props.beginning !== undefined) {
            document.documentElement.style.setProperty('--secondBgColorOpacity', (1 - darkness) * 0.3);
            document.documentElement.style.setProperty('--thirdBgColorOpacity', 1 - darkness);
        }

    }, [darkness]);

    useEffect(() => {
        if (props.beginning === null) setDarkness(0.2);
    }, [props.beginning])

    return (
        <Nouislider style={slideStyle} range={{ min: 0, max: 1 }} start={[0.2]} connect onUpdate={(value) => setDarkness(parseFloat(value))} />
    )
}

const slideStyle = {
    width: "75em",
    transform: "scale(.5)"
}

export default BrightnessSlider
