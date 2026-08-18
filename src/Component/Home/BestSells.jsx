import React from "react";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import Btn from "../Common/Btn";
import cart from "../../assets/Cart.png";
import Card from "../Common/Card";
import cart1 from "../../assets/Cart1.png";
import box from "../../assets/box.png";
import table from "../../assets/table.png";
import Slider from "react-slick";

const SliderComponent = Slider?.default ?? Slider;
function SampleNextArrow() {
  // const { } = props;
  return (
    <div/>
  );
}

function SamplePrevArrow() {
  // const { } = props;
  return (
    <div />
  );
}

const BestSells = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // speed: 40000,
    // autoplaySpeed: 200,
    // cssEase: "linear",

    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <di></di>,
  };

  return (
    <div className="pt-17.5 pb-35 bg-white">
      <Container>
        <div className=" flex justify-between items-end ">
          <SecHead title="This Month " heading="  Best Selling Products" />
          <Btn> View All</Btn>
        </div>

        <div className="mt-15">
          <div className="slider-container">
            <SliderComponent {...settings}>
              {/* first  */}
              <div>
                <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={cart}
                  title="The north coat"
                  currentPrice="260"
                  regularPrice="360"
                  rating={5}
                  review="65"
                />
              </div>
              {/* secend  */}
              <div>
                <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={cart1}
                  title="Gucci duffle bag"
                  currentPrice="960"
                  regularPrice="1160"
                  rating={4.4}
                  review="65"
                />
              </div>
              {/* three  */}
              <div>
                <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={box}
                  title="RGB liquid CPU Cooler"
                  currentPrice="170"
                  regularPrice="260"
                  rating={3.4}
                  review="65"
                />
              </div>
              {/* four  */}
              <div>
                <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={table}
                  title="Small BookSelf"
                  currentPrice="360"
                  regularPrice="520"
                  rating={2.6}
                  review="65"
                />
              </div>
              {/* secend  */}
              <div>
                <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={cart1}
                  title="Gucci duffle bag"
                  currentPrice="960"
                  regularPrice="1160"
                  rating={4.4}
                  review="65"
                />
              </div>
              {/* three  */}
              <div>
                <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={box}
                  title="RGB liquid CPU Cooler"
                  currentPrice="170"
                  regularPrice="260"
                  rating={3.4}
                  review="65"
                />
              </div>
            </SliderComponent>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSells;
