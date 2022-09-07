import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import { UilSetting } from '@iconscout/react-unicons'
import Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'
import TrendCard from '../TrendCard/TrendCard'

function RightSide() {
  return (
    <div className='RightSide'>
        <div className="NavIcons">
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard />
        <button className='Button Share'>
            Share
        </button>
    </div>
  )
}

export default RightSide