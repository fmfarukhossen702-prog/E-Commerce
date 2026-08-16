import React from 'react'
import Header from '../Component/Common/Header'
import NavBar from '../Component/Common/NavBar'
import Banner from '../Component/Home/Banner'
import FlashSales from '../Component/Home/FlashSales'
import Category from '../Component/Home/Category'
import BestSells from '../Component/Home/BestSells'
import Music from '../Component/Home/Music'
import OurProduct from '../Component/Home/OurProduct'
import NewArrival from '../Component/Home/NewArrival'
import Footer from '../Component/Common/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Banner/>
      <FlashSales/>
      <Category/>
      <BestSells/>
      <Music/>
      <OurProduct/>
      <NewArrival/>
      <Footer/>
    </div>
  )
}

export default Home
