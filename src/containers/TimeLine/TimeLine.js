import './TimeLine.css'
import React, {useState, useEffect} from 'react'
import {firstStatePostsLink} from '../../links'
import ItemCard from '../../components/ItemCard/ItemCard'


import {
  Route
} from "react-router-dom";

function TimeLine(props) {
  const [postState, setPostState] = useState(false)

  useEffect((props) => {
    if (!postState) {
      fetch(firstStatePostsLink)
      .then(response => response.json())
      .then(json => setPostState(json))
    }
  })

  return (
    <div className="TimeLine__wrapper">

          <Route path="/mainpage">
            {postState ? postState.map((i) => 
              <ItemCard 
                key={i.idPost} 
                idPost={i.idPost}
                idUser={i.idUser}
                description={i.description}
                linkFoto={i.linkFoto}
              /> 
            ) : <div className="TimeLine__wrapper" >идет загрузка...</div>}
          </Route>

          <Route path="/likepost">
            {props.localPostState ? props.localPostState[1].map((i) => 
              <ItemCard 
                key={i.idPost} 
                idPost={i.idPost}
                idUser={i.idUser}
                description={i.description}
                linkFoto={i.linkFoto}
              /> 
            ) : <div className="TimeLine__wrapper" >идет загрузка...</div>}
          </Route>

    </div>
  )

} 

export default TimeLine