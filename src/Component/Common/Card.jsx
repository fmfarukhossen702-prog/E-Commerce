import React from "react";
import frame from "../../assets/Frame570.png";
import { Rate } from "antd";

const Card = () => {
  return (
    <div className=" w-67.5 cursor-progress group h-87.5 ">
      <div className=" relative  ">
        <div className=" h-62.5 relative overflow-hidden ">
          <img src={frame} alt="" />
          <h3 className=" w-full py-2 bg-black  absolute left-0 bottom-0 translate-y-full   duration-500 ease-in group-hover:translate-y-0  text-center text-white ">
            Add To Cart
          </h3>
        </div>
        <div className=" w-13.75 h-6.5 rounded-sm absolute top-3 left-3 bg-primary flex items-center justify-center text-[12px] ">
          -40%
        </div>
      </div>
      <h3 className=" font-medium pt-4 pb-2">HAVIT HV-G92 Gamepad</h3>
      <div className=" font-medium flex gap-4 items-center ">
        <h5 className="text-primary">$120</h5>
        <h5 className=" line-through text-[#00000060] ">$160</h5>
      </div>
      <div className=" font-medium flex gap-4 items-center mt-2 ">
        <Rate allowHalf defaultValue={3.8} />
        <h5 className=" line-through text-[#00000060] ">(88)</h5>
      </div>
    </div>
  );
};

export default Card;
