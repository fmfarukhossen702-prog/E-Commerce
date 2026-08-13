import React from 'react'
import Header from '../Component/Common/Header'
import NavBar from '../Component/Common/NavBar'
import Banner from '../Component/Home/Banner'
import FlashSales from '../Component/Home/FlashSales'

const Home = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Banner/>
      <FlashSales/>
    </div>
  )
}

export default Home
