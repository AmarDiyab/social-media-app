import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

function ProfileCard() {

    const ProfilePage = true;

    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className='ProfileName'>
                <span>Melissa</span>
                <span>Senior UI/UX Designer</span>
            </div>
            <div className='FollowStatus'>
                <hr />
                <div>
                    <div className="Follow">
                        <span>1,658</span>
                        <span>Followings</span>
                    </div>
                    <div className='VerticalLine'></div>
                    <div className="Follow">
                        <span>2,134</span>
                        <span>Followers</span>
                    </div>
                    {ProfilePage && (
                        <>
                        <div className='VerticalLine'></div>
                        <div className="Follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {ProfilePage ? '' : <span>My Profile</span> }
        </div>
    )
}

export default ProfileCard