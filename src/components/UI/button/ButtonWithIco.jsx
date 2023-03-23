import React from 'react';
import classes from './ButtonWithIco.module.css';


const ButtonWithIco = ({type, children, ...props}) => {
    var icons = {
        'plusBtn':  require('./plus.png'),
        'minusBtn':  require('./minus.png'),
        'delBtn':  require('./delete.png'),
        'saveBtn':  require('./save.png'),
        'brightnessBtn':  require('./brightness.png'),
        'plusBtn':  require('./plus.png'),
    }

    var className
    if (type === 'delBtn')  className = classes.delBtn
    else if (type === 'saveBtn') className = classes.saveBtn
    else if (type === 'plusBtn' || type === 'minusBtn') className = classes.lensBtn
    else className = classes.btnWthIco
    
    return (
        <button 
        {...props} 
        className={className} 
        style={{'background-image': 'url(' + icons[type] + ')'}}
        > 
            {children}  
        </button>
    );
};

export default ButtonWithIco;