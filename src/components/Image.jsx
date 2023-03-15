import React, {useState} from 'react';
import { saveAs } from 'file-saver'

const Image = () => {
    const [selectedImage, setSelectedImage] = useState(null);
// TODO
// кнопку надо перенести в sidebar
// наладить функционал сохранения
// предусмотреть загрузку ТОЛЬКО изображений
    const saveImage = () => {//функция сохранения на пк отредактированного фото
        const link = document.createElement('a')
        link.download = 'image_edit.jpg'
        link.href = URL.createObjectURL(selectedImage)
        link.click()
    }

    return (
        <div className='image'>
        <h1>Choose file</h1>
        {selectedImage 
            ?//если выбрано изображение
            <div>
            <img
                alt="not found"          
                src={URL.createObjectURL(selectedImage)}
                width={'100%'}
                height={'100%'}
            />
            <br/>{/*скачать картинку обратно на пк*/}
            <button onClick={() => saveImage}>Download</button>
            </div>
            ://иначе отобразить инпут
            <input 
            type="file"
            name="myImage"
            onChange={(event) => {
            setSelectedImage(event.target.files[0]);
            }}

            />
        }      
    </div>
    );
};

export default Image;