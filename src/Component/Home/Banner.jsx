import React, { Component } from "react";
import Container from "../Common/Container";
import { IoIosArrowForward } from "react-icons/io";
import banner from "../../assets/banner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className='hidden'

      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className='hidden'
      onClick={onClick}
    />
  );
}

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className=" relative ">
        <ul className="flex  justify-center absolute bottom-10 left-1/2 -translate-x-1/2  ">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className=" w-3 h-3 rounded-full bg-[#808080] "> </div>
    ),
  };

  return (
    <div className=" bg-white">
      <Container>
        <div className=" flex  ">
          <div className=" w-[20%] border-r-[0.5px] border-[#0000005a] ">
            <ul className=" text-black space-y-4 mt-10 pb-10  ">
              <li className="flex w-full justify-between pr-2 items-center">
                <span>Woman’s Fashion</span> <IoIosArrowForward />
              </li>
              <li> Men’s Fashion</li>
              <li> Electronics</li>
              <li> Home & Lifestyle</li>
              <li> Medicine</li>
              <li> Sports & Outdoor</li>
              <li> Health & Beauty</li>
              <li> Groceries & </li>
            </ul>
          </div>
          <div className=" w-[80%] ml-13.5 mt-10 ">
            <Slider.default {...settings}>
              <div className="w-full">
                <img className="w-full  " src={banner} alt="" />
              </div>
              <div className="w-full">
                <img className="w-full  " src={banner} alt="" />
              </div>
              <div className="w-full">
                <img className="w-full  " src={banner} alt="" />
              </div>
              <div className="w-full">
                <img className="w-full  " src={banner} alt="" />
              </div>
            </Slider.default>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
