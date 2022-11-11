import React, { useState } from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import { UilSetting } from '@iconscout/react-unicons'
import Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
 
function RightSide() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className='RightSide'>
        <div className="NavIcons">
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard />

        <button className='Button Share' onClick={()=> setModalOpened(true)}>Share</button>
        
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide