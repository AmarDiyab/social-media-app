import React from 'react'
import './SharePost.css'
import Profile from '../../img/profileImg.jpg'
import { UilScenery, UilLocationPoint, UilPlayCircle, UilSchedule } from '@iconscout/react-unicons'

function SharePost() {
    return (
        <div className='SharePost'>
            <img src={Profile} alt="" />
            <div>
                <input type="text" placeholder="What's Happening" />
                <div className="PostOptions">
                    <div className="Option" style={{ color: "var(--photo)" }}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="Option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="Option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="Option" style={{ color: "var(--schedule)" }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className='Button ShareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default SharePost