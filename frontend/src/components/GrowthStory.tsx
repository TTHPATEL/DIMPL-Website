import { useState, useEffect, useRef } from "react";
import growthStoryImg from "../assets/Extra/GrowthStory.png";
import icon1 from "../assets/GrowthStory/icon1.png";
import icon2 from "../assets/GrowthStory/icon2.png";
import icon3 from "../assets/GrowthStory/icon3.png";
import icon4 from "../assets/GrowthStory/icon4.png";
import icon5 from "../assets/GrowthStory/icon5.png";

function GrowthStory() {
  const GrowthStoryData = [
    {
      icon: icon1,
      title: "1994 - Legacy Begins",
      description:
        "Establishment of Durga Construction & Co., beginning with specialized road and canal infrastructure projects.",
    },
    {
      icon: icon2,
      title: "2003 - Expansion & Exploration",
      description:
        "We expanded our footprint through a partnership by securing and starting operations at Neyveli Lignite Mines.",
    },
    {
      icon: icon3,
      title: "2008 - Independent Mining",
      description:
        "The company received its first direct mining contract from GMDC for the Tadkeshwar Lignite Mines project.",
    },
    {
      icon: icon4,
      title: "2015 - Scaling New Depths",
      description:
        "Set a new benchmark in operational scale at Rajpardi Mines as the largest project ever handled by the Durga Construction Co.",
    },
    {
      icon: icon5,
      title: "2020 - Evolution to Durga Infra Mining Pvt. Ltd.",
      description:
        "Evolved into Durga Infra Mining Pvt. Ltd., marking a new corporate era defined by a nationwide footprint and advanced technology.",
    },
  ];

  const total = GrowthStoryData.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const dragX = useRef(0);
  const isDragging = useRef(false);
  const currentIndexRef = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const moveTrackTo = (idx: number, animate: boolean) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = animate
      ? "transform 0.35s cubic-bezier(0.4,0,0.2,1)"
      : "none";
    trackRef.current.style.transform = `translateX(-${idx * 100}%)`;
  };

  const slideTo = (idx: number) => {
    const next = (idx + total) % total;
    currentIndexRef.current = next;
    moveTrackTo(next, true);
    setActiveIndex(next);
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % total;
      currentIndexRef.current = next;
      moveTrackTo(next, true);
      setActiveIndex(next);
    }, 3000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    dragX.current = 0;
    isDragging.current = true;
    moveTrackTo(currentIndexRef.current, false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const raw = e.touches[0].clientX - touchStartX.current;
    const atFirst = currentIndexRef.current === 0 && raw > 0;
    const atLast = currentIndexRef.current === total - 1 && raw < 0;
    dragX.current = atFirst || atLast ? raw * 0.2 : raw;
    trackRef.current.style.transform = `translateX(calc(-${currentIndexRef.current * 100}% + ${dragX.current}px))`;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const cur = currentIndexRef.current;
    const atFirst = cur === 0 && dragX.current > 0;
    const atLast = cur === total - 1 && dragX.current < 0;
    if (!atFirst && !atLast && dragX.current < -50) {
      slideTo(cur + 1);
      resetAutoPlay();
    } else if (!atFirst && !atLast && dragX.current > 50) {
      slideTo(cur - 1);
      resetAutoPlay();
    } else {
      moveTrackTo(cur, true);
    }
  };

  return (
    <section>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center px-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-3">
            Growth Story
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] mx-auto mb-8 rounded-full"></div>
          <p className="text-[#605F5A]/70 text-lg max-w-2xl mx-auto">
            Who we are and what we do.
          </p>
        </div>

        {/* Large screen: image */}
        <div className="hidden md:block ">
          <img
            src={growthStoryImg}
            alt=""
            className="w-[90%] h-full object-cover mx-auto"
          />
        </div>

        {/* Mobile: smooth gallery slider */}
        <div className="md:hidden px-4">
          {/* Card */}
          <div className="relative rounded-2xl overflow-hidden border border-[#e8ddd6]">
            <div
              className="flex"
              ref={trackRef}
              style={{ transform: "translateX(0%)", willChange: "transform" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {GrowthStoryData.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-full p-8 flex flex-col items-center text-center gap-5 select-none"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#E77B2E] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#605F5A]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows — outside and below the card */}
          <div className="flex justify-center gap-8 items-center mt-4 px-1">
            <button
              onClick={() => {
                slideTo(activeIndex - 1);
                resetAutoPlay();
              }}
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center border border-[#e8ddd6] text-[#E77B2E]"
              aria-label="Previous"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => {
                slideTo(activeIndex + 1);
                resetAutoPlay();
              }}
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center border border-[#e8ddd6] text-[#E77B2E]"
              aria-label="Next"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthStory;
