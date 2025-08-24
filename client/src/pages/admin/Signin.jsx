import React from 'react'
import Login from '../../components/admin/Login'
import bgImg from '../../assets/bg_login.jpg'

const Signin = () => {
  return (
    <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{"backgroundImage":`url(${bgImg})`}}>
        <Login></Login>
    </div>
  )
}

export default Signin