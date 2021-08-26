import './ItemCard.css'
import likeImg from '../Navigation/image/like.png'
import likeBorderImg from '../Navigation/image/like-border.png'

import React, {useState} from 'react'

import image from '../../общая/image/239881589_269128554724251_4491823688589993348_n.jpg'


function ItemCard(props) {

  const [like, setLike] = useState(false)

  function changelike(props) {
    setLike(!like)
  }

  // const idPost = props.idPost
  // const idUser = props.idUser

  return (
    <div className="ItemCard__wrapper">
      <img className="ItemCard__img" src={image} alt="" />
      <div className="ItemCard__wrapper-description">
        <div onClick={changelike} className="ItemCard__like-img">
          <img width="20px" height="20px" src={like ? likeImg : likeBorderImg} alt="#" />
        </div>
        <div className="ItemCard__description">{props.description}</div>
      </div>
    </div>
  )
}

export default ItemCard