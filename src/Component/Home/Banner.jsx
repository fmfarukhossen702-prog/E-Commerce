import React from 'react'
import Container from '../Common/Container'
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className=" bg-white">
      <Container>
        <div className=" flex  ">
          <div className=" w-[20%] border-r-[0.5px] border-[#0000005a] ">
            <ul className=" text-black space-y-4 mt-10 pb-10  ">
              <li className="flex w-full justify-between pr-2 items-center">
                <span>Woman’s Fashion</span> <IoIosArrowForward />
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
          <div className=" w-[80%] "></div>
        </div>
      </Container>
    </div>
  );
}

export default Banner
