import React, {useState} from 'react';
import { saveAs } from 'file-saver'

const Image = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const saveImage = () => {
        const link = document.createElement('a')
        link.download = 'image_edit.jpg'
        link.href = URL.createObjectURL(selectedImage)
        link.click()
    }

    return (
        <div className='image'>
        {selectedImage && (
            <div>
            <img
                alt="not found"          
                src={URL.createObjectURL(selectedImage)}
                width={'1920px'}
                max-height={'100%'}
            />
            <br/>
            <button onClick={() => saveImage}>Download</button>
            </div>
        )}

        <br />
        <br />
        
        <input
            type="file"
            name="myImage"
            onChange={(event) => {
            setSelectedImage(event.target.files[0]);
            }}
        />
    </div>
    );
};

export default Image;