import React from "react";
import Container from "./Container";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className=" py-3.75 bg-black text-white font-Poppins ">
      <Container>
        <div className=" flex justify-between items-center text-[12px] lg:text-[14px]! ">
            <div className=" hidden lg:block "></div>
          <p className=" text-center ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <NavLink to="/shop" end className=" underline ml-3 font-semibold cursor-pointer " >ShopNow</NavLink>
            
          </p>
          <div>
            <select className=" cursor-pointer bg-black" name="" id="">
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">Indian</option>
            </select>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
