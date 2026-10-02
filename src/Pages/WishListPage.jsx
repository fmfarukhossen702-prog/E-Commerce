import React from 'react'
import Container from '../Component/Common/Container'
import BreadCrumb from '../Component/Common/BreadCrumb'
import Btn from '../Component/Common/Btn'
import Card from '../Component/Common/Card'
import { useSelector } from 'react-redux'
const WishListPage = () => {

  const wishlistItems = useSelector((state) => state.dataStor.wishlist)



  return (
    <div>
      <Container>
        <BreadCrumb />
        <div className="  flex justify-between items-center mt-10 px-10 py-6 rounded-sm shadow-sm ">
          <h2 className=" text-xl ">Wishlist ({wishlistItems.length})</h2>
          <Btn className="bg-transparent border  text-black">
            {" "}
            Move All To Bag
          </Btn>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 ">
          {wishlistItems.map((item) => (
            <Card
              key={item.id}
              deletIcon="flex items-center justify-center"
              heartIconCss="hidden"
              eyeIconCss="hidden"
              image={item.thumbnail}
              title={item.title}
              discount={item.discountPercentage}
              currentPrice={
                item.price - (item.price * item.discountPercentage) / 100
              }
              regularPrice={item.price}
              id={item.id}
              rating={item.rating}
              review={item?.reviews?.length || 0}
              bgCssImage="w-full bg-[#4b4a4a0e] "
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default WishListPage
