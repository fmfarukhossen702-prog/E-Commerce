import React from 'react'

const ArrivalCard = ({image , title , heading , shopNow, className = ""}) => {
  return (
    <div>
      <img src={image} alt="" />
      <div className={` w-60.5 absolute left-4 bottom-4 lg:left-8 lg:bottom-8 text-white! ${className} `}>
        <h5 className=" text-xl lg:text-[24px] font-medium lg:font-semibold"> {title} </h5>
        <p className=" text-[12px] lg:text-[14px] lg:pt-1.5 py-0.50 lg:pb-2.5 ">{heading}</p>
        <button className=" text-[12px] lg:text-[16px] cursor-pointer font-semibold  lg:font-bold underline "> {shopNow} </button>
      </div>
    </div>
  );
}

export default ArrivalCard
