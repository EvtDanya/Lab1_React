import React from 'react';
import classes from './Slider.module.css';

const Slider = ({min, max, value, handleChange, children, ...props}) => {
    return (
        <input 
            type='range' 
            className={classes.slider}
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            {...props} 
        >
            {children}
        </input>
    );
};

export default Slider;
