import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import crane from "@/assets/Machinary/Crane Hydra.png";
// import dumper from "@/assets/Machinary/Dumper.png";
import dozer from "@/assets/Machinary/Dozer.png";
import surfaceMiner from "@/assets/Machinary/Surface Miner.png";
import loader from "@/assets/Machinary/Loader.png";
import excavator from "@/assets/Machinary/Excavator.png";
// import grader from "@/assets/Machinary/Grader.png";
import waterTanker from "@/assets/Machinary/Water Tanker.png";
import staffBus from "@/assets/Machinary/Staff Bus.png";
import komatsu from "@/assets/Machinary/Komatsu Dumper.png";
import grader2 from "@/assets/Machinary/Grader New.png";
/* ---------------- DATA ---------------- */
const fleetSlides = [
  {
    title: "Surface Miners",
    image: surfaceMiner,
    desc: "Precision surface miners with cutting-edge mining technology.",
    link: "/services/surface-miners",
  },
  {
    title: "Crane Hydra",
    image: crane,
    desc: "High-performance cranes for mining and infrastructure projects.",
    link: "/services/crane-hydra",
  },
  {
    title: "Dumpers",
    image: komatsu,
    desc: "Heavy-duty dumpers designed for efficient material transportation.",
    link: "/services/dumpers",
  },
  {
    title: "Dozers",
    image: dozer,
    desc: "Powerful dozers engineered for tough terrain and earthmoving tasks.",
    link: "/services/dozers",
  },
  {
    title: "Excavators",
    image: excavator,
    desc: "Advanced excavators for large-scale industrial operations.",
    link: "/services/excavators",
  },

  {
    title: "Loaders",
    image: loader,
    desc: "Reliable loaders ensuring fast and efficient loading operations.",
    link: "/services/loaders",
  },

  {
    title: "Graders",
    image: grader2,
    desc: "Reliable graders ensuring fast and efficient grading operations.",
    link: "/services/graders",
  },
  {
    title: "Water Tankers",
    image: waterTanker,
    desc: "Reliable water tankers ensuring fast and efficient water transportation.",
    link: "/services/water-tankers",
  },
  {
    title: "Staff Buses",
    image: staffBus,
    desc: "Reliable staff buses ensuring fast and efficient staff transportation.",
    link: "/services/staff-buses",
  },
];

export function FleetSlide() {
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const animatingRef = useRef(false);

  const startX = useRef(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const changeSlide = (dir: "left" | "right") => {
    if (animatingRef.current) return;

    animatingRef.current = true;
    setIsAnimating(true);
    setDirection(dir);

    setCurrent((currentIndex) => {
      const nextIndex =
        dir === "right"
          ? currentIndex === fleetSlides.length - 1
            ? 0
            : currentIndex + 1
          : currentIndex === 0
            ? fleetSlides.length - 1
            : currentIndex - 1;

      setPrevIndex(currentIndex);
      return nextIndex;
    });

    setTimeout(() => {
      setPrevIndex(null);
      setIsAnimating(false);
      animatingRef.current = false;
    }, 1100);
  };

  const startDrag = (x: number) => {
    if (isAnimating) return; // prevent drag during animation
    startX.current = x;
    setIsDragging(true);
  };

  const onMove = (x: number) => {
    if (!isDragging) return;
    setDragX(x - startX.current);
  };

  const endDrag = () => {
    if (!isDragging) return;

    if (dragX > 120) changeSlide("left");
    else if (dragX < -120) changeSlide("right");

    setDragX(0);
    setIsDragging(false);
  };

  return (
    <>
      {/* SLIDER */}
      <section
        id="fleet"
        // className="relative w-full h-[720px] pb-10 overflow-hidden select-none "
        className="relative w-full h-screen overflow-hidden select-none"
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div> */}
          <div className="text-center py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
              Our Fleet
            </h2>
            <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-6"></div>
            {/* <p className="text-lg text-[#605F5A]/80 max-w-3xl mx-auto">
          Comprehensive mining and infrastructure solutions backed by
          cutting-edge technology, experienced workforce, and unwavering
          commitment to safety and sustainability.
        </p> */}
          </div>
          <div>
            <h2 className="absolute inset-0 flex items-center justify-center text-center z-10 text-7xl md:text-9xl lg:text-[10rem] font-extrabold tracking-widest text-transparent stroke-text">
              DURGA INFRA
            </h2>
          </div>
          {/* IMAGES */}
          <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden">
            {prevIndex !== null && prevIndex !== current && (
              <img
                src={fleetSlides[prevIndex].image}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="absolute h-[260px] md:h-[320px] w-auto object-contain"
                style={{
                  animation:
                    direction === "right"
                      ? "exitToLeft 1.1s cubic-bezier(0.25, 0.8, 0.25, 1)"
                      : "exitToRight 1.1s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
              />
            )}

            <img
              key={`current-${current}`}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              src={fleetSlides[current].image}
              className="absolute h-[260px] md:h-[320px] w-auto object-contain"
              style={{
                transform: isDragging
                  ? `translateX(${dragX}px)`
                  : "translateX(0)",
                animation: isDragging
                  ? "none"
                  : direction === "right"
                    ? "enterFromRight 1.1s cubic-bezier(0.25, 0.8, 0.25, 1)"
                    : "enterFromLeft 1.1s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
            />
          </div>
          {/* TEXT */}
          <div
            key={current}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 text-center max-w-xl px-4 animate-textFadeUp"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#605F5A] mb-2">
              {fleetSlides[current].title}
            </h3>
            <p className="text-[#605F5A]/80 mb-4">
              {fleetSlides[current].desc}
            </p>
            <button
              // className="inline-flex items-center text-white font-semibold bg-[#333740] py-2 px-3 rounded-2xl"
              className="inline-flex items-center text-white font-semibold bg-[#E77B2E] py-2 px-3 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out"
            >
              <span className="pr-1">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
              Explore More
            </button>
          </div>
          {/* ARROWS */}
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              changeSlide("left");
            }}
            className="absolute left-6 md:left-38 top-1/2 -translate-y-1/2 z-30 bg-transparent hover:bg-[#E5710A] hover:text-white cursor-pointer p-2 rounded-full"
          >
            <div className="flex items-center">
              <ChevronLeft size={28} />
              <ChevronLeft size={28} />
            </div>
          </button>

          <button
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              changeSlide("right");
            }}
            className="absolute right-6 md:right-38 top-1/2 -translate-y-1/2 z-30 bg-transparent hover:bg-[#E5710A] hover:text-white cursor-pointer p-2 rounded-full"
          >
            <div className="flex items-center">
              <ChevronRight size={28} />
              <ChevronRight size={28} />
            </div>
          </button>
        </div>
      </section>
    </>
  );
}
