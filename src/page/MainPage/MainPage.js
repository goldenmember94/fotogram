import './MainPage.css'
import React, {useState, useEffect} from 'react'
import {account1} from '../../links'
import UserInfo from '../../components/UserInfo/UserInfo'
import TimeLine from '../../containers/TimeLine/TimeLine'

function MainPage(props) {


  const [userInfo, setUserInfo] = useState(false)

  useEffect(() => {

    if (!userInfo) {
      fetch(account1)
      .then(response => response.json())
      .then(json => setUserInfo(json))
    }
  })

  return (
    <div className="MainPage__wrapper">

      <UserInfo userInfo={userInfo}/>

      <TimeLine/>
      
    </div>
  )
}

export default MainPage