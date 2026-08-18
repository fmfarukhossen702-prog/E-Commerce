import React, { useState } from "react";
import Container from "./Container";
import logo from "../../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const NavBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className=" py-8 bg-white border-b">
      <Container>
        <div className="flex justify-between items-center font-Poppins ">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex  gap-12">
            <li className=" cursor-pointer " > Home </li>
            <li className=" cursor-pointer " > Contact</li>
            <li className=" cursor-pointer " > About</li>
            <li className=" cursor-pointer " > Sign Up</li>
          </ul>
          <div className=" flex gap-6 items-center">
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
                <IoIosSearch className=" absolute top-1/2 cursor-pointer -translate-1/2 right-1 text-2xl " />
              )}
            </div>
            <div className="flex gap-4 text-[32px] ">
              <CiHeart className=" cursor-pointer " />
              <PiShoppingCartThin className=" cursor-pointer " />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
