import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
function Auth() {
  return (
    <div className='Auth'>
        <div className="AuthLeft">
            <img src={Logo} alt="" />
            <div className="Name">
                <h1>SOCIAL</h1>
                <h6>Explore Ideas Throughout The World</h6>
            </div>
        </div>
        <h1><SignUp /></h1>
    </div>
  )
}

function SignUp() {
    return (
        <div className="AuthRight">
            <form action="" className='infoForm AuthForm'>
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname' />
                </div>
                <div>
                    <input type="text" className='infoInput' placeholder='Username' name='username ' />
                </div>
                <div>
                    <input type="password" className="infoInput" placeholder='Password' name='password' />
                    <input type="password" className="infoInput" placeholder='Confirm Password' name='confirmpass' />
                </div>

                <div>
                <span className='span'>Already have an account?</span>
                </div>

                <button className='Button infoButton' type='submit'>Sign Up</button>                
            </form>
        </div>
    )
}

export default Auth