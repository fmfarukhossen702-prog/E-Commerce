import React from 'react'
import { NavLink, useLocation } from 'react-router';

const BreadCrumb = () => {
    const location = useLocation();
    const path = location.pathname.split("/").filter((x) => x);
  return (
    <div className='flex gap-2 items-center mt-20 mb-12.5'>
      <NavLink to="/" >Home</NavLink>
      <h3> {` > `} </h3>
      <h3 className=' capitalize '> {path[0]} </h3>
    </div>
  )
}

export default BreadCrumb
