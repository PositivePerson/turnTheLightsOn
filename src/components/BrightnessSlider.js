import React, { useState, useEffect } from 'react';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const BrightnessSlider = () => {
    const [darkness, setDarkness] = useState(25);

    useEffect(() => {
        console.log(darkness);
    }, [darkness]);

    return (
        <Nouislider style={slideStyle} range={{ min: 0, max: 100 }} start={[25]} connect onUpdate={(value) => setDarkness(parseFloat(value))} />
    )
}

const slideStyle = {
    width: "75em",
    transform: "scale(.5)"
}

export default BrightnessSlider
