import React, { useState } from "react";
import Container from "./Container";
import logo from "../../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { NavLink } from "react-router";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [active,setActive] = useState(false)
  return (
    <div className=" py-8 bg-white border-b relative">
      <Container>
        <div className="flex justify-between items-center font-Poppins  ">
          <div className="w-[25%] ">
            <img src={logo} alt="" />
          </div>

          <HiBars3CenterLeft
            onClick={() => setActive(!active)}
            className=" lg:hidden"
          />
          <div
            className={` ${active ? " left-0 rounded-br-md  w-full  bg-black text-white z-5 py-3 " : ""}    duration-300 ease-in-out absolute translate-y-full lg:translate-y-0  -left-full bottom-0 lg:static  w-[75%]    flex lg:flex-row  flex-col  justify-between items-center  `}
          >
            <ul className="flex lg:flex-row flex-col gap-y-3  gap-12">
              <li className=" cursor-pointer ">
     
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li className=" cursor-pointer "> Contact</li>
              <li className=" cursor-pointer "> About</li>
              <li className=" cursor-pointer "> Sign Up</li>
            </ul>
            <div className=" flex lg:flex-row flex-col gap-y-3  pt-4 lg:pt-0  gap-6 items-center">
              <div className="w-60.75 rounded-sm relative ">
                <input
                  className=" bg-[#F5F5F5] w-full py-1.75 px-3 placeholder:text-[12px]  "
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  name=""
                  id=""
                  placeholder="What are you looking for?"
                />
                {!search && (
                  <IoIosSearch className=" text-black  absolute top-1/2 cursor-pointer -translate-1/2 right-1 text-2xl " />
                )}
              </div>
              <div className="flex gap-4 text-[32px] ">
                <CiHeart className=" cursor-pointer " />
                <PiShoppingCartThin className=" cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
