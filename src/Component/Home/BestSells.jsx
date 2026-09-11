import { useEffect, useRef, useState } from "react";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import Btn from "../Common/Btn";
import Card from "../Common/Card";


import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { filteredProductsReducer, productReducer } from "../../Redux/DataStor";

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
        <div className=" flex lg:flex-row flex-col gap-y-4 justify-between lg:items-end ">
          <SecHead title="This Month " heading="  Best Selling Products" />
          <Btn onClick={handleViewAll}>View All</Btn>
        </div>
       
          <div className="lg:mt-15 mt-8">
            <div ref={sliderContainerRef} className="slider-container">
              <SliderComponent className="best-sells-slider" {...settings}>
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
