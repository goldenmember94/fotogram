import './ItemCard.css'
import likeImg from '../Navigation/image/like.png'
import likeBorderImg from '../Navigation/image/like-border.png'

import React, {useState, useEffect} from 'react'

function ItemCard(props) {

  const [like, setLike] = useState(false)

  useEffect(() => {
    
    if (localStorage.getItem(props.idUser)) {
      const likeData = JSON.parse(localStorage.getItem(props.idUser))

      if (likeData.find(item => item.idPost === props.idPost)) {
        setLike(true)
      }
    }

  },[props.idUser,props.idPost])



  function changelike(props) {
    setLike(!like)

    if (!localStorage.getItem(props.idUser)) {
      const i = [{idUser: props.idUser}, {idPost: props.idPost, like: true, description: props.description, linkFoto: props.linkFoto}]
      localStorage.setItem(props.idUser, JSON.stringify(i))
    } else {
      const likeData = JSON.parse(localStorage.getItem(props.idUser))

      if (likeData.find(item => item.idPost === props.idPost)) {
        const index = likeData.findIndex(item => item.idPost === props.idPost)
        
        if (likeData.length === 2) {
          localStorage.removeItem(props.idUser)
        } else {
          likeData.splice(index, 1)
          localStorage.setItem(props.idUser, JSON.stringify(likeData))
          // console.log(index);
        }

        
      } else {
        likeData.push({idPost: props.idPost, like: true, description: props.description, linkFoto: props.linkFoto})

        localStorage.setItem(props.idUser, JSON.stringify(likeData))
      }

    }

  }


  return (
    <div className="ItemCard__wrapper">
      <img className="ItemCard__img" src={props.linkFoto} alt="" />
      <div className="ItemCard__wrapper-description">
        <div onClick={changelike.bind(this, props)} className="ItemCard__like-img">
          <img width="20px" height="20px" src={like ? likeImg : likeBorderImg} alt="#" />
        </div>
        <div className="ItemCard__description">{props.description}</div>
      </div>
    </div>
  )
}

export default ItemCard