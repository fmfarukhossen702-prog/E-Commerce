import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className=" py-3.75 bg-black text-white font-Poppins ">
      <Container>
        <div className=" flex justify-between items-center text-[14px]! ">
            <div className=""></div>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className=" underline ml-3 font-semibold " >ShopNow</span>
          </p>
          <div>
            <select className=" bg-black" name="" id="">
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
