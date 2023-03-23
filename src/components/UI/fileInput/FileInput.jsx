import React from 'react';
import classes from './FileInput.module.css';

const FileInput = ({children, ...props}) => {
    return (
        <input 
        type='file' 
        accept="image/*"
        {...props} 
        className={classes.slider}>
        {/* onChange={(event) => {
        setSelectedImage(event.target.files[0]);
        }} */}
            {children}
        </input>
    );
};

export default FileInput;