import React from 'react'
import { useLocation } from 'react-router';

const BreadCrumb = () => {
    const location = useLocation();
    const path = location.pathname.split("/").filter((x) => x);
  return (
    <div className='flex gap-2 items-center mt-20 mb-12.5'>
      <h3>Home</h3>
      <h3> {` > `} </h3>
      <h3> {path[0]} </h3>
    </div>
  )
}

export default BreadCrumb
