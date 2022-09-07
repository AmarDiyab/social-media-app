import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import { UilSetting } from '@iconscout/react-unicons'
import Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'

function RightSide() {
  return (
    <div className='RightSide'>
        <div className="NavIcons">
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
        </div>
    </div>
  )
}

export default RightSide