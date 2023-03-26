import React, {useState} from 'react';
import { saveAs } from 'file-saver'
import FileInput from './UI/fileInput/FileInput';

const Image = () => {
    const [selectedImage, setSelectedImage] = useState(null);
// TODO
// наладить функционал сохранения
// предусмотреть загрузку ТОЛЬКО изображений
    const saveImage = () => {//функция сохранения на пк отредактированного фото
        const link = document.createElement('a')
        link.download = 'image_edit.jpg'
        link.href = URL.createObjectURL(selectedImage)
        link.click()
    }

    const selectImage = (image) => {
        setSelectedImage(image)
    } 

    return (
        <div className='imageContainer'>
        
        {selectedImage 
            ?//если выбрано изображение
            <div>
            <img 
                alt="not found"          
                src={URL.createObjectURL(selectedImage)}
                max-width={'100%'}
                height={'auto'}
                max-height={'100%'}
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