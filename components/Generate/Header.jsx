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
        </div>
      </div>
    </header>
  );
}
