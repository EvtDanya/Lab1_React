import React from 'react';
import ButtonWithIco from './UI/button/ButtonWithIco';

const Sidebar = () => {
    const delConfirmation = () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            // del photo
        }
        else {
            // dont del photo
        }
    }

    return (
        <div className='sideBar'>
        {/* Боковая панель с функциональными кнопками(также кнопка сохранения изображения и удаления) */}
            <ButtonWithIco />
            <ButtonWithIco />
            <ButtonWithIco />
            <ButtonWithIco />
            <ButtonWithIco type='brightnessBtn'/>
            <ButtonWithIco type='plusBtn'/>
            <ButtonWithIco type='minusBtn'/>
            <h1 className='textSideBar'>File</h1>
            <ButtonWithIco type='saveBtn' />
            <ButtonWithIco type='delBtn' onClick={delConfirmation} />
        </div>
    );
};

export default Sidebar;