import React from 'react'
import Header from '../Component/Common/Header'
import NavBar from '../Component/Common/NavBar'
import Banner from '../Component/Home/Banner'
import FlashSales from '../Component/Home/FlashSales'
import Category from '../Component/Home/Category'
import BestSells from '../Component/Home/BestSells'

const Home = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Banner/>
      <FlashSales/>
      <Category/>
      <BestSells/>
    </div>
  )
}

export default Home
