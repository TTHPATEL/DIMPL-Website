import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import excavator from "@/assets/Machinary/Crane Hydra.png";
import dumper from "@/assets/Machinary/Dumper.png";
import dozer from "@/assets/Machinary/Dozer.png";
import machine from "@/assets/Machinary/Machine.png";
import surfaceMiner from "@/assets/Machinary/Surface Miner.png";
import loader from "@/assets/Machinary/Loader.png";
import bgImage from "@/assets/BG IMAGE.jpg";

/* ---------------- DATA ---------------- */
const fleetSlides = [
  {
    title: "Excavators",
    image: excavator,
    desc: "High-performance excavators for mining and infrastructure projects.",
    link: "/services/excavators",
  },
  {
    title: "Dumpers",
    image: dumper,
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
    title: "Machines",
    image: machine,
    desc: "Advanced machinery for large-scale industrial operations.",
    link: "/services/machines",
  },
  {
    title: "Surface Miners",
    image: surfaceMiner,
    desc: "Precision surface miners with cutting-edge mining technology.",
    link: "/services/surface-miners",
  },
  {
    title: "Loaders",
    image: loader,
    desc: "Reliable loaders ensuring fast and efficient loading operations.",
    link: "/services/loaders",
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
        className="relative w-full h-[720px] overflow-hidden select-none "
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        {/* HEADING */}
        <div className="text-center">
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
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* BRAND */}
        <h2 className="absolute inset-0 flex items-center justify-center z-10 text-7xl md:text-9xl lg:text-[10rem] font-extrabold tracking-widest text-transparent stroke-text">
          DURGA INFRA
        </h2>

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
          <p className="text-[#605F5A]/80 mb-4">{fleetSlides[current].desc}</p>
          <a
            href={fleetSlides[current].link}
            className="inline-flex items-center text-[#E5710A] font-semibold"
          >
            Read more →
          </a>
        </div>

        {/* ARROWS */}
        <button
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            changeSlide("left");
          }}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-[#E5710A] hover:text-white cursor-pointer p-3 rounded-full"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            changeSlide("right");
          }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-[#E5710A] hover:text-white p-3 rounded-full"
        >
          <ChevronRight size={28} />
        </button>
      </section>
    </>
  );
}
