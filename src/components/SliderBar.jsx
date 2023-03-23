import React, {useState} from 'react';
import Slider from './UI/slider/Slider';

const SliderBar = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    const disableSlider = () => {
        setIsDisabled(!isDisabled)
    }

    return (
        // Слайдер, для регулировки, например, яркости изображения(при активном инструменте)
        <div className='sliderBar'>
            <Slider disabled={isDisabled}/>
            <button type="button" onClick={disableSlider}>Disable</button>
        </div>
    );
};

export default SliderBar;