import React, {useState} from 'react';
import FileInput from './UI/fileInput/FileInput';

const Image = ({ image, setImage, imageStyle }) => { 
    const selectImage = (image) => {
        setImage(image)
    } 

    return (
        <div className='imageContainer'>
        
        {image 
            ?//если выбрано изображение
            <div> 
            <img 
                id='image'
                alt='not found'          
                src={URL.createObjectURL(image)} 
                style={imageStyle}             
            />
            {/*скачать картинку обратно на пк*/}
            </div>
            
            ://иначе отобразить инпут
            <FileInput select={selectImage}/>
        }      
    </div>
    );
};

export default Image;