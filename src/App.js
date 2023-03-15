import React, {useState} from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Image/>
    </div>
  );
}

export default App;
 