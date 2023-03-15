import React, {useState} from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Image from './components/Image';
import SliderBar from './components/SliderBar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Image/>
      <SliderBar/>
    </div>
  );
}

export default App;
 