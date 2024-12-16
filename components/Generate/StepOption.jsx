// components/StepOption.js
const StepOption = ({ option, onSelect, isSelected }) => {
  return (
    <label
      className={`flex items-center shadow justify-between border rounded-lg p-4 gap-8 cursor-pointer transition-all ${
        isSelected ? "border-orange-500 shadow-md" : "border-gray-300"
      }`}
    >
      <div className="flex gap-4 items-center">
        {option.showImage && (
          <img src={option.image} alt={option.label} className="w-8 h-8 " />
        )}
        {option.showColor && !option.showImage && (
          <div
            className="w-8 h-8 rounded-full mr-4 border border-gray-300"
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
        className="h-5 w-5 text-orange-500 focus:ring-orange-500 accent-primary"
      />
    </label>
  );
};

export default StepOption;
