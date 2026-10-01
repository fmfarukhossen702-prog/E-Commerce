import React from 'react'
import Container from '../Component/Common/Container'
import BreadCrumb from '../Component/Common/BreadCrumb'
import Btn from '../Component/Common/Btn'
import Card from '../Component/Common/Card'
const WishListPage = () => {
  return (
    <div>
      <Container>
        <BreadCrumb />
        <div className="flex justify-between items-center mt-10 px-10 py-6 rounded-sm shadow-sm ">
          <h2 className=' text-xl '>Wishlist (4)</h2>
          <Btn className = "bg-transparent border  text-black"> Move All To Bag</Btn>
        </div>

        <Card 
        deletIcon = "flex items-center justify-center"
        heartIconCss = "hidden"
        eyeIconCss = "hidden"
        />
      </Container>
    </div>
  );
}

export default WishListPage
