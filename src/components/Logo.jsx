import React from 'react'
import LogoImage from '../assets/Logo_KSFH.png'
const Logo = () => {
  return (
    <div className='flex items-center justify-center text-white p-2'> 
        <img src={LogoImage} alt="" className='w-full h-full object-cover' />
    </div>
  )
}
export default Logo
