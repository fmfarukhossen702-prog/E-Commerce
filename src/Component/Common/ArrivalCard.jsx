import React from 'react'

const ArrivalCard = ({image , title , heading , shopNow, className = ""}) => {
  return (
    <div>
      <img src={image} alt="" />
      <div className={` w-60.5 absolute left-8 bottom-8 text-white! ${className} `}>
        <h5 className=" text-[24px] font-semibold"> {title} </h5>
        <p className=" text-[14px] pt-1.5 pb-2.5 ">{heading}</p>
        <h6 className=" text-[16px]  font-bold underline "> {shopNow} </h6>
      </div>
    </div>
  );
}

export default ArrivalCard
