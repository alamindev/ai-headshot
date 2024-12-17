import Image from "next/image";
import { useState } from "react";

const PhotoRestrictions = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="max-w-4xl mx-auto my-6  bg-red-100 rounded-xl">
      <div
        className="flex items-center justify-between text-red-700 font-semibold px-6 py-5  cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>🚫 PHOTO RESTRICTIONS</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className={isOpen && "rotate-180"}
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>

      {isOpen && (
        <div className="bg-red-100 p-6 rounded-b-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="relative min-h-[220px] w-full rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={"/images/steps/low_quality.webp"}
                alt="low_quality"
                fill
              />
            </div>
            <p className="text-yellow-600 font-medium">❌ No Low-Quality /</p>
            <p className="text-sm text-gray-600">
              <strong> Cropped Photos:</strong> don’t upload photos that are
              blurry, cropped, or too dark / bright
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="relative min-h-[220px] w-full rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={"/images/steps/revealing.webp"}
                alt="revealing"
                fill
              />
            </div>
            <p className="text-green-600 font-medium">
              ❌ No Revealing Clothes:
            </p>
            <p className="text-sm text-gray-600">
              Don't upload photos with low necklines, or in skimpy outfits
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="relative min-h-[220px] w-full rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={"/images/steps/no_accessories.webp"}
                alt="no_accessories"
                fill
              />
            </div>
            <p className="text-blue-600 font-medium">
              ❌ No Accessories: Avoid
            </p>
            <p className="text-sm text-gray-600">
              photos of you with hats, sunglasses, headphones, lanyards, etc.
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="relative min-h-[220px] w-full rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={"/images/steps/taken_from_angle.webp"}
                alt="clarity"
                fill
              />
            </div>
            <p className="text-orange-600 font-medium">
              ❌ No Unnatural Angles:
            </p>
            <p className="text-sm text-gray-600">
              Avoid photos taken from the side, or where you're looking away
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoRestrictions;
