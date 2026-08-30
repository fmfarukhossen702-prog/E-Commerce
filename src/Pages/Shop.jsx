import React from 'react'
import Container from '../Component/Common/Container'
import  Card  from '../Component/Common/Card';
import cart from '../assets/Cart.png'

const Shop = () => {
  return (
    <div>
      <Container>
        <div className=" flex  ">
          <div className=" w-[20%] ">
            <ul className=" text-black bannerCss space-y-4 mt-10 pb-10  ">
              <li className="flex w-full justify-between pr-2 items-center">
                <span>Woman’s Fashion</span> 
              </li>
              <li> Men’s Fashion</li>
              <li> Electronics</li>
              <li> Home & Lifestyle</li>
              <li> Medicine</li>
              <li> Sports & Outdoor</li>
              <li> Health & Beauty</li>
              <li> Groceries & </li>
            </ul>
          </div>
          <div className=" w-[80%]   ">
            <Card
              AddToCardCss="hidden"
              disCountCss="hidden"
              image={cart}
              title="The north coat"
              currentPrice="260"
              regularPrice="360"
              rating={5}
              review="65"
            />
            <Card
              AddToCardCss="hidden"
              disCountCss="hidden"
              image={cart}
              title="The north coat"
              currentPrice="260"
              regularPrice="360"
              rating={5}
              review="65"
            />
            <Card
              AddToCardCss="hidden"
              disCountCss="hidden"
              image={cart}
              title="The north coat"
              currentPrice="260"
              regularPrice="360"
              rating={5}
              review="65"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Shop
