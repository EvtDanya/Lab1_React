import React from 'react';
import Slider from './UI/slider/Slider';

const SliderBar = ({ tool, changeCurrentValue, sliderCurrVal, setSliderCurrVal }) => {

    return (
        // Слайдер, для регулировки, например, яркости изображения(при активном инструменте)
        <div className='sliderBar'>
            {tool//если фильтр уже выбран и данные получены, отображать активированный слайдер
                ?
                <div>
                <label className='valueLabel'>{tool.values.min}</label>
                <Slider 
                    min={tool.values.min}
                    max={tool.values.max}
                    value={sliderCurrVal}
                    onChange={(e)=>{
                        changeCurrentValue(e.target.value)
                        setSliderCurrVal(e.target.value)
                        }}
                />
                <label className='valueLabel'>{tool.values.max}</label>
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
