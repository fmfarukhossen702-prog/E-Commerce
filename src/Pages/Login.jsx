import Container from "../Component/Common/Container";
import banner from "../assets/SignUpBanner.png";
import { NavLink } from "react-router";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordRuleActive, setPasswordRuleActive] = useState(false);

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
            <h3 className=" text-2xl font-medium ">Log in to Exclusive</h3>
            <p className=" mt-1 mb-8 text-[12px] "> Enter your details below</p>
            <form action="" className="space-y-5 mb-5 ">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Email or Phone Number"
                className="  placeholder:text-[13px]    w-full px-1 py-1 border-b border-[#000000ba]  "
              />
              <p className=" h-5 text-[13px] text-red-600 "> {emailError} </p>
              <div className=" relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordShow ? "text" : "password"}
                  required
                  placeholder="Password"
                  className=" placeholder:text-[13px]    w-full px-1 pr-12 py-1 border-b border-[#000000ba]  "
                />
                <div
                  onClick={() => setPasswordShow(!passwordShow)}
                  className=" absolute top-1/2 -translate-y-1/2 right-4 "
                >
                  {password &&
                    (passwordShow ? (
                      <FaRegEyeSlash className="" />
                    ) : (
                      <IoEyeOutline />
                    ))}
                </div>
              </div>
              <p className=" h-9 text-[12px] text-red-600 ">
                {" "}
                {passwordError}{" "}
              </p>
              <div className="max-h-42 spacey-3 ">
                {passwordRuleActive && (
                  <ul className=" pl-5 text-[12px] list-disc ">
                    <li
                      className={
                        passwordRule.length
                          ? " marker:text-green-600 "
                          : "marker:text-black"
                      }
                    >
                      At list 8 Characters
                    </li>
                    <li
                      className={
                        passwordRule.number
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list a Number
                    </li>
                    <li
                      className={
                        passwordRule.upperCase
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list a Uppercase
                    </li>
                    <li
                      className={
                        passwordRule.lowerCase
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list a Lowercase
                    </li>
                    <li
                      className={
                        passwordRule.spacial
                          ? "marker:text-green-600"
                          : "marker:text-black"
                      }
                    >
                      At list a Spacial Character
                    </li>
                  </ul>
                )}
                <div className=" flex justify-between mt-2 items-center ">
                  <button
                    onClick={handleClick}
                    className=" py-2  px-6 bg-primary cursor-pointer rounded-sm text-white "
                  >
                    Log In
                  </button>
                  <p className=" text-[12px] text-primary  cursor-pointer">
                    Forget Password?
                  </p>
                </div>
              </div>
            </form>

            <div className=" mt-5 text-[13px] flex items-center justify-center gap-2 ">
              <button className="font-semibold underline cursor-pointer ">
                <NavLink to="/signUp" end>
                  SignUp
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
