import './UserInfo.css'

import avatar from '../../общая/image/239179598_811926276091774_2757220120438119573_n.jpg'

function UserInfo(props) {

  return (
    <div className="UserInfo__wrapper">
      <img className="UserInfo__avatar" src={avatar} alt="" />
      
      <div className="UserInfo__desc-wrapper">
        <p className="UserInfo__name">Иванов Иван</p>
        <p className="UserInfo__decription">Люблю закаты, и покушац...</p>
      </div>
    </div>
  )
}

export default UserInfo