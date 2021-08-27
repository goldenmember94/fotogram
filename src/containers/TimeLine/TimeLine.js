import './TimeLine.css'
import React, {useState, useEffect} from 'react'
import {firstStatePostsLink} from '../../links'
import ItemCard from '../../components/ItemCard/ItemCard'

function TimeLine(props) {
  const [postState, setPostState] = useState(false)

  useEffect(() => {

    if (!postState) {
      fetch(firstStatePostsLink)
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
          linkFoto={i.linkFoto}
        /> 
      ) : <div className="TimeLine__wrapper" >идет агрузка...</div>}
    </div>
  )

} 

export default TimeLine