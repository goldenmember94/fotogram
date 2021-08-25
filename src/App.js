import './App.css'
import React, {useState, useEffect} from 'react'

import {st} from './state/st'

import MainPage from "./page/MainPage/MainPage";

function App() {

  const [postState, setPostState] = useState([])

  useEffect(() => {
    //загрузка состояния объекта в localStorage
    localStorage.setItem('postState', JSON.stringify(st))
    
    setPostState(localStorage.getItem('postState'))

    console.log("MainPage postState", postState);

  }, [postState]) 

  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
