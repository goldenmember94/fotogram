import './LikePostPage.css'
import { account1 } from '../../links'
import React , {useState, useEffect} from 'react'
import TimeLine from '../../containers/TimeLine/TimeLine'

function LikePostPage(props) {

  const [userInfo, setUserInfo] = useState(false)
  const [localPostState, setLocalPostState] = useState(false)

  useEffect(() => {
    if (!userInfo) {
      fetch(account1)
      .then(response => response.json())
      .then(json => setUserInfo(json))
    }
    // console.log(userInfo);
  })

  useEffect(() => {
    //ответ в json формате
    setLocalPostState(localStorage.getItem(userInfo.idUser))
  }, [localPostState, userInfo.idUser])



  return (
    <div className="LikePostPage__wrapper">
      {localPostState 
        ? <TimeLine localPostState={JSON.parse(localPostState)} />
        : <div> идет загрузка...</div> }
    </div>
  )
}

export default LikePostPage