import { Button } from 'antd'
import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

const ToggleThemeButton = ({darkTheme, toggleTheme}) => {
  return (
    <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-transparent flex items-center justify-center text-base'>
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun /> :
             <HiOutlineMoon /> }
        </Button>
    </div>
  )
}

export default ToggleThemeButton