import './Navigation.css'
import { Link } from "react-router-dom";

import list from './image/list.png'
import likeBorder from './image/like-border.png'
import  account from './image/account.png'

function Navigation(props) {

  return(
    <div className="Navigation__wrapper">
      <a className="Navigation__logo" href="/">FOTOGRAM</a>

      <div className="Navigation__button-wrapper">
        <Link className="Navigation__button" to="/AccountsPage"><img width="40px" height="40px" src={list} alt="" /></Link>
        <Link className="Navigation__button" to="/likepost"><img width="40px" height="40px" src={likeBorder} alt="" /></Link>
        <Link className="Navigation__button" to="/mainpage"><img width="40px" height="40px" src={account} alt="" /></Link>
      </div>

    </div>
  )
}

export default Navigation

