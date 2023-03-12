import React, {useState} from 'react';

function App() {
  const [likes, setLikes] = useState(0);//используем состояния для компонента
  //чтобы реакт понимал при изменении состояния компонента что нужно  его перерисовывать
  const [string, setString] = useState('Text in input');
  return (
    <div className="App">
        <h1>{likes}</h1>
        <h1>{string}</h1>
        <input type="text" value={string} onChange={event=>setString(event.target.value)}></input>
        <button onClick={()=>setLikes(likes+1)}>Increment</button>
        <button onClick={()=>setLikes(likes-1)}>Decrement</button>
    </div>
  );
}

export default App;
 