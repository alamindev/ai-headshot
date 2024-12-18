import Image from "next/image";

const ReviewCard = () => {
  return (
    <div className="  mx-auto    p-4 mt-10">
      <div className="flex items-center mb-3">
        {/* Trustpilot Logo and Stars */}
        <h2 className="text-lg font-bold text-gray-900 mr-2">Trustpilot</h2>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-green-500"
            >
              <path d="M12 2l2.09 6.26L21 9.27l-5 3.64 1.91 6.28L12 15.77l-5.91 4.42L8 12.91l-5-3.64 6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="italic text-lg text-gray-700 mb-4">
        "Some of my family initially worried that I was wasting time and money,
        but after seeing the results, they were amazed. I had been dreading the
        task of getting a great photo for my author bio in my upcoming book, and
        now that worry is gone. Thank you!"
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center mt-2 gap-2">
        <Image
          src={"/images/steps/73x73.webp"}
          alt="avarter"
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">Adam Weygandt</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
