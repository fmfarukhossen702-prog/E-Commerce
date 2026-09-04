import React, { Component } from "react";
import SecHead from "./SecHead";
import Container from "../Common/Container";
import CountDown from "../Common/CountDown";
import Card from "../Common/Card";
import frame from "../../assets/Frame570.png";
import keyBoard from "../../assets/keyBoard.png";
import tv from "../../assets/tv.png";
import chair from "../../assets/chair.png";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Btn from "../Common/Btn";


function SampleNextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hidden cursor-pointer absolute -top-21.5 right-0 z-10 w-11 h-11 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center  "
    >
      <FaArrowRight />
    </button>
  );
}

function SamplePrevArrow({onClick}) {
  return (
    <button
      onClick={onClick}
      className="  cursor-pointer z-10 absolute -top-21.5 right-13  w-11 h-11 bg-[#F5F5F5] rounded-full hidden lg:flex justify-center items-center  "
    >
      <FaArrowLeftLong />
    </button>
  );
}

const SliderComponent = Slider?.default ?? Slider;


const FlashSales = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    row: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: (dots) => (
    //   <div>
    //     <ul> {dots} </ul>
    //   </div>
    // ),
    // customPaging: () => <div></div>,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" lg:pt-37.5 pt-8 lg:py-0 lg:pb-20 bg-white ">
      <Container>
        <div className=" flex flex-col lg:flex-row  lg:items-end gap-6 lg:gap-22 ">
          <SecHead title="Today’s" heading="Flash Sales" />
          <CountDown />
        </div>

        <div className="  w-full flashSales  my-10">
          <SliderComponent className="w-full  " {...settings}>
            <div>
              <Card
                image={frame}
                discount="40"
                title="HAVIT HV-G92 Gamepad"
                currentPrice="120"
                regularPrice="160"
                rating={5}
                review="88"
              />
            </div>
            <div>
              <Card
                image={keyBoard}
                discount="35%"
                title="AK-900 Wired Keyboard"
                currentPrice="960"
                regularPrice="1160"
                rating={4}
                review="75"
              />
            </div>
            <div>
              <Card
                image={tv}
                discount="30"
                title="IPS LCD Gaming Monitor"
                currentPrice="370"
                regularPrice="400"
                rating={5}
                review="99"
              />
            </div>
            <div>
              <Card
                image={chair}
                discount="25"
                title="S-Series Comfort Chair "
                currentPrice="375"
                regularPrice="400"
                rating={4.7}
                review="99"
              />
            </div>
            <div>
              <Card
                image={tv}
                discount="30"
                title="IPS LCD Gaming Monitor"
                currentPrice="370"
                regularPrice="400"
                rating={5}
                review="99"
              />
            </div>
            <div>
              <Card
                image={chair}
                discount="25"
                title="S-Series Comfort Chair "
                currentPrice="375"
                regularPrice="400"
                rating={4.7}
                review="99"
              />
            </div>
            <div>
              <Card
                image={chair}
                discount="25"
                title="S-Series Comfort Chair "
                currentPrice="375"
                regularPrice="400"
                rating={4.7}
                review="99"
              />
            </div>
            <div>
              <Card
                image={tv}
                discount="30"
                title="IPS LCD Gaming Monitor"
                currentPrice="370"
                regularPrice="400"
                rating={5}
                review="99"
              />
            </div>
            <div>
              <Card
                image={chair}
                discount="25"
                title="S-Series Comfort Chair "
                currentPrice="375"
                regularPrice="400"
                rating={4.7}
                review="99"
              />
            </div>
          </SliderComponent>
        </div>
        <div className=" text-center lg:pb-18 pb-8 border-b-[0.5px] border-[#00000061] ">
          <Btn> View All Products</Btn>
        </div>
      </Container>
    </div>
  );
};

export default FlashSales;
