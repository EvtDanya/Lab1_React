import React, {useState, forwardRef, createRef} from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Image from './components/Image';
import SliderBar from './components/SliderBar';
import { saveAs } from 'file-saver'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageStyle, setImageStyle] = useState(null)

  const saveImage = () => {//функция сохранения на пк отредактированного фото
    saveAs(URL.createObjectURL(selectedImage), 'image.jpg')
  }

  const delImage = () => {
    setSelectedImage(null)
  }

  return (
    <div className="App">
      <Sidebar delImage={delImage} saveImage={saveImage}/>
      <Image image={selectedImage} setImage={setSelectedImage} imageStyle={imageStyle}/>
      <SliderBar/>
    </div>
  );
}

export default App;
 