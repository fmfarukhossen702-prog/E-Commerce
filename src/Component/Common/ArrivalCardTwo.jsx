import React from 'react'
// import deliveryCar from '../../assets/icon-delivery.png'
const ArrivalCardTwo = ({image, title ,heading}) => {
  return (
    <div className=' flex flex-col  items-center '>
      <div className=" w-22 h-22 bg-[#C1C0C1] rounded-full flex justify-center items-center ">
        <div className=" w-14.5 h-14.5 rounded-full bg-black flex justify-center items-center ">
          <img src={image} alt="" />
        </div>
      </div>
      <h3 className=' text-xl mt-6 pb-2 font-semibold '> {title} </h3>
      <p className=' text-[14px] '> {heading} </p>
    </div>
  );
}

export default ArrivalCardTwo
