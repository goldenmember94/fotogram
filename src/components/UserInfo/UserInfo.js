import './UserInfo.css'
import React, {useState, useEffect} from 'react'
import {account1} from '../../links'

// import avatar from '../../sharedFolder/image/239179598_811926276091774_2757220120438119573_n.jpg'

function UserInfo(props) {

  const [userInfo, setUserInfo] = useState(false)

  useEffect(() => {

    if (!userInfo) {
      fetch(account1)
      .then(response => response.json())
      .then(json => setUserInfo(json))
    }

  })

  return (
    userInfo ? <div className="UserInfo__wrapper">
                  <img className="UserInfo__avatar" src={userInfo.accountFotoLink} alt="" />
                  <div className="UserInfo__desc-wrapper">
                    <p className="UserInfo__name">{userInfo.accountName}</p>
                    <p className="UserInfo__decription">{userInfo.descriptionAccount}</p>
                  </div>
                </div>: <div className="UserInfo__wrapper">идет загрузка...</div>
  )
}

export default UserInfo