export default function ProgressBar({ currentStep, totalSteps }) {
  const percentage = (currentStep / totalSteps) * 100;
  return (
    <div className="w-[650px] max-w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-primary h-3 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
