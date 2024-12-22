import Image from "next/image";
import { useState } from "react";
import ArrowLeft from "../Svgs/ArrowLeft";
import Camera from "../Svgs/Camera";
import EmbeddedCheckout from "./EmbeddedCheckout";
import PhotoDisplay from "./PhotoDisplay";
import PhotoRequirement from "./PhotoRequirement";
import PhotoRestrictions from "./PhotoRestrictions";
import PhotoUpload from "./PhotoUpload";
import PricingTable from "./PriceTable";
import PromoPopup from "./PromoPopup";
import ReviewCard from "./ReviewCard";
import StepOption from "./StepOption";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export default function StepBuilder({
  steps,
  handleOptionSelect,
  handleNextStep,
  currentStep,
  selectedOptions,
  setIsStepStart,
  setCurrentStep,
}) {
  const [photos, setPhotos] = useState([]);
  const maxPhotos = 10; // Maximum allowed photos

  const [selected, setSelected] = useState(null);
  const [price, setPrice] = useState(0);

  // Handle new uploads
  const handleUploadComplete = (newPhotos) => {
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  // Handle photo deletion
  const handleDeletePhoto = (id) => {
    setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
  };

  const handleStepImageUpload = () => {
    if (photos.length >= 6) {
      handleNextStep();
    } else {
      toast.error("You must upload 6 photos to go next step!");
    }
  };
  const handleFinalStep = () => {
    if (selected !== null && price !== 0) {
      handleNextStep();
    } else {
      toast.error("Please Select a Product Tier");
    }
  };

  const progress = (photos.length / maxPhotos) * 100;

  return (
    <div>
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="max-w-[1280px] mx-auto pb-20">
            <div className="flex justify-start">
              {currentStep === 0 ? (
                <button
                  type="button"
                  onClick={() => (setIsStepStart(false), setCurrentStep(0))}
                  className="flex gap-1.5 items-center rounded-md border text-neutral-700 border-neutral-300 transition-all hover:bg-neutral-200 hover:border-neutral-200 shadow pl-2 pr-4 py-2"
                >
                  <ArrowLeft />
                  <span> Back</span>
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  type="button"
                  className="flex gap-1.5 items-center rounded-md border text-neutral-700 border-neutral-300 transition-all hover:bg-neutral-200 hover:border-neutral-200 shadow pl-2 pr-4 py-2"
                >
                  <ArrowLeft />
                  <span> Back</span>
                </button>
              )}
            </div>
            {currentStep <= 3 && (
              <div>
                <div className="flex gap-4 items-center justify-center flex-col pt-8 sm:pt-12 pb-8 sm:pb-10">
                  <div className="size-7 text-base font-semibold flex justify-center items-center text-white rounded-full bg-primary">
                    {currentStep + 1}
                  </div>
                  <h2 className="font-bold text-3xl md:text-5xl text-gray-900 sm:pb-2">
                    {steps[currentStep].question}
                  </h2>
                  <p className="text-sm sm:text-lg text-gray-900 font-medium text-center  mx-auto">
                    Transform your existing photos into realistic AI headshots
                    for your resume, LinkedIn, and social media profiles.
                  </p>
                </div>
                <div
                  className={`${
                    currentStep === 2 || currentStep === 3
                      ? currentStep === 3
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] mx-auto"
                        : "grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-[650px] mx-auto"
                      : "flex items-center gap-5 flex-wrap justify-center"
                  }`}
                >
                  {steps[currentStep].options.map((option, index) => (
                    <StepOption
                      key={index}
                      option={option}
                      onSelect={handleOptionSelect}
                      isSelected={
                        selectedOptions[steps[currentStep].question]?.label ===
                        option.label
                      }
                    />
                  ))}
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div className="py-12 flex flex-col lg:flex-row gap-10 items-start">
                <div className="w-full lg:w-[300px] xl:w-[415px] shrink-0">
                  <div className="flex justify-start mb-4">
                    <Camera />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 text-left">
                    Upload photos
                  </h2>
                  <p className="text-gray-600 text-base xl:text-lg text-left mt-2 pb-5 leading-relaxed">
                    Now the fun begins! Select at least{" "}
                    <strong>6 of your best photos</strong>
                    with at least{" "}
                    <strong>1 photo taken from the waist up</strong>. Good
                    photos will result in amazing headshots!
                  </p>
                  <PhotoUpload
                    onUploadComplete={handleUploadComplete}
                    uploadedCount={photos.length}
                    maxPhotos={maxPhotos}
                  />
                </div>
                <div className="space-y-8 w-full ">
                  <div className="w-full">
                    <div className="group relative">
                      <div className="group-hover:visible group-hover:opacity-100 opacity-0 invisible  absolute w-[250px] left-1/2 bottom-full mb-4 transform -translate-x-1/2 flex items-center group">
                        <div className="relative  bg-white border border-gray-200 shadow-md rounded-lg px-3 py-2 text-xs font-medium text-gray-700">
                          <div className="flex items-center pb-2">
                            <span className="text-orange-500 mr-1">⚠</span>
                            Minimum
                          </div>
                          <p>
                            You must upload at least <strong>6 photos</strong>{" "}
                            to create your headshots
                          </p>

                          <div className="absolute top-full -mt-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm mb-2 text-gray-600">
                        <span className="text-base font-medium">
                          Uploaded Images
                        </span>
                        <span>
                          {photos.length} / {maxPhotos}
                        </span>
                      </div>
                      <div className="relative">
                        <div className="absolute top-1/2 -ml-1 -mt-4  left-[60%] transform -translate-y-1/2 text-sm text-gray-700">
                          6
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
                          <div className="absolute top-0 left-[60%]  h-2 w-[1px] bg-black rounded-full"></div>
                          <div
                            className="absolute h-full top-0 left-0   bg-primary"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <PhotoDisplay
                      photos={photos}
                      onDelete={handleDeletePhoto}
                    />
                    <div>
                      <PhotoRequirement />
                      <PhotoRestrictions />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 5 && (
              <>
                <div className="w-full px-4 fixed inset-0 h-full z-[99] bg-white  max-h-screen overflow-y-auto pb-14">
                  <div className="py-12 max-w-[1400px] mx-auto ">
                    <button
                      onClick={() => setCurrentStep(4)}
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
                      <div className="xl:col-span-8 xl:pr-10">
                        <PricingTable
                          selected={selected}
                          setSelected={setSelected}
                          setPrice={setPrice}
                        />
                      </div>
                      <div className="xl:col-span-4 xl:pl-10 border-l border-gray-200">
                        <h3 className="text-center font-bold text-3xl">
                          25 million+
                        </h3>
                        <p className="text-xl text-center font-medium">
                          AI headshots for happy customers
                        </p>
                        <div className="pt-4">
                          <Image
                            src={"/images/steps/trust-people.png"}
                            alt="trust"
                            width={600}
                            height={500}
                          />
                        </div>
                        <ReviewCard />
                      </div>
                    </div>
                  </div>
                </div>
                <PromoPopup />
              </>
            )}
            {currentStep === 6 && (
              <>
                <div className="w-full px-4 fixed inset-0 h-full z-[9900] bg-white  max-h-screen overflow-y-auto pb-14">
                  <div className="py-12 max-w-[1600px] mx-auto ">
                    <button
                      onClick={() => setCurrentStep(5)}
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
                      <div className="xl:col-span-8 xl:pr-10 pt-12">
                        <EmbeddedCheckout price={price} />
                      </div>
                      <div className="xl:col-span-4 xl:pl-10 border-l border-gray-200">
                        <h3 className="text-center font-bold text-3xl">
                          25 million+
                        </h3>
                        <p className="text-xl text-center font-medium">
                          AI headshots for happy customers
                        </p>
                        <div className="pt-4">
                          <Image
                            src={"/images/steps/trust-people.png"}
                            alt="trust"
                            width={600}
                            height={500}
                          />
                        </div>
                        <ReviewCard />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="w-full bg-white fixed bottom-0 py-6 z-[999] shadow-3xl">
        <div className="max-w-[750px] mx-auto space-y-4">
          <div className="flex justify-center ">
            {currentStep === 4 ? (
              <button
                type="button"
                onClick={handleStepImageUpload}
                className="w-[320px] py-3 text-base rounded-2xl hover:bg-opacity-85 bg-primary text-white font-medium inline-block"
              >
                Next Step
              </button>
            ) : currentStep === 5 ? (
              <button
                type="button"
                onClick={handleFinalStep}
                className="w-[320px] py-3 text-base rounded-2xl hover:bg-opacity-85 bg-primary text-white font-medium inline-block"
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextStep}
                className="w-[320px] py-3 text-base rounded-2xl hover:bg-opacity-85 bg-primary text-white font-medium inline-block"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000} // Toast auto-closes after 3 seconds
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}
