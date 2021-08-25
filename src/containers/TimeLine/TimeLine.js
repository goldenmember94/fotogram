import './TimeLine.css'
import React, {useState, useEffect} from 'react'

// import {st} from '../../state/st'

import ItemCard from '../../components/ItemCard/ItemCard'

function TimeLine(props) {
  const [stateLoad, setStateLoad] = useState(false)
  const [postState, setPostState] = useState([])

  useEffect(() => {

    if (stateLoad === false) {
      setPostState(JSON.parse(localStorage.getItem('postState')))
      setStateLoad(true)

      console.log("TimeLine", postState, stateLoad);
    }
  
  }, [postState, stateLoad]) 
  

  const itemsCards = postState.map((i) => 
    <ItemCard 
      key={i.idPost} 
      idPost={i.idPost}
      idUser={i.idUser}
      description={i.description}
    />
  )

  return (
    <div className="TimeLine__wrapper">
      {stateLoad ? itemsCards : <div>Ошибка!!!</div> } 
    </div>
  )

} 

export default TimeLine