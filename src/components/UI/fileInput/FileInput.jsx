import React from 'react';
import classes from './FileInput.module.css';

const FileInput = ({select, children, ...props}) => {
   
    const inputChanged = (e) => {
        select(e.target.files[0])
    }

    return (
        <input 
            type='file' 
            accept="image/*"
            {...props} 
            className={classes.slider}
            onChange={inputChanged}
        >
            {children}
        </input>
    );
};

export default FileInput;