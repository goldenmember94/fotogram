import './App.css'
// import React, {useState, useEffect} from 'react'

//состояние объекта в localStorage
// import {st} from './state/st'

import MainPage from "./page/MainPage/MainPage";

function App() {

  // const [postState, setPostState] = useState('')

  // useEffect(() => {
    // загрузка состояния объекта в localStorage
    // localStorage.setItem('postState', JSON.stringify(st))
    
    // setPostState(localStorage.getItem('postState'))

  // }, [postState]) 

  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
