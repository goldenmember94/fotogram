import './UserInfo.css'

function UserInfo(props) {

  return (
    props.userInfo ? <div className="UserInfo__wrapper">
                        <img className="UserInfo__avatar" src={props.userInfo.accountFotoLink} alt="" />
                        <div className="UserInfo__desc-wrapper">
                          <p className="UserInfo__name">{props.userInfo.accountName}</p>
                          <p className="UserInfo__decription">{props.userInfo.descriptionAccount}</p>
                        </div>
                      </div>: <div className="UserInfo__wrapper">идет загрузка...</div>
  )
}

export default UserInfo