import React from 'react';
import classes from './ButtonWithIco.module.css';

const ButtonWithIco = ({type, children, ...props}) => {
    const icons = {
        'plusBtn':  require('./plus.png'),
        'minusBtn':  require('./minus.png'),
        'delBtn':  require('./delete.png'),
        'saveBtn':  require('./save.png'),
        'brightnessBtn':  require('./brightness.png'),
        'blurBtn':  require('./blur.png'),
        'contrastBtn': require('./contrast.png'),
        'grayscaleBtn': require('./grayscale.png'),
        'sepiaBtn': require('./sepia.png')
    }

    let className = classes.btnWthIco
    if (type === 'delBtn')  className = classes.delBtn
    else if (type === 'saveBtn') className = classes.saveBtn
    else if (type === 'plusBtn' || type === 'minusBtn') className = classes.lensBtn
    
    return (
        <button 
            className={className} 
            style={{'backgroundImage': 'url(' + icons[type] + ')'}}
            {...props} 
        > 
            {children}
        </button>
    );
};
export default ButtonWithIco;