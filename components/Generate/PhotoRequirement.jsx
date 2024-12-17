import Image from "next/image";
import { useState } from "react";

const PhotoRequirement = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="max-w-4xl mx-auto my-6  bg-green-100 rounded-xl">
      <div
        className="flex items-center justify-between text-green-700 font-semibold px-6 py-5  cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>✅ PHOTO REQUIREMENTS</span>

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
        <div className="bg-green-100 p-6 rounded-b-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="relative min-h-[220px] w-full rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={"/images/steps/selfie.webp"}
                alt="selfie"
                fill
              />
            </div>
            <p className="text-yellow-600 font-medium">😊 Selfies:</p>
            <p className="text-sm text-gray-600">
              Upload frontal selfies that are well-lit and taken at eye-level.
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="relative min-h-[220px] w-full rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={"/images/steps/variety.webp"}
                alt="variety"
                fill
              />
            </div>
            <p className="text-green-600 font-medium">🧥 Variety:</p>
            <p className="text-sm text-gray-600">
              Upload photos in different outfits and backgrounds.
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="relative min-h-[220px] w-full rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={"/images/steps/recency.webp"}
                alt="recency"
                fill
              />
            </div>
            <p className="text-blue-600 font-medium">🆕 Recency:</p>
            <p className="text-sm text-gray-600">
              Upload recent photos from the last 6 months that feature similar
              hairstyles and lengths.
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="relative min-h-[220px] w-full rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={"/images/steps/clarity.webp"}
                alt="clarity"
                fill
              />
            </div>
            <p className="text-orange-600 font-medium">🌞 Clarity:</p>
            <p className="text-sm text-gray-600">
              Upload photos taken from a good distance, ideally taken from the
              chest or waist up.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoRequirement;
