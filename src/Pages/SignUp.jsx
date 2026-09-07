import React, { useState } from "react";
import Container from "../Component/Common/Container";
import banner from "../assets/SignUpBanner.png";
import Btn from "../Component/Common/Btn";
import iconGoogle from "../assets/IconGoogle.png";
import { NavLink } from "react-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRuleActive, setPasswordRuleActive] = useState(false);
  //  const [passwordShow, setPasswordShow] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  const passwordRule = {
    length: password.length >= 8,
    upperCase: /[A-Z]/.test(password),
    lowerCase: /[a-z]/.test(password),
    spacial: /[@$!%*?&.#]/.test(password),
    number: /\d/.test(password),
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError("Please enter your Email");
    } else {
      if (!emailRegex.test(email.trim())) {
        setEmailError("Enter a valid Email");
      } else {
        setEmailError("");
      }
    }
    if (!password.trim()) {
      setPasswordError("Please enter your Password");
      setPasswordRuleActive(false);
    } else {
      if (!passwordRegex.test(password)) {
        setPasswordError(
          "Please enter a valid password following the rules below.",
        );
        setPasswordRuleActive(true);
      } else {
        setPasswordError("");
        setPasswordRuleActive(false);
      }
    }
  };

  return (
    <div className=" py-25 ">
      <Container>
        <div className="flex gap-20 items-center ">
          <div className="w-[70%] h-195   ">
            <img src={banner} alt="" className="w-full h-full object-cover  " />
          </div>
          <div className="w-[30%]   pr-10  ">
            <h3 className=" text-2xl font-medium ">Create an account</h3>
            <p className=" mt-1 mb-8 text-[12px] "> Enter your details below</p>
            <form action="" className="space-y-3 mb-5 ">
              <input
                type="text"
                required
                placeholder="Name"
                className=" w-full px-1 mb-5 py-1 border-b border-[#000000ba] placeholder:text-[13px] "
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Phone Number"
                className="  placeholder:text-[13px]    w-full px-1 py-1 border-b border-[#000000ba]  "
              />
              <p className=" h-5 text-red-600 text-[12px] "> {emailError} </p>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className=" placeholder:text-[12px]    w-full px-1 py-1 border-b border-[#000000ba]  "
              />
              <p className=" h-9 text-red-600 text-[12px] "> {passwordError}</p>
              <div className="max-h-40 space-y-2 overflow-hidden">
                {passwordRuleActive && (
                  <ul className="text-[12px] pl-5 list-disc">
                    <li
                      className={
                        passwordRule.length >= 8
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list 8 charecter
                    </li>
                    <li
                      className={
                        passwordRule.number
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list a number
                    </li>
                    <li
                      className={
                        passwordRule.lowerCase
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list a lowercase
                    </li>
                    <li
                      className={
                        passwordRule.upperCase
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list a uppercase
                    </li>
                    <li
                      className={
                        passwordRule.spacial
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list a spacial charecter
                    </li>
                  </ul>
                )}
                 <Btn onClick={handleClick} className=" w-full">
                {" "}
                Create Account
              </Btn>
              </div>

             
            </form>
            <Btn className=" w-full bg-white flex gap-3 items-center justify-center text-black border whitespace-nowrap ">
              <div>
                <img src={iconGoogle} alt="" />
              </div>
              Sign up with Google
            </Btn>

            <div className=" mt-5 text-[13px] flex items-center justify-center gap-2 ">
              <p>Already have account?</p>
              <button className="font-semibold underline cursor-pointer ">
                {" "}
                <NavLink to="/login" end>
                  Log in
                </NavLink>{" "}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
