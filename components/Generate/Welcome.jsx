import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Welcome({ setIsStepStart }) {
  const [isChecked, setIsChecked] = useState(false);
  const [shake, setShake] = useState(false);

  const handleNext = (e) => {
    if (!isChecked) {
      setShake(true); // Trigger the shake effect
      setTimeout(() => {
        setShake(false); // Reset after the animation ends
      }, 1000); // Duration of the shake effect
    } else {
      setIsStepStart(true);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <section className="px-4 py-8 sm;py-12">
        <div className="container mx-auto pb-28 sm:pb-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-start">
              <Link
                href={"/"}
                className="flex gap-1.5 items-center rounded-md border text-neutral-700 border-neutral-300 transition-all hover:bg-neutral-200 hover:border-neutral-200 shadow pl-2 pr-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="feather feather-chevron-left"
                  viewBox="0 0 24 24"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span> Back</span>
              </Link>
            </div>
            <div className="flex gap-3 items-center justify-center flex-col pt-8 sm:pt-12 pb-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-center text-black">
                Welcome to our AI Headshot Generator ✨
              </h1>
              <p className="text-sm sm:text-lg text-gray-900 font-medium text-center max-w-[576px] mx-auto">
                Transform your existing photos into realistic AI headshots for
                your resume, LinkedIn, and social media profiles.
              </p>
            </div>
            <div className="relative mt-2 w-full sm:mt-2">
              <div className="flex w-full items-center justify-center">
                <div className="pointer-events-none absolute left-0 top-[-1px] z-10 h-24 w-full bg-gradient-to-b from-white"></div>
                <div className="flex h-[280px]  flex-row overflow-hidden sm:h-[440px] sm:max-w-[520px]">
                  <div className="relative h-[360px] w-[110px] sm:h-[660px]  sm:w-[200px]">
                    <article className="animate-bannermove flex h-full w-full  flex-col">
                      <div className="flex-1">
                        <ul className="m-0 flex h-full list-none flex-col p-0">
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/1b.webp"}
                              alt="1b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/2b.webp"}
                              alt="2b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/3b.webp"}
                              alt="3b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <ul className="m-0 flex h-full list-none flex-col p-0">
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/4b.webp"}
                              alt="4b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/5b.webp"}
                              alt="5b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/6b.webp"}
                              alt="6b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div className="relative h-[360px] w-[110px] sm:h-[660px] sm:w-[200px]">
                    <article className="animate-bannermove-1 flex h-full w-full  flex-col">
                      <div className="flex-1">
                        <ul className="m-0 flex h-full list-none flex-col p-0">
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/7b.webp"}
                              alt="7b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/8b.webp"}
                              alt="8b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/9b.webp"}
                              alt="9b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <ul className="m-0 flex h-full list-none flex-col p-0">
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/9b.webp"}
                              alt="9b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/10a.webp"}
                              alt="10a.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/11b.webp"}
                              alt="11b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div className="relative h-[360px] w-[110px] sm:h-[660px] sm:w-[200px]">
                    <article className="animate-bannermove flex h-full w-full  flex-col">
                      <div className="flex-1">
                        <ul className="m-0 flex h-full list-none flex-col p-0">
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/13b.webp"}
                              alt="13b.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/1a.webp"}
                              alt="1a.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/3a.webp"}
                              alt="3a.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <ul className="m-0 flex h-full list-none flex-col p-0">
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/5a.webp"}
                              alt="5a.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/6a.webp"}
                              alt="6a.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                          <li className=" h-[130px] p-2 sm:h-[220px]">
                            <Image
                              src={"/images/8a.webp"}
                              alt="8a.webp"
                              width={400}
                              height={280}
                              className="rounded-xl h-full object-cover"
                            />
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-[-2px] left-0 z-10 h-20 w-full bg-gradient-to-t from-white"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-white fixed bottom-0 z-[99] px-4 py-3 sm:py-6 shadow-3xl">
        <div className="max-w-[750px] mx-auto space-y-4">
          <div
            className={`flex gap-2 items-center cursor-pointer ${
              shake ? "animate-shake" : ""
            }`}
          >
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
              className="size-4"
              id="term"
              name="term"
            />
            <label htmlFor="term" className="block text-sm cursor-pointer">
              I agree that I am the majority age 18/21+ years of age, and
              acknowledge the{" "}
              <Link href={"#"} className="hover:opacity-80" rel="noreferrer">
                <span className="cursor-pointer text-black underline">
                  terms
                </span>
              </Link>{" "}
              and{" "}
              <Link href={"#"} className="hover:opacity-80" rel="noreferrer">
                <span className="cursor-pointer text-black underline">
                  privacy policy
                </span>
              </Link>
            </label>
          </div>
          <div className="flex justify-center ">
            <button
              type="button"
              onClick={handleNext}
              className="w-[320px] py-3 text-base rounded-2xl hover:bg-opacity-85 bg-primary text-white font-medium inline-block"
            >
              Create headshots
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
