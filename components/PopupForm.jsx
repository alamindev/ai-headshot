"use client";

import Image from "next/image";
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
      }, 500); // Close the modal
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
          <div className="xl:col-span-7 bg-orange-light pl-20 pr-24 min-h-screen py-3 pt-14">
            <h3 className="text-left font-bold text-5xl leading-tight pb-4">
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
          <div className="xl:col-span-4 xl:pl-10 border-l border-gray-200 flex items-center">
            {/* Email Input */}
            <div className="max-w-full w-[400px] mx-auto">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
