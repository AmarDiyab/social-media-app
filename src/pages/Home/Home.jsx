import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
        <ProfileSide />
        <div className="PostSide">Posts</div>
        <div className="RightSide">Right Side</div>
    </div>
  )
}

export default Home