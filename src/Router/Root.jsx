import React from 'react'
import Home from '../Pages/Home'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
        <Outlet/>
        
      
    </div>
  )
}

export default Root
