import Container from "../Component/Common/Container";
import BreadCrumb from "../Component/Common/BreadCrumb";
import { Rate } from "antd";
import Btn from "../Component/Common/Btn";
import delivary from "../assets/icon-delivery.png";
import returnn from "../assets/Icon-return.png";
import {  useNavigate, useParams } from "react-router";
import SkeletonImage from "../Component/Common/SkeletonImage";
import TextSkeleton from "../Component/Common/TextSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { cardReducer, wishlistReducer } from "../Redux/DataStor";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import FreeDelivery from "../Component/Common/FreeDelivery";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state part 
  const [color, setColor] = useState("color-1");
  const [size ,setSize] = useState("xl")
  const [qunt, setQunt] = useState(1);
  const [ freeDelivery , setFreeDelivery ] = useState(false)

  // dataStor theke state 
  const products = useSelector((state) => state.dataStor.products);
  const loding = useSelector((state) => state.dataStor.loding);
  const wishList = useSelector((state) => state.dataStor.wishlist);
 
  const productDetails = products.find((item) => item.id === Number(id));
  const productImages = Array.isArray(productDetails?.images)
    ? productDetails.images
    : [];


  if (!loding && !productDetails) {
    return (
      <Container>
        <BreadCrumb />
        <p>Product not found.</p>
      </Container>
    );
  }
 
  return (
    <div className="pb-25">
      <div
        onClick={() => setFreeDelivery(false)}
        className={` ${freeDelivery ? " fixed  top-0 left-0 z-50 flex justify-between items-center " : "hidden "} w-full h-screen bg-[#959393d2]  `}
      >
        <div className="w-170 h-125 mx-auto relative">
          <button className=" w-6 h-6 flex justify-center items-center text-sm font-bold absolute -top-5 -right-5 bg-[#ffffffd1] rounded-sm  cursor-pointer ">
            {" "}
            X
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className=" w-170 h-120 bg-[#fdfdfd49] py-12 px-6 rounded-md    mx-auto  "
          >
           <FreeDelivery/>
          </div>
        </div>
      </div>
      <Container>
        <BreadCrumb />
        <div className=" flex gap-17.5 ">
          {/* left  */}
          <div className="flex gap-7.5">
            {loding ? (
              <div className="space-y-4">
                <SkeletonImage className="h-34.5 w-42.5" />
                <SkeletonImage className="h-34.5 w-42.5" />
                <SkeletonImage className="h-34.5 w-42.5" />
              </div>
            ) : (
              <div className="space-y-4 ">
                {productImages.map((image) => {
                  return (
                    <img
                      key={image}
                      className="w-42.5 h-34.5 bg-[#00000009] rounded-sm "
                      src={image}
                    />
                  );
                })}
              </div>
            )}
            {loding ? (
              <div>
                <SkeletonImage className="h-150 w-125" />
              </div>
            ) : (
              <div
                className={` ${color === "color-1" && "bg-[#A0BCE0] "} ${color === "color-2" && "bg-[#E07575] "} w-125 h-150  rounded-sm relative  `}
              >
                <img
                  className={` ${size === "xl" && "w-full h-full"} ${size === "l" && " w-115 h-140 bg-[#23be8090] "} ${size === "m" && " w-100 h-120 bg-[#2823be84] "} ${size === "s" && " w-80 h-100 bg-[#be239781] "} ${size === "sm" && " w-60 h-70 bg-[#9fbe2377] "}  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-md `}
                  src={productDetails.thumbnail}
                  alt=""
                />
              </div>
            )}
          </div>

          {/* right  */}
          <div className=" w-100 ">
            {loding ? (
              <TextSkeleton />
            ) : (
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {productDetails.title}
                </h3>
                <ul className=" flex gap-3 items-center text-[14px] ">
                  <li>
                    <Rate
                      className="product-rating"
                      value={productDetails.rating}
                    />
                  </li>
                  <li>({productDetails?.reviews?.length || 0}) Reviews</li>
                  <li>|</li>
                  <li className=" text-green-500 ">
                    {productDetails.availabilityStatus}
                  </li>
                </ul>
                <h4 className=" mt-4 mb-4 text-2xl">
                  ${" "}
                  {Number(
                    productDetails.price -
                      (productDetails.price *
                        productDetails.discountPercentage) /
                        100,
                  ).toFixed(2)}
                </h4>
                <p className="text-sm pb-6 mb-6 border-b border-[#00000069] ">
                  {productDetails.description}
                </p>
              </div>
            )}

            <div>
              <ul className=" text-xl! ">
                <li className="flex items-center gap-6 text-xl ">
                  Colours :
                  <div className=" flex gap-4 ">
                    <div
                      onClick={() => setColor("color-1")}
                      className={` ${color === "color-1" ? " w-3 h-3 border-2" : "h-5 w-5"} w-5 h-5 rounded-full   flex justify-center items-center`}
                    >
                      <div className="w-full h-full  rounded-full bg-[#A0BCE0]  "></div>
                    </div>
                    <div
                      onClick={() => setColor("color-2")}
                      className={` ${color === "color-2" ? " w-3 h-3 border-2" : "h-5 w-5"} w-5 h-5 rounded-full   flex justify-center items-center`}
                    >
                      <div className="w-full h-full  rounded-full bg-[#E07575]  "></div>
                    </div>
                  </div>
                </li>
                <li className=" flex gap-6  py-6">
                  <h3>Size :</h3>
                  <ul className=" flex gap-4 text-sm!  ">
                    <li
                      onClick={() => setSize("sm")}
                      className={` ${size === "sm" && "bg-primary text-white border-none"}  w-8 h-8 rounded-sm border  border-[#00000069] flex justify-center items-center`}
                    >
                      {" "}
                      SM
                    </li>
                    <li
                      onClick={() => setSize("s")}
                      className={` ${size === "s" && "bg-primary text-white border-none"}  w-8 h-8 rounded-sm border  border-[#00000069] flex justify-center items-center`}
                    >
                      {" "}
                      S
                    </li>
                    <li
                      onClick={() => setSize("m")}
                      className={` ${size === "m" && "bg-primary text-white border-none"}  w-8 h-8 rounded-sm border  border-[#00000069] flex justify-center items-center`}
                    >
                      {" "}
                      M
                    </li>
                    <li
                      onClick={() => setSize("l")}
                      className={` ${size === "l" && "bg-primary text-white border-none"}  w-8 h-8 rounded-sm border  border-[#00000069] flex justify-center items-center`}
                    >
                      {" "}
                      L
                    </li>
                    <li
                      onClick={() => setSize("xl")}
                      className={` ${size === "xl" && "bg-primary text-white border-none"}  w-8 h-8 rounded-sm border  border-[#00000069] flex justify-center items-center`}
                    >
                      {" "}
                      XL
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className=" h-11! text-xl!  flex gap-4  ">
                <li className=" rounded-sm border border-[#00000069] flex ">
                  <div
                    onClick={() =>
                      setQunt((currentQunt) => Math.max(1, currentQunt - 1))
                    }
                    className="w-10 h-full text-lg flex justify-center items-center cursor-pointer"
                  >
                    {" "}
                    -{" "}
                  </div>
                  <div className=" flex w-20 justify-center items-center border-x border-[#00000069] ">
                    {qunt}
                  </div>
                  <div
                    onClick={() => setQunt((currentQunt) => currentQunt + 1)}
                    className="flex w-10 justify-center items-center cursor-pointer"
                  >
                    +
                  </div>
                </li>
                <li>
                  <Btn
                    onClick={() => {
                      if (!productDetails) returnn;
                      (dispatch(cardReducer({ ...productDetails, qunt })),
                        navigate("/cardItems"));
                    }}
                    className="h-11 flex justify-center items-center text-sm"
                  >
                    Buy Now
                  </Btn>
                </li>
                <li
                  onClick={() => {
                    if (productDetails) {
                      (dispatch(wishlistReducer(productDetails)),
                        navigate("/wishlist"));
                    }
                  }}
                  className=" h-10 w-10 rounded-sm border cursor-pointer flex justify-center items-center  "
                >
                  <FaHeart
                    className={` ${wishList.some((item) => item.id === productDetails?.id) ? "text-red-600" : " "} text-3xl`}
                  />
                </li>
              </ul>
              <div className="w-full rounded-sm border  border-[#00000069] py-6  mt-6 ">
                <div className="  pl-4 pr-13 flex gap-4 items-center pb-4 border-b border-[#00000069] ">
                  <div>
                    <img src={delivary} alt="" />
                  </div>
                  <div
                    onClick={() => setFreeDelivery(true)}
                    className=" font-medium cursor-pointer space-y-2"
                  >
                    <h3> Free Delivery</h3>
                    <p className=" text-[12px] underline ">
                      {" "}
                      Enter your postal code for Delivery Availability{" "}
                    </p>
                  </div>
                </div>
                <div className="  pl-4 pr-13 mt-4 flex gap-4 items-center ">
                  <div>
                    <img src={returnn} alt="" />
                  </div>
                  <div className=" font-medium space-y-2">
                    <h3> Return Delivery</h3>
                    <p className=" text-[12px]  ">
                      Free 30 Days Delivery Returns.{" "}
                      <span className=" underline">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
