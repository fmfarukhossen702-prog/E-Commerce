import React from "react";
import Container from "./Container";
import send from "../../assets/icon-send.png";
import googlePlay from '../../assets/GooglePlay.png'
import appStore from '../../assets/AppStore.png'
import { RiFacebookFill } from "react-icons/ri";
import img from '../../assets/icon-copyright.png'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=" pt-20 pb-6 bg-black text-white! ">
      <Container>
        <div className=" flex justify-between ">
          {/* one */}
          <div className=" w-54.25 ">
            <h3 className=" text-2xl font-bold font-Inter  ">Exclusive</h3>
            <h4 className=" text-xl font-medium my-6 ">Subscribe</h4>
            <p className=" mb-4  ">Get 10% off your first order</p>
            <div>
              {/* <input className=' w-full '  type="email" placeholder="Enter your email" /> */}

              <form className="  relative ">
                <div className="">
                  <input
                    type="email"
                    id="email"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full pl-3 pr-10 py-2.5 shadow-xs placeholder:text-body"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" right-3 absolute top-1/2 -translate-y-1/2  "
                >
                  <img src={send} alt />
                </button>
              </form>
            </div>
          </div>

          {/* two  */}
          <div className=" w-44.5 ">
            <h3 className=" mb-6 text-xl font-medium ">Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <div className=" my-4 ">
              <a href="">exclusive@gmail.com</a>
            </div>
            {/* <input type="number" placeholder="+88015-88888-9999" /> */}
            <select className=" outline-none cursor-pointer selectCss  bg-black " name="" id="">
              <option value="">+88015-88888-9999</option>
              <option value="">+88015-88888-1000</option>
              <option value="">+88015-88888-1001</option>
            </select>
          </div>

          {/* three  */}
          <div>
            <h3 className=" text-xl font-medium mb-6 ">Account</h3>
            <ul className=" space-y-4 ">
              <li className=" cursor-pointer " >My Account</li>
              <li>
                <button className=" cursor-pointer " >Login</button> / <button className=" cursor-pointer " >Register</button>
              </li>
              <li className=" cursor-pointer " >Cart </li>
              <li className=" cursor-pointer " >Wishlist </li>
              <li className=" cursor-pointer " >Shop </li>
            </ul>
          </div>

          {/* four  */}
          <div>
            <h3 className=" font-medium text-xl mb-6  ">Quick Link</h3>
            <ul className=" space-y-4 ">
              <li className=" cursor-pointer " >Privacy Policy</li>
              <li className=" cursor-pointer " >Terms Of Use</li>
              <li className=" cursor-pointer " >FAQ</li>
              <li className=" cursor-pointer " >Contact</li>
            </ul>
          </div>

          {/* five  */}
          <div className=" w-50 ">
            <h3 className=" font-medium text-xl mb-6 ">Download App</h3>
            <p className=" text-[12px] ">Save $3 with App New User Only</p>
            <div className="flex mt-2 mb-6 gap-1.5">
              <div className=" w-20 h-20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10330.450149114899!2d90.38498228385257!3d23.734335969340748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8954649cee5%3A0x3bdcd530be93b17a!2sBangladesh%20Medical%20University%20(BMU)!5e0!3m2!1sen!2sbd!4v1786907095044!5m2!1sen!2sbd"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"
                  className="h-full w-full cursor-pointer "
                ></iframe>
              </div>
              <div>
                <div className=" cursor-pointer " >
                  <img src={googlePlay} alt="" />
                </div>
                <div className=" cursor-pointer " >
                  <img src={appStore} alt="" />
                </div>
              </div>
            </div>
            <ul className=" flex  items-center text-2xl! gap-6">
              <li className=" cursor-pointer " >
                <RiFacebookFill />
              </li>
              <li className=" cursor-pointer " >
                <FaTwitter />
              </li>
              <li className=" cursor-pointer " >
                <FaInstagram />
              </li>
              <li className=" cursor-pointer " >
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-19 ">
          <div>
            <img src={img} alt="" />
          </div>
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
