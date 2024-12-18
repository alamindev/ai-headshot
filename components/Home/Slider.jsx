import Image from "next/image";

const leftArrs = [
  { id: 1, url: "/images/1a.webp" },
  { id: 2, url: "/images/2a.webp" },
  { id: 3, url: "/images/3a.webp" },
  { id: 4, url: "/images/4a.webp" },
  { id: 5, url: "/images/5a.webp" },
  { id: 6, url: "/images/6a.webp" },
  { id: 7, url: "/images/7a.webp" },
  { id: 8, url: "/images/8a.webp" },
  { id: 9, url: "/images/9a.webp" },
  { id: 10, url: "/images/10a.webp" },
  { id: 11, url: "/images/11a.webp" },
  { id: 12, url: "/images/12a.webp" },
  { id: 13, url: "/images/13a.webp" },
  { id: 14, url: "/images/1a.webp" },
  { id: 15, url: "/images/2a.webp" },
  { id: 16, url: "/images/3a.webp" },
  { id: 17, url: "/images/4a.webp" },
  { id: 18, url: "/images/5a.webp" },
  { id: 19, url: "/images/6a.webp" },
  { id: 20, url: "/images/7a.webp" },
  { id: 21, url: "/images/8a.webp" },
  { id: 22, url: "/images/9a.webp" },
  { id: 23, url: "/images/10a.webp" },
  { id: 24, url: "/images/11a.webp" },
  { id: 25, url: "/images/12a.webp" },
  { id: 26, url: "/images/13a.webp" },
];
const rightArrs = [
  { id: 1, url: "/images/1b.webp" },
  { id: 2, url: "/images/2b.webp" },
  { id: 3, url: "/images/3b.webp" },
  { id: 4, url: "/images/4b.webp" },
  { id: 5, url: "/images/5b.webp" },
  { id: 6, url: "/images/6b.webp" },
  { id: 7, url: "/images/7b.webp" },
  { id: 8, url: "/images/8b.webp" },
  { id: 9, url: "/images/9b.webp" },
  { id: 10, url: "/images/10b.webp" },
  { id: 11, url: "/images/11b.webp" },
  { id: 12, url: "/images/12b.webp" },
  { id: 13, url: "/images/13b.webp" },
  { id: 14, url: "/images/1b.webp" },
  { id: 15, url: "/images/2b.webp" },
  { id: 16, url: "/images/3b.webp" },
  { id: 17, url: "/images/4b.webp" },
  { id: 18, url: "/images/5b.webp" },
  { id: 19, url: "/images/6b.webp" },
  { id: 20, url: "/images/7b.webp" },
  { id: 21, url: "/images/8b.webp" },
  { id: 22, url: "/images/9b.webp" },
  { id: 23, url: "/images/10b.webp" },
  { id: 24, url: "/images/11b.webp" },
  { id: 25, url: "/images/12b.webp" },
  { id: 26, url: "/images/13b.webp" },
];

export default function Slider() {
  return (
    <div className="relative overflow-x-clip">
      <div className="group relative grid fade-in TransitionStrip_wrapper__CAZNm h-[190px] md:h-[300px]">
        <div className="relative mx-auto grid size-full max-w-[2200px] grid-cols-2 py-1.5">
          <div className="blur-blob orange left-1/2 top-0 size-full opacity-[.15]"></div>
          <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-r from-white min-[2200px]:block"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-l from-white min-[2200px]:block"></div>
          <div className="relative col-span-1 overflow-hidden">
            <div className="TransitionStrip_strip">
              {leftArrs.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[9.6/12] h-full py-1"
                >
                  <Image
                    className="hover:scale-105 transition-all duration-500 size-full rounded-xl border border-black/5 object-cover object-top sm:rounded-lg"
                    src={item.url}
                    alt={`Image ${item.id}`}
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-1/2 top-0 z-10 h-full w-3 -translate-x-1/2 rounded-sd border-2 border-orange-vibrant/20 bg-white transition-opacity md:w-3.5"></div>
          <div className="relative col-span-1 overflow-hidden">
            <div className="TransitionStrip_strip TransitionStrip_right">
              {rightArrs.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[9.6/12] h-full py-1"
                >
                  <Image
                    className="hover:scale-105 transition-all duration-500 size-full rounded-xl border border-black/5 object-cover object-top sm:rounded-lg"
                    src={item.url}
                    alt={`Image ${item.id}`}
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
