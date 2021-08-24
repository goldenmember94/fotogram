import './MainPage.css'

import Navigation from '../../components/Navigation/Navigation'
import UserInfo from '../../components/UserInfo/UserInfo'
import TimeLine from '../../containers/TimeLine/TimeLine'

function MainPage(props) {

  return (
    <div className="MainPage__wrapper">
      <Navigation/>
      <UserInfo/>
      <TimeLine/>
    </div>
  )
}

export default MainPage