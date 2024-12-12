import starGradient from "@/public/images/headerGradientStar.webp";
import Image from "next/image";
import Slider from "./Slider";
export default function Banner() {
  return (
    <section className="py-12 bg-orange-light space-y-12">
      <div className="px-5 ">
        <div className="container mx-auto space-y-8">
          <div className="max-w-[750px] mx-auto">
            <div className="flex justify-center flex-col items-center gap-4">
              <div className="flex gap-2 items-center text-primary bg-primary/10 font-semibold py-2 px-4 rounded-xl">
                <Image src={starGradient} alt="gradient Star" />
                <span>THE #1 RANKED AI HEADSHOT COMPANY</span>
              </div>
              <h1 className="text-center font-black text-black text-5xl leading-tight">
                The Leading AI Headshot Generator for{" "}
                <span className="text-primary">Professionals</span>
              </h1>
              <p className="text-center text-gray-500 max-w-[500px] mx-auto text-base lg:text-lg font-medium">
                Turn your selfies into studio-quality headshots in minutes. Save
                hundreds of dollars and hours of your time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </section>
  );
}
