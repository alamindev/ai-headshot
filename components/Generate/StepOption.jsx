// components/StepOption.js
const StepOption = ({ option, onSelect, isSelected }) => {
  return (
    <label
      className={`flex items-center shadow  after:border after:border-gray-400 after:right-4 before:absolute before:rounded-full has-[:checked]:before:opacity-100 before:opacity-0 has-[:checked]:after:border-primary before:right-[19px] before:size-3.5 before:bg-primary after:size-5 after:rounded-full after:absolute relative justify-between border rounded-lg p-3 sm:p-4 gap-8 cursor-pointer transition-all ${
        isSelected ? "border-orange-500 shadow-md" : "border-gray-300"
      }`}
    >
      <div className="flex gap-2 sm:gap-4 items-center">
        {option.showImage && (
          <img
            src={option.image}
            alt={option.label}
            className="size-5 sm:size-8 "
          />
        )}
        {option.showColor && !option.showImage && (
          <div
            className="size-5 sm:size-8 rounded-full mr-2 sm:mr-4 border border-gray-300"
            style={{ backgroundColor: option.color }}
          />
        )}

        {/* Text Label */}
        <span className="flex-grow text-gray-700 font-medium line-clamp-1">
          {option.label}
        </span>
      </div>

      {/* Radio Button */}
      <input
        type="radio"
        name="stepOption"
        checked={isSelected}
        onChange={() => onSelect(option.label)}
        className="h-5 w-5 text-orange-500 focus:ring-orange-500 accent-primary shrink-0 opacity-0"
      />
    </label>
  );
};

export default StepOption;
