import React, {useState, useEffect} from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Image from './components/Image';
import SliderBar from './components/SliderBar';
import { saveAs } from 'file-saver'

function App() { 
  const TOOLS = [ //инструменты для редактирования фото с описанием
    {
        name: 'brightness',
        description: 'brightness',
        currentValue: 100,
        values : {
            min: 0,
            max: 200,
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
    {
      name: 'contrast',
      description: 'contrast',
      currentValue: 100,
      values : {
          min: 0,
          max: 200,
          unit: '%'
      }
    },
    {
      name: 'grayscale',
      description: 'grayscale',
      currentValue: 0,
      values : {
          min: 0,
          max: 100,
          unit: '%'
      }
    },
    {
      name: 'sepia',
      description: 'sepia',
      currentValue: 0,
      values : {
          min: 0,
          max: 100,
          unit: '%'
      }
    },
  ]


  const [selectedImage, setSelectedImage] = useState(null)// фото
  const [tools, setTools] = useState(TOOLS)
  const [imageStyle, setImageStyle] = useState(null)
  const [selectedTool, setSelectedTool] = useState(null)//выбранный инструмент редактирования
  const [sliderCurrVal, setSliderCurrVal] = useState(0)//текущее значение для слайдера

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
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [])

  const alertUser = (e) => {
    e.preventDefault()
    e.returnValue = ''
  }

  const changeCurrentValue = (newValue) => {
      let toolsCopy = tools
      toolsCopy[selectedTool].currentValue=newValue
      setTools(toolsCopy)
      setImageStyle({
        filter: `${tools[selectedTool].name}(${newValue}${tools[selectedTool].values.unit})` 
      })
      //tools[selectedTool].currentValue=newValue
  }

  const imgElement = React.useRef(null);

  //убрать лишние хуки
  //убрать лишние аргументы для компонентов
  //selectedImage убрать или нет?

  return (
    <div className='App'>
      <Sidebar 
        delImage={delImage}
        saveImage={saveImage}
        tools={tools}
        setSelectedTool={setSelectedTool}
        setSliderCurrVal={setSliderCurrVal}
        innerRef={imgElement}
        setImageStyle={setImageStyle}
      />
      <Image 
        image={selectedImage} 
        imageStyle={imageStyle}
        setImage={setSelectedImage}
        innerRef={imgElement}
      />
      <SliderBar 
        tool={tools[selectedTool]}
        sliderCurrVal={sliderCurrVal}
        setSliderCurrVal={setSliderCurrVal}
        changeCurrentValue={changeCurrentValue} 
        />
    </div>
  );
}

export default App;
 