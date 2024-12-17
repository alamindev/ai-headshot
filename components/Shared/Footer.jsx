import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-gradient-to-r from-[#161616] via-[#161616] to-[#242424]">
      <div className="container mx-auto">
        <div className="w-full  px-6 py-section-md text-white md:px-section-md lg:py-12">
          <div className="m-auto">
            <div className="items-center justify-between lg:flex lg:gap-8">
              <article className="my-4 block md:flex lg:my-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="7.68"
                    fill="url(#paint0_linear_2636_5195)"
                  ></rect>
                  <g clipPath="url(#clip0_2636_5195)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.2535 24.7301C16.3187 24.9563 15.9958 25.1331 15.8402 24.9483C9.1194 16.9595 17.8269 12.7917 17.5291 6.28018C17.5181 6.03954 17.9428 5.91452 18.0645 6.12767C25.649 19.4098 14.0966 17.2575 16.2535 24.7301Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.6487 25.8852C18.5274 25.9367 18.3799 25.8744 18.3389 25.7572C16.1584 19.5303 22.5967 19.5745 22.7974 13.9906C22.8063 13.7424 23.2661 13.6462 23.3549 13.8806C25.8113 20.364 24.1851 23.5355 18.6487 25.8852Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9318 25.9802C14.1408 26.0428 14.2959 25.8107 14.1624 25.6497C7.3042 17.3833 14.8505 14.7553 12.9059 10.142C12.8184 9.93453 12.4816 10.0098 12.4612 10.2316C12.3102 11.8768 11.4855 13.7327 10.8818 14.9487C9.66067 17.319 9.31436 16.1395 9.48577 14.7353C9.51384 14.5054 9.16553 14.362 9.03389 14.559C6.06621 19.0008 8.06891 24.2217 13.9318 25.9802Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_2636_5195"
                      x1="6.8"
                      y1="35.6"
                      x2="37.6"
                      y2="-20.4"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EB6002"></stop>
                      <stop offset="1" stopColor="#FFB253"></stop>
                    </linearGradient>
                    <clipPath id="clip0_2636_5195">
                      <rect
                        width="17"
                        height="20"
                        fill="white"
                        transform="translate(7.5 6)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="my-6 text-2xl font-semibold md:my-0 md:ml-3">
                  {" "}
                  The{" "}
                  <span className="text-orange-yellow px-0">
                    {" "}
                    Leading AI Headshot Generator{" "}
                  </span>{" "}
                  for Professionals{" "}
                </p>
              </article>
              <a aria-label="Affiliate Program" href="/affiliates">
                <div className="relative group flex h-[78px] w-full max-w-screen-xs justify-between bg-contain bg-no-repeat p-5 hover:shadow-2xl lg:w-[320px]">
                  <Image
                    src={"/images/steps/offer-bg.png"}
                    alt="offer bg"
                    fill
                  />
                  <article className="relative">
                    <p className="text-sm font-semibold">
                      {" "}
                      Earn 20% for every referral{" "}
                    </p>
                    <p className="mt-1 text-xs opacity-60">
                      Join our affiliate program for free!
                    </p>
                  </article>
                  <article className=" relative flex self-center rounded-full bg-white p-1 transition-transform duration-500 group-hover:translate-x-2">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 17"
                      fill="black"
                    >
                      <path
                        d="M3.33333 9.33337L10 9.33337L7.80667 11.5267C7.74418 11.5887 7.69458 11.6624 7.66074 11.7437C7.62689 11.8249 7.60947 11.912 7.60947 12C7.60947 12.088 7.62689 12.1752 7.66074 12.2564C7.69458 12.3377 7.74418 12.4114 7.80667 12.4734C7.93157 12.5975 8.10054 12.6672 8.27667 12.6672C8.45279 12.6672 8.62176 12.5975 8.74667 12.4734L11.6067 9.60671C11.8571 9.35781 11.9985 9.01976 12 8.66671C11.9968 8.31597 11.8554 7.98064 11.6067 7.73337L8.74667 4.86671C8.68451 4.80499 8.6108 4.75611 8.52975 4.72288C8.44871 4.68964 8.36191 4.67269 8.27431 4.673C8.18671 4.67331 8.10004 4.69087 8.01923 4.72468C7.93842 4.75849 7.86506 4.80788 7.80333 4.87004C7.74161 4.9322 7.69274 5.00591 7.6595 5.08695C7.62627 5.168 7.60932 5.2548 7.60963 5.3424C7.60994 5.43 7.6275 5.51667 7.66131 5.59748C7.69511 5.67829 7.74451 5.75165 7.80667 5.81337L10 8.00004L3.33333 8.00004C3.15652 8.00004 2.98695 8.07028 2.86193 8.1953C2.7369 8.32033 2.66667 8.4899 2.66667 8.66671C2.66667 8.84352 2.7369 9.01309 2.86193 9.13811C2.98695 9.26314 3.15652 9.33337 3.33333 9.33337Z"
                        fill="black"
                      ></path>
                    </svg>
                  </article>
                </div>
              </a>
            </div>
            <div className="mt-12">
              <div className="  grid-cols-5 gap-x-10 md:grid 2xl:w-[96%]">
                <div className="block ">
                  <div className="mb-10">
                    <h4 className="caption-heading mb-6">
                      <span className="leading-6">AI Headshots</span>
                    </h4>
                    <ul>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/"
                        >
                          Professional Headshots
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/headshots-for-teams"
                        >
                          Businesses
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/headshots/professional-headshots"
                        >
                          Student Headshots
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/headshots/teacher-headshots"
                        >
                          Teacher Headshots
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/headshots/medical-headshots"
                        >
                          Doctor Headshots
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/headshots/lawyer-headshots"
                        >
                          Lawyer Headshots
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/headshots/real-estate-headshots"
                        >
                          Real Estate Headshots
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/headshots/sales-headshots"
                        >
                          Salesperson Headshots
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block ">
                  <div className="mb-10">
                    <h4 className="caption-heading mb-6">
                      <span className="leading-6">AI Photo Generators</span>
                    </h4>
                    <ul>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-generator/dating-photos"
                        >
                          Dating Photos
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-generator/christmas-photos"
                        >
                          Christmas Photos
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-generator/yearbook-photos"
                        >
                          Yearbook Photos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block ">
                  <div className="mb-10">
                    <h4 className="caption-heading mb-6">
                      <span className="leading-6">AI Editor</span>
                    </h4>
                    <ul>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/background-changer"
                        >
                          Background Changer
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/magic-eraser"
                        >
                          Magic Eraser
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/unblur-image-sharpen"
                        >
                          Unblur Image and Sharpen
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/photo-enhancer"
                        >
                          Photo Enhancer
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/image-enlarger"
                        >
                          Image Enlarger
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/color-correction"
                        >
                          Color Correction
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/blemish-remover"
                        >
                          Blemish Remover
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/old-photo-restoration"
                        >
                          Old Photo Restoration
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/denoiser"
                        >
                          Denoiser
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor/image-quality-enhancer"
                        >
                          Image Quality Enhancer
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/photo-editor"
                        >
                          AI Editor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block ">
                  <div className="mb-10">
                    <h4 className="caption-heading mb-6">
                      <span className="leading-6">Tools</span>
                    </h4>
                    <ul>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/free-headshot-generator"
                        >
                          Free AI Headshot Generator
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/email-signature-generator"
                        >
                          Email Signature Generator
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/image-generator"
                        >
                          AI Image Generator
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-10">
                    <h4 className="caption-heading mb-6">
                      <span className="leading-6">Resources</span>
                    </h4>
                    <ul>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/background-library/white-backgrounds"
                        >
                          White Backgrounds
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/background-library/black-backgrounds"
                        >
                          Black Backgrounds
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block ">
                  <div className="mb-10">
                    <h4 className="caption-heading mb-6">
                      <span className="leading-6">Company</span>
                    </h4>
                    <ul>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/blog"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/security-policy"
                        >
                          Security Policy
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target="_blank"
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="mailto:support@aragon.ai"
                        >
                          Contact Support
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/reviews"
                        >
                          Reviews
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/refund-policy"
                        >
                          Refund Policy
                        </a>
                      </li>
                      <li className="lg:mb-2">
                        <a
                          target=""
                          className="-mx-2 inline-block p-2 text-sm font-medium text-mid-gray transition-opacity hover:underline"
                          href="/pricing"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-col-reverse items-center justify-between gap-6 md:items-start lg:mt-8 lg:flex-row lg:gap-0">
              <div className="flex flex-wrap items-center gap-1 border-t border-black/10 text-sm font-medium text-mid-gray">
                <p>Copyright © 2024 Aragon AI, Inc. All rights reserved.</p>
                <p>
                  <a className="hover:underline" href="/terms">
                    Terms of Use
                  </a>{" "}
                  <span className="opacity-50">&amp;</span>{" "}
                  <a className="hover:underline" href="/privacy">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="flex w-full flex-row justify-between lg:w-auto lg:justify-start">
                <div className="flex w-full flex-row items-center justify-start gap-8 md:gap-12 lg:justify-between lg:gap-4">
                  <a
                    target="_blank"
                    aria-label="Instagram"
                    className="hover:underline"
                    href="https://www.instagram.com/aragon.ai"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram mr-1"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    aria-label="Twitter"
                    className="hover:underline"
                    href="https://twitter.com/aragon_ai?lang=en"
                  >
                    <div className="[&amp;>*]:block [&amp;>*]:h-full mx-1 fill-white">
                      <svg fill="white" viewBox="0 -2 20 20" version="1.1">
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-60.000000, -7521.000000)"
                            fill="white"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <path
                                d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                id="twitter-[#154]"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    aria-label="LinkedIn"
                    className="hover:underline"
                    href="https://www.linkedin.com/company/aragonai/"
                  >
                    <div className="[&amp;>*]:block [&amp;>*]:h-full mx-1 fill-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.72 4H5.37A1.31 1.31 0 004 5.25v13.38A1.41 1.41 0 005.37 20h13.35A1.34 1.34 0 0020 18.63V5.25A1.23 1.23 0 0018.72 4zM9 17.34H6.67v-7.13H9v7.13zM7.89 9.13A1.18 1.18 0 016.67 7.9a1.18 1.18 0 011.24-1.23A1.18 1.18 0 019.13 7.9a1.18 1.18 0 01-1.24 1.23zm9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 00-1.17.84 1.431 1.431 0 00-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 012.1-1.21c1.51 0 2.65 1 2.65 3.13v4.21z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    aria-label="Facebook"
                    className="hover:underline"
                    href="https://www.facebook.com/people/Aragon/100088017744893/"
                  >
                    <div className="[&amp;>*]:block [&amp;>*]:h-full mx-1 fill-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    aria-label="Tiktok"
                    className="hover:underline"
                    href="https://www.tiktok.com/@aragon.ai"
                  >
                    <div className="[&amp;>*]:block [&amp;>*]:h-full mx-1 fill-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 002.189 5.213l-.002-.002A8.77 8.77 0 0029 8.45l.028.002v5.036a13.327 13.327 0 01-5.331-1.247l.082.034a15.385 15.385 0 01-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 01-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 01-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 01-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 00-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 004.382 3.586h-.009a4.198 4.198 0 003.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
