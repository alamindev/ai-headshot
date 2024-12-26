"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReviewCard from "./Generate/ReviewCard";
const PopupForm = ({ isOpen, onClose, storageData = true }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({}); // To store validation errors
  const router = useRouter();
  const validateInputs = () => {
    const newErrors = {};

    // Username validation

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validateInputs();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Save data to localStorage
      localStorage.setItem("userData", JSON.stringify({ email }));
      router.push("/generate");
      setTimeout(() => {
        onClose();
      }, 3000); // Close the modal
    }
  };

  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="w-full   fixed inset-0 h-full z-[9900] bg-white  max-h-screen overflow-y-auto ">
      <div className="">
        <button
          onClick={onClose}
          type="button"
          className=" top-4 right-4 absolute"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-x"
            viewBox="0 0 24 24"
          >
            <path d="M18 6 6 18M6 6l12 12"></path>
          </svg>
        </button>
        <div className="grid grid-cols-1 max-xl:gap-12 xl:grid-cols-12 ">
          <div className="order-2 xl:order-1 xl:col-span-7 bg-orange-light px-5 md:pl-20 md:pr-24 min-h-screen py-3 pt-14">
            <h3 className="text-left xl:block hidden font-bold text-5xl leading-tight pb-4">
              Get your headshots in{" "}
              <span className="text-primary">minutes</span>, <br /> not days
            </h3>
            <Image
              src={"/images/login-img.png"}
              alt="trust"
              className="w-full"
              width={600}
              height={500}
            />
            <ReviewCard />
          </div>
          <div className="order-1 xl:order-2 max-xl  xl:col-span-4 xl:pl-10 border-l border-gray-200 flex items-center">
            {/* Email Input */}

            <div className="max-w-full max-xl:py-6 max-md:px-5 xl:w-[400px] mx-auto">
              <h1 className="pb-6 md:hidden block ">
                {" "}
                <Link href={"#"} className="font-bold text-black text-2xl">
                  HeadshotAI
                </Link>
              </h1>
              <h3 className="text-left  font-bold text-3xl xl:text-5xl xl:hidden leading-tight max-md:pt-4 pb-8 md:pb-4">
                Get your headshots in{" "}
                <span className="text-primary">minutes</span>, not days
              </h3>
              <h1 className="pb-6 md:block hidden ">
                {" "}
                <Link href={"#"} className="font-bold text-black text-2xl">
                  HeadshotAI
                </Link>
              </h1>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-solid  px-4 py-3 pr-12 text-base leading-[140%] outline-none  transition-all duration-150  focus:outline-none foucs:ring-0 focus:border-primary border-gray-200 bg-white"
                    placeholder="Type your email address"
                  />
                  <svg
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="16"
                    fill="none"
                    viewBox="0 0 21 16"
                  >
                    <path
                      fill="#F97315"
                      d="M2.3 16q-.824 0-1.412-.588A1.93 1.93 0 0 1 .3 14V2q0-.824.588-1.412A1.93 1.93 0 0 1 2.3 0h16q.825 0 1.412.588.588.587.588 1.412v12q0 .825-.588 1.412A1.93 1.93 0 0 1 18.3 16zm8-7-8-5v10h16V4zm0-2 8-5h-16zm-8-3V2v12z"
                    ></path>
                  </svg>
                </div>

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <button
                onClick={handleSave}
                className="px-4 py-3 bg-primary font-semibold w-full text-white rounded-lg hover:bg-primary/90"
              >
                Continue With Email
              </button>
              <div class="mt-5 w-full text-[#646664] max-w-[460px] text-xs leading-relaxed text-darkGrayNew md:text-sm">
                New accounts are subject to our&nbsp;
                <span class="   ">Terms</span>
                &nbsp;and&nbsp;
                <span class="  ">Privacy Policy</span>.
              </div>
              <div class="mt-8 flex w-full max-w-[460px] flex-col items-start justify-start gap-2 text-[13px] font-bold leading-5 tracking-wide text-[#646664]">
                <div class="flex items-center gap-2">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.80005 7.5V6.5C8.80005 4.567 10.3671 3 12.3 3V3C14.233 3 15.8 4.567 15.8 6.5V7.5"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M5.04931 9.8141C5.13979 8.96656 5.92077 8.29883 6.89878 8.22578C10.919 7.92549 13.7104 7.92461 17.6984 8.22393C18.6812 8.29769 19.4632 8.97213 19.5502 9.82416C19.9012 13.2631 19.8688 15.6912 19.5378 19.1589C19.4556 20.0204 18.6683 20.7066 17.6748 20.7796C13.6751 21.0736 10.887 21.0729 6.93828 20.781C5.94245 20.7074 5.15515 20.0176 5.0738 19.1539C4.75052 15.7212 4.67857 13.2871 5.04931 9.8141Z"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M12.3 15.75C13.4046 15.75 14.3 14.8546 14.3 13.75C14.3 12.6454 13.4046 11.75 12.3 11.75C11.1955 11.75 10.3 12.6454 10.3 13.75C10.3 14.8546 11.1955 15.75 12.3 15.75ZM12.3 15.75V17.25"
                      stroke="url(#paint0_linear_3791_32401)"
                      stroke-width="1.5"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_3791_32401"
                        x1="12.3"
                        y1="11.75"
                        x2="12.3"
                        y2="17.25"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#00B060"></stop>
                        <stop offset="1" stop-color="#009753"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Security built for Fortune 500 companies</p>
                </div>
                <div class="flex items-center gap-2">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.38389 6.29424C5.56343 6.16477 5.77598 6.09383 5.98902 6.03377C8.06607 5.44822 10.0364 3.97228 10.6615 3.4745C10.7996 3.3645 10.9424 3.26106 11.1056 3.19361C11.7289 2.93596 12.4286 2.93513 13.0536 3.19313C13.1759 3.24362 13.2864 3.31395 13.395 3.38952C14.0306 3.83174 16.4396 5.44532 18.5973 6.05941C18.7801 6.11143 18.962 6.17175 19.121 6.27588C19.8507 6.75386 20.3 7.57802 20.3 8.47134V11.6308C20.3 14.5155 18.8333 17.1968 16.4187 18.7258L13.4549 20.6026C12.5948 21.1472 11.4996 21.1309 10.6557 20.5609L7.97736 18.7518C5.67998 17.2001 4.30005 14.5877 4.30005 11.7903V8.42418C4.30005 7.57177 4.7094 6.78061 5.38389 6.29424Z"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M9.30005 11.9752L11.1819 13.9499C11.2449 14.016 11.3561 14.0168 11.4202 13.9515L15.3 10"
                      stroke="url(#paint0_linear_3791_32404)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_3791_32404"
                        x1="12.3"
                        y1="10"
                        x2="12.3"
                        y2="14"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#00B060"></stop>
                        <stop offset="1" stop-color="#009753"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>100% Money Back Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
