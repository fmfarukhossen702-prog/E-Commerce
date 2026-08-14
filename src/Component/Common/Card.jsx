import React from "react";
import { Rate } from "antd";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Card = ({
  discount,
  image,
  title,
  currentPrice,
  regularPrice,
  rating,
  review,
  AddToCardCss,
  disCountCss,
}) => {
  return (
    <div className=" w-67.5 cursor-progress group h-87.5 ">
      <div className=" relative  ">
        <div className=" h-62.5 relative overflow-hidden ">
          <img src={image} alt="" />
          <h3
            className={` ${AddToCardCss} w-full py-2 bg-black rounded-bl-sm rounded-br-sm rounded-tr-xs rounded-tl-xs  absolute left-0 bottom-0 translate-y-full   duration-500 ease-in group-hover:translate-y-0  text-center text-white `}
          >
            Add To Cart
          </h3>
        </div>
        <div
          className={` ${disCountCss}  w-13.75 h-6.5 rounded-sm absolute top-3 left-3 bg-primary flex items-center justify-center text-[12px] `}
        >
          {discount}
        </div>
        <div className="absolute top-3 right-3 space-y-2.5 ">
          <div className=" w-8.5 h-8.5 rounded-full text-xl bg-white flex items-center justify-center  ">
            <CiHeart />
          </div>
          <div className=" w-8.5 h-8.5 rounded-full  text-xl bg-white flex items-center justify-center  ">
            <IoEyeOutline />
          </div>
        </div>
      </div>
      <h3 className=" font-medium pt-4 pb-2"> {title} </h3>
      <div className=" font-medium flex gap-4 items-center ">
        <h5 className="text-primary"> {currentPrice} </h5>
        <h5 className=" line-through text-[#00000060] "> {regularPrice} </h5>
      </div>
      <div className=" font-medium flex gap-4 items-center mt-2 ">
        <Rate allowHalf defaultValue={rating} />
        <h5 className="  text-[#00000060] ">{review} </h5>
      </div>
    </div>
  );
};

export default Card;
