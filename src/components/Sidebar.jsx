import React from 'react';
import ButtonWithIco from './UI/button/ButtonWithIco';

const Sidebar = ({ delImage, saveImage, tools, setSelectedTool, setSliderCurrVal, innerRef, setImageStyle }) => {
   
    const delConfirmation = () => {//удаление
        if (window.confirm('Are you sure you want to delete this item?'))
            delImage()
    }

    const selectTool = (e) => {
        setSelectedTool(e.currentTarget.id)//выбрать айди текущего фильтра
        setSliderCurrVal(tools[e.currentTarget.id].currentValue)// отправить в компонент со слайдером информацию о единицах
    }

    const increaseSizeOfImage = () => {
        if (innerRef.current)
        {
            const styles = getComputedStyle(innerRef.current)
           
            const height = innerRef.current.clientHeight
            const width = innerRef.current.clientWidth
            if (parseInt(styles.maxWidth, 10) >= width + 10 && parseInt(styles.maxHeight, 10) >= height + 10)
            {
                setImageStyle({
                height : height + 10,
                width : width + 10,
                }) 
            }
        }
      } 
      const decreaseSizeOfImage = () => {
        if (innerRef.current)
        {
            const styles = getComputedStyle(innerRef.current)

            const height = innerRef.current.clientHeight
            const width = innerRef.current.clientWidth

            if (parseInt(styles.maxWidth, 10) >= width - 10 && parseInt(styles.maxHeight, 10) >= height - 10)
            {
                setImageStyle({
                    height : height - 10,
                    width : width - 10,
                }) 
            }
        }
      }   

    return (
        <div className='sideBar'>
        {/* Боковая панель с функциональными кнопкацми*/}
            {tools.map((tool, index) => 
               <ButtonWithIco type={tool.name+'Btn'} onClick={selectTool} key={index} id={index}/>
                )}
            <ButtonWithIco type='plusBtn' onClick={increaseSizeOfImage}/>
            <ButtonWithIco type='minusBtn' onClick={decreaseSizeOfImage}/>
            <h1 className='textSideBar'>File</h1>
            <ButtonWithIco type='saveBtn' onClick={saveImage} />
            <ButtonWithIco type='delBtn' onClick={delConfirmation} />
        </div>
    );
};

export default Sidebar;     