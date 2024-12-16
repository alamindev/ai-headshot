import ArrowLeft from "../Svgs/ArrowLeft";
import StepOption from "./StepOption";

export default function StepBuilder({
  steps,
  handleOptionSelect,
  handleNextStep,
  currentStep,
  selectedOptions,
  setIsStepStart,
  setCurrentStep,
}) {
  return (
    <div>
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="max-w-[1280px] mx-auto">
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
            <div className="flex gap-4 items-center justify-center flex-col pt-12 pb-10">
              <div className="size-7 text-base font-semibold flex justify-center items-center text-white rounded-full bg-primary">
                {currentStep + 1}
              </div>
              <h2 className="font-bold text-5xl text-gray-900 pb-2">
                {steps[currentStep].question}
              </h2>
              <p className="text-lg text-gray-900 font-medium text-center  mx-auto">
                Transform your existing photos into realistic AI headshots for
                your resume, LinkedIn, and social media profiles.
              </p>
            </div>
            <div
              className={`${
                currentStep === 2 || currentStep === 3
                  ? currentStep === 3
                    ? "grid grid-cols-2 gap-5 max-w-[800px] mx-auto"
                    : "grid grid-cols-3 gap-5 max-w-[650px] mx-auto"
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
        </div>
      </section>
      <div className="w-full bg-white fixed bottom-0 py-6 shadow-3xl">
        <div className="max-w-[750px] mx-auto space-y-4">
          <div className="flex justify-center ">
            <button
              type="button"
              onClick={handleNextStep}
              className="w-[320px] py-3 text-base rounded-2xl hover:bg-opacity-85 bg-primary text-white font-medium inline-block"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
