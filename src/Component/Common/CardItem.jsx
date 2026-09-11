import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const CardItem = ({imgSrc,price,brand}) => {
  return (
    <div>
      <div className=" flex justify-between items-center mt-10 px-10 py-6 rounded-sm shadow-sm ">
        <div className="  w-[25%] flex items-center gap-4">
          <div>
            <img className=" w-12.5 h-10 " src={imgSrc} alt="" />
          </div>
          <h3>{brand}</h3>
        </div>
        <h3 className="  w-[25%] ">${price}</h3>
        <div className="w-[25%] mx-auto ">
          <div className="  h-11 w-18 flex justify-center rounded-sm border border-[#00000061] items-center gap-4 ">
            <h6>01</h6>
            <div className=" flex flex-col ">
              <MdOutlineKeyboardArrowUp />
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>

        <h3 className=" w-[25%]  ">${price} </h3>
      </div>
    </div>
  );
};

export default CardItem;
