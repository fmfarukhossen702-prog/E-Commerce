import { useEffect, useRef, useState } from "react";
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
  return <div />;
}

function SamplePrevArrow() {
  // const { } = props;
  return <div />;
}

const BestSells = () => {
  const sliderContainerRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;

    if (!sliderContainer) return undefined;

    const updateSlidesToShow = () => {
      const width = sliderContainer.clientWidth;

      setSlidesToShow(width < 570 ? 1 : width < 740 ? 2 : width < 990 ? 3 : 4);
    };

    updateSlidesToShow();

    const resizeObserver = new ResizeObserver(updateSlidesToShow);
    resizeObserver.observe(sliderContainer);

    return () => resizeObserver.disconnect();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
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
    customPaging: () => <div></div>,
  };

  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="lg:pt-17.5 lg:pb-35 py-8 bg-white">
      <Container>
        <div className=" flex lg:flex-row flex-col gap-y-4 justify-between lg:items-end ">
          <SecHead title="This Month " heading="  Best Selling Products" />
          <Btn onClick={() => setViewAll(!viewAll)}>
            {viewAll ? " Hidden " : "View All"}
          </Btn>
        </div>
        {viewAll ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 lg:mt-15 gap-y-4 ">
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
          </div>
        ) : (
          <div className="lg:mt-15 mt-8">
            <div ref={sliderContainerRef} className="slider-container">
              <SliderComponent className="best-sells-slider" {...settings}>
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
        )}
      </Container>
    </div>
  );
};

export default BestSells;
