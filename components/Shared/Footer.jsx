export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-gradient-to-r from-[#161616] via-[#161616] to-[#242424]">
      <div className="container mx-auto">
        <div className="w-full  px-6  text-white md:px-section-md  ">
          <div className="m-auto">
            <div className="items-center justify-between lg:flex lg:gap-8">
              <article className="my-4 block   w-full">
                <p className="my-6 text-2xl text-center  font-semibold md:my-0 md:ml-3">
                  {" "}
                  The{" "}
                  <span className="text-orange-yellow px-0">
                    {" "}
                    Leading AI Headshot Generator{" "}
                  </span>{" "}
                  for Professionals{" "}
                </p>
              </article>
            </div>
            <div className="mt-6 ">
              <div className=" ">
                <p className="text-center">
                  Copyright © HEADSHOT AI, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
