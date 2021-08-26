import './TimeLine.css'
import React, {useState, useEffect} from 'react'

import ItemCard from '../../components/ItemCard/ItemCard'

function TimeLine(props) {
  const [postState, setPostState] = useState(false)

  useEffect(() => {
    if (!postState) {
      setPostState(JSON.parse(localStorage.getItem('postState')))
    }

    console.log("TimeLine", postState);
  }, [postState]) 
  
  return (
    <div className="TimeLine__wrapper">
      {postState ? postState.map((i) => 
        <ItemCard 
          key={i.idPost} 
          idPost={i.idPost}
          idUser={i.idUser}
          description={i.description}
        />
      ) : <div>Ошибка!!!</div> } 
    </div>
  )

} 

export default TimeLine