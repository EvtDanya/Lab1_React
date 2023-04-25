import React from 'react';
import classes from './FileInput.module.css';

const FileInput = ({select, children, ...props}) => {
    const inputChanged = (e) => {
        select(e.target.files[0])
    }
    
      const chooseImageBtnClick = () => {
        document.getElementById('imageInput').click();
    }

    return (
        <div>
        <input 
            id="imageInput" 
            type="file" 
            accept="image/*" 
            className ={classes.fileInput}
            onChange={inputChanged} 
            {...props} 
        />
        <button 
            className ={classes.fileInputBtn} 
            onClick={chooseImageBtnClick}
        >
            Upload Image
        </button>
      </div>
    );
};

export default FileInput;