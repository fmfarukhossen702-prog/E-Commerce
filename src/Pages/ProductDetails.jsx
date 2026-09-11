import React, { useEffect, useState } from "react";
import Container from "../Component/Common/Container";
import BreadCrumb from "../Component/Common/BreadCrumb";
import { Rate } from "antd";
import Btn from "../Component/Common/Btn";
import { CiHeart } from "react-icons/ci";
import delivary from "../assets/icon-delivery.png";
import returnn from "../assets/Icon-return.png";
import { useParams } from "react-router";
import SkeletonImage from "../Component/Common/SkeletonImage";
import TextSkeleton from "../Component/Common/TextSkeleton";
import { useDispatch } from "react-redux";
import { cardReducer } from "../Redux/DataStor";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [loding, setLoding] = useState(true);
  const { id } = useParams();
  // console.log(id)

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setProductImages(Array.isArray(data.images) ? data.images : []);
      })
      .catch(() => {
        setProductDetails({});
        setProductImages([]);
      })
      .finally(() => setLoding(false));
  }, [id]);

  // console.log(productDetails);
  return (
    <div className="pb-25">
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
              <div className=" bg-[#00000009] rounded-sm ">
                <img
                  className="w-125 h-150 "
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
                    <div className="w-5 h-5 rounded-full  border-2 flex justify-center items-center ">
                      <div
                        className="w-3 h-3 border rounded-full"
                        style={{ backgroundColor: "#A0BCE0" }}
                      ></div>
                    </div>
                    <div className=" h-5 w-5 rounded-full bg-[#E07575] "></div>
                  </div>
                </li>
                <li className=" flex gap-6  py-6">
                  <h3>Size :</h3>
                  <ul className=" flex gap-4 text-sm!  ">
                    <li className="w-8 h-8 rounded-sm border hover:bg-primary hover:text-white  border-[#00000069] flex justify-center items-center ">
                      {" "}
                      SM
                    </li>
                    <li className="w-8 h-8 rounded-sm border hover:bg-primary hover:text-white  border-[#00000069] flex justify-center items-center ">
                      {" "}
                      S
                    </li>
                    <li className="w-8 h-8 rounded-sm border hover:bg-primary hover:text-white  border-[#00000069] flex justify-center items-center ">
                      {" "}
                      M
                    </li>
                    <li className="w-8 h-8 rounded-sm border hover:bg-primary hover:text-white  border-[#00000069] flex justify-center items-center ">
                      {" "}
                      L
                    </li>
                    <li className="w-8 h-8 rounded-sm border hover:bg-primary hover:text-white  border-[#00000069] flex justify-center items-center ">
                      {" "}
                      XL
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className=" h-11! text-xl!  flex gap-4  ">
                <li className=" rounded-sm border border-[#00000069] flex ">
                  <div className="w-10 h-full text-lg flex justify-center items-center  ">
                    {" "}
                    -{" "}
                  </div>
                  <div className=" flex w-20 justify-center items-center border-x border-[#00000069] ">
                    2
                  </div>
                  <div className=" flex w-10 justify-center items-center ">
                    +
                  </div>
                </li>
                <li>
                  <Btn
                    onClick={() => dispatch(cardReducer(productDetails))}
                    className="h-11 flex justify-center items-center text-sm"
                  >
                    Buy Now
                  </Btn>
                </li>
                <li className=" h-10 w-10 rounded-sm border flex justify-center items-center  ">
                  <CiHeart className=" text-3xl " />
                </li>
              </ul>
              <div className="w-full rounded-sm border  border-[#00000069] py-6  mt-6 ">
                <div className="  pl-4 pr-13 flex gap-4 items-center pb-4 border-b border-[#00000069] ">
                  <div>
                    <img src={delivary} alt="" />
                  </div>
                  <div className=" font-medium space-y-2">
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
