import React from 'react';
import classes from './Slider.module.css';

const Slider = ({children, ...props}) => {
    return (
        <input type='range' {...props} className={classes.slider}>
            {children}
        </input>
    );
};

export default Slider;
