import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

function InfoCard() {
    const [ modalOpened, setModalOpened ] = useState()

  return (
    <div className='InfoCard'>
        <div className="InfoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=> setModalOpened(true) } />
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

            </div> 
        </div>

        <div className="Info">
            <span>
                <b>Relationship Status </b>
            </span>
            <span style={{float: "right"}}>Single</span>
        </div>

        <div className="Info">
            <span>
                <b>Lives in </b>
            </span>
            <span style={{float: "right"}}>Kerala</span>
        </div>
        
        <div className='Info'>
            <span>
                <b>Works At </b>
            </span>
            <span style={{float: "right"}}>an IT Company</span>
        </div>

        <button className='Button LogoutButton'>Logout</button>
    </div>
  )
}

export default InfoCard