import React, {useState} from 'react';
import Slider from './UI/slider/Slider';

const SliderBar = ({ values, sliderCurrVal, setSliderCurrVal }) => {

    return (
        // Слайдер, для регулировки, например, яркости изображения(при активном инструменте)
        <div className='sliderBar'>
            {values//если фильтр уже выбран и данные получены, отображать активированный слайдер
                ?
                <div>
                <label className='valueLabel'>{values.min}</label>
                <Slider 
                    min={values.min}
                    max={values.max}
                    value={sliderCurrVal}
                    onChange={(e)=>{setSliderCurrVal(e.target.value)}}
                />
                <label className='valueLabel'>{values.max}</label>
                <label className='currentValueLabel'>Current: {sliderCurrVal}</label>
                
                </div>
                :
                <div>
                <label className='valueLabel'>0</label>
                <Slider 
                    disabled={true}
                />
                <label className='valueLabel'>100</label>
                </div>
            }
        </div>
    );
};

export default SliderBar;
