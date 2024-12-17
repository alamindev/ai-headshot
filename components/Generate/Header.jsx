import Link from "next/link";
import ProgressBar from "./ProgressBar";

export default function Header({ currentStep, totalSteps, isStepStart }) {
  return (
    <header className="px-4 py-5 shadow-md border-b border-gray-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="font-bold text-black text-2xl">
            HEADSHOT
          </Link>
          {isStepStart && (
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          )}
          <Link href={"/"} className="" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-log-out"
              viewBox="0 0 24 24"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
