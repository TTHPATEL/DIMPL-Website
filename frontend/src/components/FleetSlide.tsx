import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import crane from "@/assets/Machinary/Crane Hydra.png";
import dozer from "@/assets/Machinary/Dozer.png";
import surfaceMiner from "@/assets/Machinary/Surface Miner.png";
import loader from "@/assets/Machinary/Loader.png";
import excavator from "@/assets/Machinary/Excavator.png";
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
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Drag state
  const dragStartX = useRef(0);
  const currentDragX = useRef(0);
  const [offsetX, setOffsetX] = useState(0);

  // Container ref for dead zone calculation
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive dead zone: smaller on mobile, larger on desktop
  const getDeadZone = () => {
    if (typeof window === "undefined") return 60;
    const width = window.innerWidth;
    if (width < 640) return 40; // sm: 40px dead zone
    if (width < 768) return 60; // md: 60px dead zone
    return 100; // lg+: 100px dead zone
  };

  const SWIPE_THRESHOLD = 80; // Minimum drag distance to trigger slide change

  // Get next/prev indices (circular)
  const getPrevIndex = (index: number) =>
    index === 0 ? fleetSlides.length - 1 : index - 1;
  const getNextIndex = (index: number) =>
    index === fleetSlides.length - 1 ? 0 : index + 1;

  // Check if pointer is in dead zone
  const isInDeadZone = (clientX: number) => {
    if (!containerRef.current) return true;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const deadZone = getDeadZone();
    return relativeX < deadZone || relativeX > rect.width - deadZone;
  };

  const startDrag = (clientX: number) => {
    // Prevent drag during transition or in dead zone
    if (isTransitioning || isInDeadZone(clientX)) return;

    dragStartX.current = clientX;
    currentDragX.current = 0;
    setIsDragging(true);
    setOffsetX(0);
  };

  const onDragMove = (clientX: number) => {
    if (!isDragging) return;

    const delta = clientX - dragStartX.current;
    currentDragX.current = delta;
    setOffsetX(delta);
  };

  const endDrag = () => {
    if (!isDragging) return;

    const dragDistance = currentDragX.current;
    const shouldChange = Math.abs(dragDistance) > SWIPE_THRESHOLD;

    if (shouldChange) {
      // Complete the slide transition from current drag position
      completeSlideTransition(dragDistance > 0 ? "prev" : "next");
    } else {
      // Snap back to center with smooth transition
      snapBackToCenter();
    }

    setIsDragging(false);
  };

  const completeSlideTransition = (direction: "prev" | "next") => {
    setIsTransitioning(true);

    // Smoothly animate to final position (off-screen)
    const targetOffset =
      direction === "next" ? -window.innerWidth : window.innerWidth;
    setOffsetX(targetOffset);

    // After transition completes, update index and reset
    setTimeout(() => {
      setCurrent(
        direction === "next" ? getNextIndex(current) : getPrevIndex(current),
      );
      setOffsetX(0);
      setIsTransitioning(false);
      currentDragX.current = 0;
    }, 400); // Match CSS transition duration
  };

  const snapBackToCenter = () => {
    setIsTransitioning(true);
    setOffsetX(0);

    setTimeout(() => {
      setIsTransitioning(false);
      currentDragX.current = 0;
    }, 400);
  };

  const changeSlide = (direction: "left" | "right") => {
    if (isTransitioning || isDragging) return;

    setIsTransitioning(true);

    // Animate current slide off-screen
    const targetOffset =
      direction === "right" ? -window.innerWidth : window.innerWidth;
    setOffsetX(targetOffset);

    setTimeout(() => {
      setCurrent(
        direction === "right" ? getNextIndex(current) : getPrevIndex(current),
      );
      setOffsetX(0);
      setIsTransitioning(false);
    }, 400);
  };

  // Calculate positions for current, prev, and next images
  const getCurrentImageStyle = () => {
    return {
      transform: `translateX(${offsetX}px)`,
      transition:
        isTransitioning && !isDragging
          ? "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)"
          : "none",
    };
  };

  const getPrevImageStyle = () => {
    // Previous image enters from left when dragging right
    const baseOffset = -window.innerWidth;
    const adjustedOffset = offsetX > 0 ? baseOffset + offsetX : baseOffset;

    return {
      transform: `translateX(${adjustedOffset}px)`,
      transition:
        isTransitioning && !isDragging
          ? "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)"
          : "none",
      opacity: offsetX > 0 ? 1 : 0,
      pointerEvents: offsetX > 0 ? "auto" : "none",
    };
  };

  const getNextImageStyle = () => {
    // Next image enters from right when dragging left
    const baseOffset = window.innerWidth;
    const adjustedOffset = offsetX < 0 ? baseOffset + offsetX : baseOffset;

    return {
      transform: `translateX(${adjustedOffset}px)`,
      transition:
        isTransitioning && !isDragging
          ? "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)"
          : "none",
      opacity: offsetX < 0 ? 1 : 0,
      pointerEvents: offsetX < 0 ? "auto" : "none",
    };
  };

  return (
    <section
      id="fleet"
      className="relative w-full h-screen overflow-hidden select-none"
      ref={containerRef}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-12 sm:py-16 md:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
            Our Fleet
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#E5710A] mx-auto mb-4 sm:mb-6"></div>
        </div>

        {/* Background Text */}
        <div>
          <h2 className="absolute inset-0 flex items-center justify-center text-center z-10 text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold tracking-widest text-transparent stroke-text">
            DURGA INFRA
          </h2>
        </div>

        {/* IMAGES CONTAINER - All three images always rendered */}
        <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden pointer-events-none">
          {/* Previous Image - enters from left when dragging right */}
          <img
            src={fleetSlides[getPrevIndex(current)].image}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="absolute h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] w-auto object-contain"
            style={getPrevImageStyle() as React.CSSProperties}
            alt={fleetSlides[getPrevIndex(current)].title}
          />

          {/* Current Image - follows drag */}
          <img
            src={fleetSlides[current].image}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="absolute h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] w-auto object-contain"
            style={getCurrentImageStyle() as React.CSSProperties}
            alt={fleetSlides[current].title}
          />

          {/* Next Image - enters from right when dragging left */}
          <img
            src={fleetSlides[getNextIndex(current)].image}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="absolute h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] w-auto object-contain"
            style={getNextImageStyle() as React.CSSProperties}
            alt={fleetSlides[getNextIndex(current)].title}
          />
        </div>

        {/* TEXT - fades with current slide */}
        <div
          key={current}
          className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-30 text-center w-full max-w-xl px-6 sm:px-4 animate-textFadeUp"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#605F5A] mb-2">
            {fleetSlides[current].title}
          </h3>
          <p className="text-sm sm:text-base text-[#605F5A]/80 mb-4">
            {fleetSlides[current].desc}
          </p>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              gap: "8px",
              backgroundColor: "#E77B2E",
              color: "#FFFFFF",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "0.3px",
              boxShadow: "0 2px 8px rgba(231, 123, 46, 0.3)",
            }}
          >
            <ArrowUpRight size={18} strokeWidth={2.5} />
            Explore More
          </button>
        </div>

        {/* ARROW BUTTONS */}
        <button
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            changeSlide("left");
          }}
          disabled={isTransitioning || isDragging}
          className="absolute left-2 sm:left-4 md:left-6 lg:left-38 top-1/2 -translate-y-1/2 z-30 bg-transparent hover:bg-[#E5710A] hover:text-white cursor-pointer p-1 sm:p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <div className="flex items-center">
            <ChevronLeft size={20} className="sm:hidden" />
            <ChevronLeft size={20} className="sm:hidden" />
            <ChevronLeft size={28} className="hidden sm:block" />
            <ChevronLeft size={28} className="hidden sm:block" />
          </div>
        </button>

        <button
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            changeSlide("right");
          }}
          disabled={isTransitioning || isDragging}
          className="absolute right-2 sm:right-4 md:right-6 lg:right-38 top-1/2 -translate-y-1/2 z-30 bg-transparent hover:bg-[#E5710A] hover:text-white cursor-pointer p-1 sm:p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <div className="flex items-center">
            <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={28} className="hidden sm:block" />
            <ChevronRight size={28} className="hidden sm:block" />
          </div>
        </button>
      </div>
    </section>
  );
}
