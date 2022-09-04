import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'

function LogoSearch() {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="" />
        <div className="Search">
            <input type="text" placeholder='#Explore'/>
            <div className='SearchIcon'>
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch