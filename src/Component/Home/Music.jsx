import { useEffect, useState } from "react";
import music from "../../assets/music-box.png";
import Container from "../Common/Container";
import Btn from "../Common/Btn";
import { countDownDateAndTime } from "countdown-date-time";

const Music = () => {
  const conduct_date = "2026-09-25 17:00:00";
  const [count, setCount] = useState({});

  useEffect(() => {
    setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown);
    }, 1000);
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-8 sm:py-16 lg:py-25"
      style={{ backgroundImage: `url(${music})` }}
    >
      <Container>
        <div className="grid min-h-105 grid-cols-1 items-center lg:grid-cols-2">
          <div className="max-w-xl">
            <h6 className="text-[12px] text-[#00FF66]">Categories</h6>
            <h2 className="w-full max-w-xl py-6 text-3xl font-medium leading-tight text-white sm:py-8 sm:text-4xl lg:text-5xl">
              Enhance Your Music Experience
            </h2>
            <div className="flex w-full flex-nowrap gap-2 sm:gap-2 lg:gap-6">
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full bg-white text-black lg:h-15.5 lg:w-15.5">
                <h4 className="text-[12px] font-bold lg:text-[14px]">
                  {count.days}
                </h4>
                <h5 className="text-[9px] lg:text-[12px]">Days</h5>
              </div>
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full bg-white text-black lg:h-15.5 lg:w-15.5">
                <h4 className="text-[12px] font-bold lg:text-[14px]">
                  {count.hours}
                </h4>
                <h5 className="text-[9px] lg:text-[12px]">Hours</h5>
              </div>
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full bg-white text-black lg:h-15.5 lg:w-15.5">
                <h4 className="text-[12px] font-bold lg:text-[14px]">
                  {count.minutes}
                </h4>
                <h5 className="text-[9px] lg:text-[12px]">Minutes</h5>
              </div>
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full bg-white text-black lg:h-15.5 lg:w-15.5">
                <h4 className="text-[12px] font-bold lg:text-[14px]">
                  {count.seconds}
                </h4>
                <h5 className="text-[9px] lg:text-[12px]">Seconds</h5>
              </div>
            </div>
            <Btn className="mt-8 bg-[#00FF66]! text-black! sm:mt-10">
              Buy Now!
            </Btn>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Music;
