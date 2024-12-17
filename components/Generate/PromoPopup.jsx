import Image from "next/image";
import { useEffect, useState } from "react";

const PromoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="relative bg-white  max-w-3xl rounded-3xl overflow-hidden shadow-lg">
            <button
              className="absolute top-1 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Section */}
              <div className="bg-black text-white pl-8 py-8 pr-4  ">
                <h1 className="text-3xl font-bold mb-2 text-primary">
                  25 million+
                </h1>
                <p className="text-xl font-medium">
                  AI headshots generated for happy customers
                </p>
                <Image
                  src={"/images/steps/popup.png"}
                  width={600}
                  height={600}
                  alt="asdf"
                />
              </div>

              {/* Right Section */}
              <div className="py-12 pr-6">
                <h2 className="text-4xl font-bold">
                  Get <span className="text-green-600">10% off</span>
                </h2>
                <p className="mt-3 text-lg">
                  Get your AI-generated headshot today. Use coupon:
                </p>
                <div className="bg-orange-500 text-white font-bold rounded-full text-center py-2 mt-6">
                  Coupon: NEW10
                </div>
                <p className="italic mt-6">
                  “I updated my LinkedIn profile image with this, cheaper than a
                  studio pro...”
                </p>
                <p className="mt-1 font-bold">- Mark</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoPopup;
