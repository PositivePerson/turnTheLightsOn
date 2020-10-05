import React from 'react';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const BrightnessSlider = () => (

    <Nouislider style={slideStyle} range={{ min: 0, max: 100 }} start={[25]} connect />


)
const slideStyle = {
    width: "75em",
    transform: "scale(.5)"
}
export default BrightnessSlider
