import React from 'react'
import './FollowersCard.css'
import { Followers } from '../Data/FollowersData'

function FollowersCard() {
    return (
        <div className='FollowersCard'>
            <h3>Who is Following you</h3>

            {Followers.map((follower, id) => {
                return (
                    <div className="Follower">
                        <div>
                            <img src={follower.img} alt="" className='FollowerImage' />
                            <div className="FollowerName">
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='Button FollowButton'>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard