import React from "react";
import { Rate } from "antd";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { cardReducer } from "../../Redux/DataStor";

const Card = ({
  discount,
  image,
  title,
  currentPrice,
  regularPrice,
  rating,
  review,
  AddToCardCss,
  disCountCss,
  priceRatingCss,
  regularPriceCss,
  bgCssImage,
  id,
  productDetails,
}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const itemData = productDetails ?? {
    id,
    title,
    thumbnail: image,
    price: Number(regularPrice ?? currentPrice ?? 0),
    discountPercentage: Number(discount ?? 0),
    brand: title,
    rating,
    reviews: [],
  };

  const handleProduDetails = () => {
    if (itemData?.id) navigate(`/productDetails/${itemData.id}`);
  };

  const handleCardItem = () => {
    if (!itemData?.id) return;
    dispatch(cardReducer(itemData));
  };

  return (
    <div
  
      className=" w-full lg:w-67.5  group h-87.5 "
    >
      <div className=" relative  ">
        <div
          className={`h-62.5 object-contain w-full relative overflow-hidden ${bgCssImage} `}
        >
          <img onClick={handleProduDetails}  src={image} alt="" className="w-full" />
          <button onClick={handleCardItem}
            className={` ${AddToCardCss} w-full py-2 cursor-pointer bg-black rounded-bl-sm rounded-br-sm rounded-tr-xs rounded-tl-xs  absolute left-0 bottom-0 translate-y-full   duration-500 ease-in group-hover:translate-y-0  text-center text-white `}
          >
            Add To Cart
          </button>
        </div>
        <div
          className={` ${disCountCss}  w-13.75 h-6.5 rounded-sm absolute top-3 left-3 bg-primary flex items-center justify-center text-[12px] `}
        >
          {/* discount here  */}-{discount}%
        </div>
        <div className="absolute top-3 right-3 space-y-2.5 ">
          {/* Heart icon add  */}
          <div className=" cursor-pointer w-8.5 h-8.5 rounded-full text-xl bg-white flex items-center justify-center  ">
            <CiHeart />
          </div>
          <div className=" cursor-pointer w-8.5 h-8.5 rounded-full  text-xl bg-white flex items-center justify-center  ">
            <IoEyeOutline />
          </div>
        </div>
      </div>

      <h3 className=" font-medium pt-4 pb-2"> {title} </h3>
      <div className={`${priceRatingCss} space-y-2`}>
        <div className=" font-medium flex gap-4 items-center    ">
          <h5 className="text-primary"> ${Number(currentPrice).toFixed(2)} </h5>
          <h5 className={` line-through text-[#00000060] ${regularPriceCss} `}>
            ${regularPrice}
          </h5>
        </div>
        <div className=" font-medium flex gap-4 items-center">
          <Rate allowHalf value={rating} />
          <h5 className="text-sm text-[#00000060]"> ({review}) </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
