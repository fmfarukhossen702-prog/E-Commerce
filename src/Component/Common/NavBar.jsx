import React from 'react'
import Container from './Container'
import logo from '../../assets/Logo.png'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className=" py-8 bg-white border-b">
      <Container>
        <div className="flex justify-between items-center font-Poppins ">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex gap-12">
            <li> Home </li>
            <li> Contact</li>
            <li> About</li>
            <li> Sign Up</li>
          </ul>
          <div className=" flex gap-6 items-center">
            <div className="w-60.75 rounded-sm relative ">
              <input
                className=" bg-[#F5F5F5] w-full py-1.75 px-3  "
                type="search"
                name=""
                id=""
                placeholder="What are you looking for?"
              />
              <IoIosSearch className=" absolute top-1/2 -translate-1/2 right-1 text-2xl " />
            </div>
            <div className="flex gap-4 text-[32px] ">
              <CiHeart />
              <PiShoppingCartThin />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavBar
