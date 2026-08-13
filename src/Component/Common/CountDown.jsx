import React, { useEffect, useState } from "react";
import { countDownDateAndTime } from "countdown-date-time";

const CountDown = () => {
  const conduct_date = "2026-12-18 00:00:00";
  const [count, setCount] = useState({});

  useEffect(() => {
    setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown);
    }, 1000);
  }, []);

  return (
    <div className=" flex items-center gap-6 ">
      <div>
        <h4 className=" text-[14px] font-medium ">Days</h4>
        <h2 className=" text-3xl font-bold "> {count.days} </h2>
      </div>
      <h2 className=" text-primary font-bold text-2xl  ">:</h2>
      <div className="">
        <h4 className=" text-[14px] font-medium ">Hours</h4>
        <h2 className=" text-3xl font-bold "> {count.hours} </h2>
      </div>
      <h2 className=" text-primary font-bold text-2xl  ">:</h2>
      <div className="">
        <h4 className=" text-[14px] font-medium ">Minutes</h4>
        <h2 className=" text-3xl font-bold "> {count.minutes} </h2>
      </div>
      <h2 className=" text-primary font-bold text-2xl  ">:</h2>
      <div className="">
        <h4 className=" text-[14px] font-medium ">Seconds</h4>
        <h2 className=" text-3xl font-bold "> {count.seconds} </h2>
      </div>
    </div>
  );
};

export default CountDown;
