import React from "react";
import Slider from "react-slick";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import Card from ".././Common/Card";
import img1 from "../../assets/Cart4.png";
import camera from "../../assets/camera.png";
import laptop from "../../assets/laptop.png";
import cart from "../../assets/Cart.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const SliderComponent = Slider?.default ?? Slider;


function SampleNextArrow({ onClick }) {
  return (
    <button
      className="w-11.5 h-11.5 absolute -top-20 right-0 rounded-full  bg-[#F5F5F5] flex justify-center items-center "
      onClick={onClick}
    >
      <FaArrowRightLong />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button
      className="w-11.5 h-11.5 absolute -top-20 right-15  rounded-full bg-[#F5F5F5] flex justify-center items-center  "
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </button>
  );
}

const OurProduct = () => {

     const settings = {
      //     className: "center  ",
      //  centerMode: true,
       infinite: true,
       centerPadding: "0px",
       slidesToShow: 2,
       speed: 500,
       rows: 2,
       slidesPerRow: 2,
       nextArrow: <SampleNextArrow />,
       prevArrow: <SamplePrevArrow />,
     };

  return (
    <div className=" pt-17.5 pb-15 bg-white  ">
      <Container>
        <SecHead title="Our Products " heading="Explore Our Products" />
        <div className="mt-10  ">
          <SliderComponent className="w-full  " {...settings}>
            <div className="my-2 ">
              <Card
                image={img1}
                disCountCss="hidden"
                title="Breed Dry Dog Food"
                currentPrice="$100"
                rating={3}
                review="(35)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={camera}
                disCountCss="hidden"
                title="CANON EOS DSLR Camera"
                currentPrice="$360"
                rating={4}
                review="(95)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={laptop}
                disCountCss="hidden"
                title="ASUS FHD Gaming Laptop"
                currentPrice="$700"
                rating={5}
                review="(325)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={cart}
                disCountCss="hidden"
                title="Breed Dry Dog Food"
                currentPrice="$500"
                rating={3.8}
                review="(145)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            {/* secend */}
            <div className="my-2 ">
              <Card
                image={img1}
                disCountCss="hidden"
                title="Breed Dry Dog Food"
                currentPrice="$100"
                rating={3}
                review="(35)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={camera}
                disCountCss="hidden"
                title="CANON EOS DSLR Camera"
                currentPrice="$360"
                rating={4}
                review="(95)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={laptop}
                disCountCss="hidden"
                title="ASUS FHD Gaming Laptop"
                currentPrice="$700"
                rating={5}
                review="(325)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={cart}
                disCountCss="hidden"
                title="Breed Dry Dog Food"
                currentPrice="$500"
                rating={3.8}
                review="(145)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            {/* three  */}
            <div className="my-2 ">
              <Card
                image={img1}
                disCountCss="hidden"
                title="Breed Dry Dog Food"
                currentPrice="$100"
                rating={3}
                review="(35)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={camera}
                disCountCss="hidden"
                title="CANON EOS DSLR Camera"
                currentPrice="$360"
                rating={4}
                review="(95)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={laptop}
                disCountCss="hidden"
                title="ASUS FHD Gaming Laptop"
                currentPrice="$700"
                rating={5}
                review="(325)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
            <div className="my-2 ">
              <Card
                image={cart}
                disCountCss="hidden"
                title="Breed Dry Dog Food"
                currentPrice="$500"
                rating={3.8}
                review="(145)"
                priceRatingCss=" flex gap-2 items-center space-y-0 "
              />
            </div>
          </SliderComponent>
        </div>
      </Container>
    </div>
  );
};

export default OurProduct;
