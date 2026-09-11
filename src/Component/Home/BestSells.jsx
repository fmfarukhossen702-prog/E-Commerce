import { useEffect, useRef, useState } from "react";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import Btn from "../Common/Btn";
import Card from "../Common/Card";


import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { filteredProductsReducer, productReducer } from "../../Redux/DataStor";

const SliderComponent = Slider?.default ?? Slider;
function SampleNextArrow({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Next products"
      onClick={onClick}
      className="flex cursor-pointer absolute -top-21.5 right-0 z-10 w-11 h-11 bg-[#F5F5F5] rounded-full justify-center items-center"
    >
      <FaArrowRight />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Previous products"
      onClick={onClick}
      className="flex cursor-pointer absolute -top-21.5 right-13 z-10 w-11 h-11 bg-[#F5F5F5] rounded-full justify-center items-center"
    >
      <FaArrowLeftLong />
    </button>
  );
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
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 8,
    waitForAnimate: false,
    draggable: true,
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.dataStor.products);

  const handleViewAll = () => {
    dispatch(productReducer(products));
    dispatch(filteredProductsReducer([]));
    navigate("/shop");
  };

  return (
    <div className="lg:pt-17.5 lg:pb-35 py-8 bg-white">
      <Container>
        <div className=" flex  lg:flex-row flex-col gap-y-4 justify-between lg:items-end ">
          <SecHead title="This Month " heading="  Best Selling Products" />
          <Btn onClick={handleViewAll}>View All</Btn>
        </div>
       
          <div className="lg:mt-25 mt-8">
            <div ref={sliderContainerRef} className="slider-container w-full touch-pan-y">
              <SliderComponent className="best-sells-slider w-full" {...settings}>
                {Array.isArray(products) && products.map((items, index) => {
                    return (
                      <div key={items?.id ?? index}>
                        <Card
                          id={items.id}
                          productDetails={items}
                          discount={items.discountPercentage}
                          currentPrice={
                            items.price -
                            (items.price * items.discountPercentage) / 100
                          }
                          title={items.title}
                          image={items.thumbnail}
                          review={items?.reviews?.length || 0}
                          regularPrice={items.price}
                          rating={items.rating}
                        />
                      </div>
                    );
                  })}
              
              </SliderComponent>
            </div>
          </div>

      </Container>
    </div>
  );
};

export default BestSells;
