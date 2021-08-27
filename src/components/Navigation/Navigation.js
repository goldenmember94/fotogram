import './Navigation.css'

// import home from './image/home.png'
import list from './image/list.png'
import likeBorder from './image/like-border.png'
import  account from './image/account.png'

function Navigation(props) {

  return(
    <div className="Navigation__wrapper">
      <a className="Navigation__logo" href="/">FOTOGRAM</a>

      <div className="Navigation__button-wrapper">
        <a className="Navigation__button" href="/"><img width="40px" height="40px" src={list} alt="" /></a>
        <a className="Navigation__button" href="/"><img width="40px" height="40px" src={likeBorder} alt="" /></a>
        <a className="Navigation__button" href="/"><img width="40px" height="40px" src={account} alt="" /></a>
      </div>

    </div>
  )
}

export default Navigation

