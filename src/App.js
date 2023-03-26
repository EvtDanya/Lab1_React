import React, {useState, useEffect} from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Image from './components/Image';
import SliderBar from './components/SliderBar';
import { saveAs } from 'file-saver'

function App() {
  //TODO:
  //Добавить изменение значения currentValue в списке инструментов, через хуки(общий TOOL и с конкретным индексом)
  //рефакторинг, если возможно
  
  const TOOLS = [ //инструменты для редактирования фото с описанием
    {
        name: 'brightness',
        description: 'brightness',
        currentValue: 50,
        values : {
            min: 0,
            max: 100,
            unit: '%'
        }
    },
    {
      name: 'blur',
      description: 'blur',
      currentValue: 0,
      values : {
          min: 0,
          max: 100,
          unit: 'px'
      }
    },
  ]

  const [selectedImage, setSelectedImage] = useState(null)// фото
  const [values, setValues] = useState(null)// для слайдера
  const [tools, setTools] = useState(TOOLS)
  const [selectedTool, setSelectedTool] = useState(0)//выбранный инструмент редактирования
  const [sliderCurrVal, setSliderCurrVal] = useState(TOOLS[selectedTool].currentValue)//текущее значение для слайдера

  const saveImage = () => {//функция сохранения на пк отредактированного фото
    if (selectedImage) 
      saveAs(URL.createObjectURL(selectedImage), 'image.jpg')
    else 
      alert('There is nothing to save')
  }

  const delImage = () => {//функция удаления картинки с проверкой
    if (!selectedImage) 
      alert('There is nothing to delete')
    else
      setSelectedImage(null)
  }

  useEffect(() => {//Функция подтверждения выхода или обновления страницы
    window.addEventListener("beforeunload", alertUser)
    return () => {
      window.removeEventListener("beforeunload", alertUser)
    }
  }, [])

  const alertUser = (e) => {
    e.preventDefault()
    e.returnValue = ""
  }

  return (
    <div className="App">
      <Sidebar 
        delImage={delImage}
        saveImage={saveImage}
        tools={TOOLS}
        setValues={setValues}
        setSelectedTool={setSelectedTool}
        setSliderCurrVal={setSliderCurrVal}
      />
      <Image 
        image={selectedImage} 
        setImage={setSelectedImage}
      />
      <SliderBar 
        values={values}
        sliderCurrVal={sliderCurrVal}
        setSliderCurrVal={setSliderCurrVal}  
        />
    </div>
  );
}

export default App;
 