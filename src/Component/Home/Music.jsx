import React, { useEffect, useState } from "react";
import music from "../../assets/music-box.png";
import Container from "../Common/Container";
import Btn from "../Common/Btn";
import { countDownDateAndTime } from "countdown-date-time";   



const Music = () => {
    const conduct_date = "2026-09-25 17:00:00";
    const [count, setCount] = useState({})
    
    useEffect(() => {
        setInterval(()=> {
             const countDown = countDownDateAndTime(conduct_date);
             setCount(countDown)
         
        },1000)
       

    },[])


  return (
    <div>
      <Container>
        <div className="relative w-full h-125 ">
          <div>
            <img src={music} alt="" />
          </div>
          <div className=" absolute top-1/2 -translate-y-1/2 left-14 ">
            <h6 className=" text-[12px] text-[#00FF66] ">Categories</h6>
            <h2 className=" font-medium py-8 leading-15 text-5xl  text-white w-111 ">
              Enhance Your Music Experience
            </h2>
            <div className=" flex gap-6 items-center">
              <div className=" w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-black flex flex-col gap-0.5 justify-center items-center ">
                <h4 className="text-[14px] font-bold "> {count.days}</h4>
                <h5 className=" text-[11px] ">Days</h5>
              </div>
              <div className=" w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-black flex flex-col gap-0.5 justify-center items-center ">
                <h4 className="text-[14px] font-bold "> {count.hours} </h4>
                <h5 className=" text-[11px] ">Hours</h5>
              </div>
              <div className=" w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-black flex flex-col gap-0.5 justify-center items-center ">
                <h4 className="text-[14px] font-bold "> {count.minutes} </h4>
                <h5 className=" text-[11px] ">Minutes</h5>
              </div>
              <div className=" w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-black flex flex-col gap-0.5 justify-center items-center ">
                <h4 className="text-[14px] font-bold "> {count.seconds} </h4>
                <h5 className=" text-[11px] ">Seconds</h5>
              </div>
            </div>
            <Btn className=" bg-[#00FF66]! text-black! mt-10 ">Buy Now!</Btn>
          </div>
        </div>
        
      </Container>
    </div>
  );
};

export default Music;
