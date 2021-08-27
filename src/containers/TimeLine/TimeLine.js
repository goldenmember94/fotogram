import './TimeLine.css'
import React, {useState, useEffect} from 'react'

import ItemCard from '../../components/ItemCard/ItemCard'

function TimeLine(props) {
  const [postState, setPostState] = useState(false)

  useEffect(() => {

    if (!postState) {
      fetch('https://api.npoint.io/ad11a9dbb73d4cddad06')
      .then(response => response.json())
      .then(json => setPostState(json))
    }
    
  }) 
  
  return (
    <div className="TimeLine__wrapper">
      {postState ? postState.map((i) => 
        <ItemCard 
          key={i.idPost} 
          idPost={i.idPost}
          idUser={i.idUser}
          description={i.description}
        />
      ) : <div>Загрузка</div> } 
    </div>
  )

} 

export default TimeLine