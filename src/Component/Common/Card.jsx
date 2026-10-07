import React from "react";
import { Rate } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cardReducer, removeWishlistReducer, wishlistReducer } from "../../Redux/DataStor";
import { toast, Bounce } from "react-toastify";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

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
  eyeIconCss,
  deletIcon,
  heartIconCss,
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
  const notify = (matchItem) => {
    matchItem.length == 0
      ? toast.success("Successfull add!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      : toast.warn("Allready added", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
  };

    const removeNotify = () => {
      toast.error("Remove Items", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    };

  const handleProduDetails = () => {
    if (itemData?.id) navigate(`/productDetails/${itemData.id}`);
  };

  const cardData = useSelector((state) => state.dataStor.card);
  const wishlistData = useSelector((state) => state.dataStor.wishlist);
  const isWishlisted = wishlistData.some((item) => item.id === itemData.id);

  const handleCardItem = (id) => {
    if (!itemData?.id) return;
    dispatch(cardReducer({ ...itemData, qunt: 1 }));
    let matchItem = cardData.filter((items) => items.id == id);
    notify(matchItem);
  };
  const handleHeardItem = (id) => {
    if (!itemData?.id) return;
    dispatch(wishlistReducer({ ...itemData, qunt: 1 }));
    let matchItem = wishlistData.filter((items) => items.id == id);
    notify(matchItem);
  }

  return (
    <div className=" w-full lg:w-67.5  group h-87.5 ">
      <div className=" relative  ">
        <div
          className={`h-62.5 object-contain w-full relative overflow-hidden ${bgCssImage} `}
        >
          <img
            onClick={handleProduDetails}
            src={image}
            alt=""
            className="w-full"
          />
          <button
            onClick={() => handleCardItem(id)}
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
          <div
            onClick={() => handleHeardItem(id)}
            className={` ${heartIconCss} cursor-pointer w-8.5 h-8.5 rounded-full text-xl bg-white flex items-center justify-center`}
          >
            <FaHeart
              className={isWishlisted ? "text-red-500 font-extrabold" : " text-[#0000002e]"}
            />
          </div>
          <div
            className={` ${deletIcon || "hidden"} cursor-pointer w-8.5 h-8.5 rounded-full text-xl text-[#161616]`}
          >
            <RiDeleteBin3Fill
              className="cursor-pointer"
              onClick={() => {
                (dispatch(removeWishlistReducer(id)), removeNotify());
              }}
            />
          </div>
          <div
            className={` ${eyeIconCss} cursor-pointer w-8.5 h-8.5 rounded-full  text-xl bg-white flex items-center justify-center `}
          >
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
