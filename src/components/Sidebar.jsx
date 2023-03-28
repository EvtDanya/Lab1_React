import React from 'react';
import ButtonWithIco from './UI/button/ButtonWithIco';

const Sidebar = ({ delImage, saveImage, tools, setSelectedTool, setSliderCurrVal }) => {
   
    const delConfirmation = () => {//удаление
        if (window.confirm('Are you sure you want to delete this item?'))
            delImage()
    }

    const selectTool = (e) => {
        setSelectedTool(e.currentTarget.id)//выбрать айди текущего фильтра
        setSliderCurrVal(tools[e.currentTarget.id].currentValue)// отправить в компонент со слайдером информацию о единицах
    }

    return (
        <div className='sideBar'>
        {/* Боковая панель с функциональными кнопками*/}
            {tools.map((tool, index) => 
               <ButtonWithIco type={tool.name+'Btn'} onClick={selectTool} key={index} id={index}/>
                )}
            <ButtonWithIco type='plusBtn'/>
            <ButtonWithIco type='minusBtn'/>
            <h1 className='textSideBar'>File</h1>
            <ButtonWithIco type='saveBtn' onClick={saveImage} />
            <ButtonWithIco type='delBtn' onClick={delConfirmation} />
        </div>
    );
};

export default Sidebar;     