import Image from "next/image";

const packages = [
  {
    name: "Starter",
    price: 35,
    originalPrice: 59,
    features: [
      "📸 20 high-quality headshots",
      "⏱️ 2-hour processing time",
      "👕 5 outfits and backgrounds",
      "🕺 5 poses",
    ],
  },
  {
    name: "Basic",
    price: 45,
    originalPrice: 79,
    features: [
      "📸 60 high-quality headshots",
      "⏱️ 1-hour processing time",
      "👕 20 outfits and backgrounds",
      "🕺 20 poses",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 75,
    originalPrice: 129,
    features: [
      "📸 100 high-quality headshots",
      "⏱️ 30-min processing time",
      "👕 40 outfits and backgrounds",
      "🕺 40 poses",
    ],
    bestValue: true,
  },
];

export default function PricingTable({ setSelected, selected, setPrice }) {
  const handleSelected = (pkg) => {
    setSelected(pkg.name);
    setPrice(pkg.price);
  };
  return (
    <div className="w-full">
      <div className="space-y-1">
        <h1 className="text-4xl text-left font-bold  pb-3 ">
          Amazing headshots are waiting for you!
        </h1>
        <h3 className="text-2xl font-medium">Select a package</h3>
        <p className="text-gray-600  text-left">
          Pay once, no subscriptions or hidden fees.
        </p>
        <div className="flex gap-2 items-center text-blue-600">
          <svg
            id="Layer_1"
            width="20"
            height="20"
            fill="#000"
            version="1.1"
            viewBox="0 0 512 512"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#2856fb"
                d="M256 0C177.328 82.672 46.672 64 46.672 64v224C46.672 420 256 512 256 512s209.328-92 209.328-224V64S334.672 82.672 256 0"
              ></path>
              <path
                fill="#fff"
                d="m240.88 355.664-92.832-72.512 19.68-25.216 65.904 51.44 106.944-157.488 26.464 17.968z"
              ></path>
            </g>
          </svg>
          <span>100% Money Back Guarantee</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            onClick={() => handleSelected(pkg)}
            className={`cursor-pointer border relative rounded-2xl p-6  w-full transition-all hover:scale-[1.01]   ${
              selected === pkg.name ? "border-orange-500" : "border-gray-200"
            }`}
          >
            <div className="flex justify-between  ">
              <h2 className="text-lg text-gray-500 text-center pb-3 w-full">
                {pkg.name}
              </h2>
              {pkg.popular && (
                <span className="text-sm text-orange-600 absolute w-[150px] text-center -top-3.5 rounded-full left-1/2 -translate-x-1/2 px-2 py-1 border border-gray-200 bg-white">
                  82% pick this plan
                </span>
              )}
              {pkg.bestValue && (
                <span className="text-sm text-blue-600 font-medium absolute w-[150px] text-center -top-3.5 rounded-full left-1/2 -translate-x-1/2 px-2 py-1 border border-gray-200 bg-white">
                  Best Value
                </span>
              )}
            </div>
            <div className="flex flex-col py-2 text-center text-[4rem] font-extrabold leading-[1.2] tracking-tighter lg:text-[4.5rem]">
              <span className="mb-[-8px] tracking-tight text-xl line-through opacity-20">
                <span>${pkg.originalPrice}</span>
              </span>
              <span className={selected === pkg.name ? "text-primary" : ""}>
                ${pkg.price}
              </span>
            </div>

            <ul className="t  text-gray-600 grid gap-1 pt-4">
              {pkg.features.map((feature, index) => (
                <li key={index} className="mb-1 text-gray-700 text-base">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-12 flex flex-col justify-center gap-3 items-center">
        <h4 className="text-center font-medium text-neutral-500 text-lg">
          Trusted and used by professionals at
        </h4>
        <Image
          src={"/images/steps/trust.png"}
          alt="trust"
          width={400}
          height={100}
        />
      </div>
    </div>
  );
}
