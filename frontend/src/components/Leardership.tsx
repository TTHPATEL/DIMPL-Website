import het from "../assets/Director/Het.png";
// import hitesh from "../assets/Director/Hitesh.png";
import hitesh from "../assets/Director/Hitesh2.jpeg";
import navin from "../assets/Director/Navin.png";
import samji from "../assets/Director/Samji.jpeg";
import { useState, useRef } from "react";

interface Director {
  id: number;
  name: string;
  designation: string;
  photo: string;
}

const Leardership = () => {
  const directors: Director[] = [
    {
      id: 1,
      name: "Samji Dholu",
      designation: "Managing Director",
      photo: samji,
    },
    {
      id: 2,
      name: "Shanti Dholu",
      designation: "Managing Director",
      photo: "/api/placeholder/300/400",
    },
    {
      id: 3,
      name: "Navin Dholu",
      designation: "Managing Director",
      photo: navin,
    },
    {
      id: 4,
      name: "Hitesh Dholu",
      designation: "Managing Director",
      photo: hitesh,
    },
    {
      id: 5,
      name: "Het Dholu",
      designation: "Managing Director",
      photo: het,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const dragX = useRef(0);
  const isDragging = useRef(false);
  const currentIndexRef = useRef(0); // shadow of activeIndex, readable in handlers without stale closure

  const moveTrackTo = (idx: number, animate: boolean) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = animate
      ? "transform 0.35s cubic-bezier(0.4,0,0.2,1)"
      : "none";
    trackRef.current.style.transform = `translateX(-${idx * 100}%)`;
  };

  const slideTo = (idx: number) => {
    const next = Math.max(0, Math.min(idx, directors.length - 1));
    currentIndexRef.current = next;
    moveTrackTo(next, true);
    setActiveIndex(next); // only for dots re-render
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    dragX.current = 0;
    isDragging.current = true;
    moveTrackTo(currentIndexRef.current, false); // freeze transition
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const raw = e.touches[0].clientX - touchStartX.current;
    const atFirst = currentIndexRef.current === 0 && raw > 0;
    const atLast = currentIndexRef.current === directors.length - 1 && raw < 0;
    dragX.current = atFirst || atLast ? raw * 0.2 : raw;
    trackRef.current.style.transform = `translateX(calc(-${currentIndexRef.current * 100}% + ${dragX.current}px))`;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const cur = currentIndexRef.current;
    const atFirst = cur === 0 && dragX.current > 0;
    const atLast = cur === directors.length - 1 && dragX.current < 0;
    if (!atFirst && !atLast && dragX.current < -50) slideTo(cur + 1);
    else if (!atFirst && !atLast && dragX.current > 50) slideTo(cur - 1);
    else moveTrackTo(cur, true); // snap back, no state change = no re-render blink
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#626162] mb-6">
            Our Leadership
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] mx-auto mb-8 rounded-full"></div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-[#626162]/80 leading-relaxed font-light">
              Meet the leaders of DIMPL who guide the company with experience
              and strong values.
            </p>
          </div>
        </div>

        {/* Directors Grid - hidden on mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {directors.map((director) => (
            <div
              key={director.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-gray-100"
            >
              {/* Card Inner Container */}
              <div className="relative h-full flex flex-col">
                {/* Photo Container - Increased Height (Aspect Ratio 3:4) */}
                <div className="relative overflow-hidden aspect-4/7 w-full">
                  <img
                    src={director.photo}
                    alt={director.name}
                    // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Decorative Corner - Brand Orange */}
                  {/* <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#E77B2E]/30 to-[#F9A056]/30 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div> */}
                </div>

                {/* Info Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
                  <h3 className="text-xl uppercase font-bold mb-1 group-hover:text-white transition-colors duration-300">
                    {director.name}
                  </h3>
                  <p className="text-sm text-gray-300 font-medium tracking-wide">
                    {director.designation}
                  </p>

                  {/* Animated Underline */}
                  {/* <div className="mt-4 h-0.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div> */}
                  <div className="mt-4 h-0.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] transform transition-transform duration-500 origin-left"></div>
                </div>

                {/* Top Border Accent */}
                {/* <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#E77B2E] via-[#F9A056] to-[#E77B2E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div> */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#E77B2E] via-[#F9A056] to-[#E77B2E] transform transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: gallery-style smooth slide */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-100">
            {/* Sliding track */}
            <div
              ref={trackRef}
              className="flex"
              style={{ transform: `translateX(0%)`, willChange: "transform" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {directors.map((director) => (
                <div
                  key={director.id}
                  className="min-w-full relative flex flex-col select-none"
                >
                  <div className="relative overflow-hidden aspect-5/7 w-full">
                    <img
                      src={director.photo}
                      alt={director.name}
                      className="w-full h-full object-cover transition-transform duration-700"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
                    <h3 className="text-xl uppercase font-bold mb-1">
                      {director.name}
                    </h3>
                    <p className="text-sm text-gray-300 font-medium tracking-wide">
                      {director.designation}
                    </p>
                    <div className="mt-4 h-0.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] transform transition-transform duration-500 origin-left"></div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#E77B2E] via-[#F9A056] to-[#E77B2E] transform transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {directors.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slideTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-[#E77B2E] w-8" : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to director ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .lg\\:grid-cols-5 {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Leardership;
