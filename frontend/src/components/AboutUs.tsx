import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
// import { ArrowRight } from "lucide-react";
import dig from "../assets/History Photo/Dig.jpg";
import thermal2 from "../assets/History Photo/Thermal2.jpg";
import od from "../assets/Mines/GJ.png";
import TL2 from "../assets/Mines/TL2.png";

export function AboutUs() {
  const milestones = [
    {
      id: 1,
      year: "1994",
      // location: "BHUJ-KUTCH, GUJARAT",
      title: "Foundation as Durga Construction Co.",
      description:
        "Durga Construction Co. was established as a partnership firm with a small set of earthwork equipment, including one Tata Hitachi-083 excavator and 4-5 dumpers. The company began its journey as a sub contractor, focusing on basic earthwork activities.",
      image: dig,
    },
    {
      id: 2,
      year: "2000–2010",
      // location: "MULTI-STATE OPERATIONS",
      title: "Steady Growth and Experience",
      description:
        "With growing experience, the firm executed earthwork projects for roads, dams, canals, and thermal power stations. This period marked steady expansion in capability, manpower, and execution of increasingly complex works.",
      image: thermal2,
    },
    {
      id: 3,
      year: "2010–2017",
      // location: "RAJASTHAN & TELANGANA",
      title: "Entry into Large Scale Mining",
      description:
        "The company evolved into a main contractor for State and Central Government projects. Major mining assignments were completed for GMDC, SCCL, and RSMM, establishing a strong presence in coal and lignite mining.",
      image: od,
    },
    {
      id: 4,
      year: "2018–2019",
      // location: "MAHARASHTRA & TELANGANA",
      title: "Handling Complex Geological Conditions",
      description:
        "Projects were executed under challenging site conditions involving hard rock, unstable benches, and long lead and lift requirements. These works strengthened the company's operational and technical capabilities.",
      image: TL2,
    },
    {
      id: 5,
      year: "2020",
      // location: "PAN-INDIA",
      title: "Transition to Corporate Entity",
      description:
        "On 09/09/2020, the partnership firm was converted into Durga Infra Mining Private Limited. This transition marked a new phase of structured growth, governance, and nationwide operations.",
      image: TL2,
    },
    {
      id: 6,
      year: "2021–2024",
      // location: "GUJARAT & RAJASTHAN",
      title: "Major Mining Achievements",
      description:
        "At GMDC Rajpardi, extensive dewatering of nearly 50,000 cubic meters per day enabled lignite extraction under heavy water ingress. At Tadkeshwar, overburden removal of about 1 lakh cubic meters per day was achieved despite sliding strata.",
      image:
        "https://images.unsplash.com/photo-1581092918484-8cf2c4a5c6d4?w=1200&q=80",
    },
    {
      id: 7,
      year: "2025",
      // location: "NATIONWIDE PRESENCE",
      title: "Established National Footprint",
      description:
        "DIMPL operates multiple large mining projects across India with a strong fleet of equipment and a skilled workforce. The company continues to deliver consistent performance across diverse geological and operational conditions.",
      image:
        "https://images.unsplash.com/photo-1581092918484-8cf2c4a5c6d4?w=1200&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeMilestone = milestones[activeIndex];
  const progressHeight = ((activeIndex + 1) / milestones.length) * 100;

  // Swipe handling for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  // Ref for horizontal scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active year button
  const scrollToActiveYear = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeButton = container.children[0]?.children[
        index
      ] as HTMLElement;

      if (activeButton) {
        const containerWidth = container.offsetWidth;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;

        // Calculate scroll position to center the active button
        const scrollPosition =
          buttonLeft - containerWidth / 2 + buttonWidth / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = swipeDistance > minSwipeDistance;
    const isRightSwipe = swipeDistance < -minSwipeDistance;

    if (isLeftSwipe && activeIndex < milestones.length - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      scrollToActiveYear(newIndex);
    }

    if (isRightSwipe && activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      scrollToActiveYear(newIndex);
    }
  };

  // Handle click on year button
  const handleYearClick = (index: number) => {
    setActiveIndex(index);
    scrollToActiveYear(index);
  };

  return (
    <>
      {/* Inline Styles for Animations */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);








          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }





      `}</style>

      <section
        id="about"
        className="min-h-screen py-12 sm:py-16 md:py-20 bg-white"
      >
        {/* Header Section - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#605F5A] mb-3 sm:mb-4">
            Our Lasting <span className="text-[#E5710A]">Legacy</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#E5710A] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-[#605F5A]/80 max-w-3xl mx-auto">
            Built on strength and reliability
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-19 items-start">
            {/* Left Column - Company Info */}
            <div className="w-full lg:w-1/3 px-0">
              <div className="text-base sm:text-lg text-justify text-[#605F5A]/80 leading-relaxed">
                <p>
                  <strong className="text-[#605F5A]">
                    Durga Infra Mining Private Limited (DIMPL)
                  </strong>{" "}
                  is a leading mining company engaged in comprehensive mine
                  development and operations across India. The company
                  specializes in overburden removal and coal and lignite
                  extraction, supported by modern equipment and two decades of
                  hands-on industry experience.
                </p>

                <p className="pt-3 sm:pt-4">
                  Over the years, DIMPL has executed a wide range of
                  infrastructure and mining projects including roads, dams,
                  canals, and thermal power stations, and focuses on large-scale
                  coal and lignite mining operations, delivering high-volume
                  production under complex geological and site conditions.
                </p>

                <p className="text-[#E5710A] font-semibold italic pt-3 sm:pt-4">
                  Focused on coal and lignite mining with proven experience
                  across diverse projects.
                </p>
              </div>

              <div className="pt-6 sm:pt-8 hidden lg:block">
                <button className="inline-flex items-center gap-2 bg-[#E77B2E] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-bold shadow-lg hover:bg-[#d66a1f] transition-all duration-300 hover:shadow-xl">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                  Explore Our Journey
                </button>
              </div>
            </div>

            {/* Right Column: Timeline - Desktop & Tablet */}
            <div className="hidden lg:block lg:w-2/3 w-full relative group">
              <div className="flex gap-6 lg:gap-10 items-stretch h-[450px] sm:h-[500px] lg:h-[600px]">
                {/* Year Selector */}
                <div className="flex flex-col justify-center gap-4 sm:gap-6 py-4">
                  {milestones.map((m, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={m.id}
                        onClick={() => handleYearClick(idx)}
                        className="cursor-pointer"
                      >
                        <div
                          className={`min-w-[90px] sm:min-w-[110px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all ${
                            isActive
                              ? "bg-[#E5710A] text-white"
                              : "text-gray-400 hover:bg-[#E5710A]/10"
                          }`}
                        >
                          <span className="text-base sm:text-lg font-bold whitespace-nowrap">
                            {m.year}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Image Card */}
                <div
                  className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={activeMilestone.image}
                    alt={activeMilestone.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 p-2 sm:p-4 lg:p-8 flex flex-col justify-end">
                    <span className="text-[#F1C40F] font-bold text-xs sm:text-sm uppercase">
                      {/* {activeMilestone.location} */}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-2">
                      {activeMilestone.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 line-clamp-4">
                      {activeMilestone.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-white/10">
                    <div
                      className="w-full bg-[#E5710A] transition-all duration-300"
                      style={{ height: `${progressHeight}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline - Horizontal Year Selector + Active Card */}
            <div className="lg:hidden w-full">
              {/* Horizontal Scrollable Year Selector */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto pb-4 pt-1 mb-6 -mx-4 px-4 scrollbar-hide"
              >
                <div className="flex gap-3 justify-start">
                  {milestones.map((m, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={m.id}
                        onClick={() => handleYearClick(idx)}
                        className={`px-6 py-3 rounded-full whitespace-nowrap font-bold text-base transition-all duration-300 ${
                          isActive
                            ? "bg-[#E5710A] text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {m.year}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Milestone Card */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative h-80 sm:h-96">
                  <img
                    key={activeIndex}
                    src={activeMilestone.image}
                    alt={activeMilestone.title}
                    className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <div className="mb-2">
                      {/* <span className="inline-block bg-[#E5710A] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                        {activeMilestone.year}
                      </span> */}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {activeMilestone.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      {activeMilestone.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                    <div
                      className="h-full bg-[#E5710A] transition-all duration-500"
                      style={{ width: `${progressHeight}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {milestones.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleYearClick(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "bg-[#E5710A] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to milestone ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Explore Journey Button - Mobile Only */}
              <div className="flex justify-center mt-8">
                <button className="inline-flex items-center gap-2 bg-[#E77B2E] text-white px-6 py-3 rounded-lg text-base font-bold shadow-lg hover:bg-[#d66a1f] transition-all duration-300 hover:shadow-xl">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                  Explore Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
