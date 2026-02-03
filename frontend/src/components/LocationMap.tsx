import { useState, useRef } from "react";
import { LOCATION_DATA } from "../data/LocationData";
import type { Site } from "../data/LocationData";
import { MapPin, Info, ChevronRight, ChevronLeft } from "lucide-react";
import IndiaMap from "./IndiaMap";

declare global {
  interface Window {
    simplemaps_countrymap: any;
  }
}

export function LocationMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedSites, setSelectedSites] = useState<Site[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleStateSelect = (stateId: string | null) => {
    setSelectedState(stateId);
    if (stateId && LOCATION_DATA[stateId]) {
      setSelectedSites(LOCATION_DATA[stateId]);
    } else {
      setSelectedSites([]);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const toRoman = (num: number) => {
    const romanMap: { [key: number]: string } = {
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I",
    };
    let result = "";
    const keys = Object.keys(romanMap)
      .map(Number)
      .sort((a, b) => b - a);
    for (const key of keys) {
      while (num >= key) {
        result += romanMap[key];
        num -= key;
      }
    }
    return result;
  };

  return (
    <section
      id="location"
      className="relative min-h-screen bg-[#F6F6F6] flex flex-col py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col w-full z-20 px-4">
        {/* HEADER */}
        <div className="text-center z-20 mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
            Our Presence Across India
          </h2>
          <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-4" />
          <p className="text-[#605F5A]/80 max-w-2xl mx-auto">
            Active mining operations across India
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* MAP CONTAINER */}
          <div className="w-full lg:w-1/2">
            <IndiaMap onStateSelect={handleStateSelect} />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {!selectedState ? (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "24px",
                  padding: "48px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  border: "1px solid #f0f0f0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "600px",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#f9fafb",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <MapPin size={40} color="#E5710A" />
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#374151",
                    marginBottom: "16px",
                  }}
                >
                  Explore Our Locations
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    maxWidth: "320px",
                    lineHeight: "1.6",
                  }}
                >
                  Click on a highlighted state in the map to view detailed
                  information about our mining projects and sites.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center mb-2 px-2">
                  <h3 className="text-2xl font-bold text-[#374151]">
                    {selectedSites[0]?.state}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#E5710A]/10 text-[#E5710A] px-3 py-1 rounded-full text-sm font-bold border border-[#E5710A]/20">
                      {selectedSites.length}{" "}
                      {selectedSites.length === 1 ? "Site" : "Sites"}
                    </span>
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar"
                    style={{
                      scrollSnapType: "x mandatory",
                      maxWidth: "100%",
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    {selectedSites.map((site, index) => (
                      <div
                        key={site.id}
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          overflow: "hidden",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                          border: "1px solid #eee",
                          flexShrink: 0,
                          width: "100%",
                          scrollSnapAlign: "start",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            height: "240px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={site.image}
                            alt={site.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "16px",
                              right: "16px",
                              backgroundColor: "#374151",
                              padding: "6px 16px",
                              borderRadius: "20px",
                              fontSize: "11px",
                              fontWeight: "800",
                              letterSpacing: "1px",
                              color: "white",
                              zIndex: 1,
                              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                            }}
                          >
                            SITE {toRoman(index + 1)}
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "16px",
                              left: "16px",
                              backgroundColor: "rgba(255, 255, 255, 0.95)",
                              padding: "6px 14px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: "bold",
                              color: "#E5710A",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            }}
                          >
                            Mining Operation
                          </div>
                        </div>

                        <div style={{ padding: "24px" }}>
                          <h3
                            style={{
                              margin: "0 0 8px 0",
                              fontSize: "22px",
                              fontWeight: "bold",
                              color: "#374151",
                            }}
                          >
                            {site.name}
                          </h3>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "14px",
                              color: "#6b7280",
                              marginBottom: "16px",
                            }}
                          >
                            <MapPin
                              size={16}
                              style={{ marginRight: "6px", color: "#E5710A" }}
                            />
                            {site.location}
                          </div>
                          <div
                            style={{
                              height: "1px",
                              backgroundColor: "#f3f4f6",
                              marginBottom: "16px",
                            }}
                          />
                          <p
                            style={{
                              margin: 0,
                              fontSize: "15px",
                              color: "#4b5563",
                              lineHeight: "1.7",
                            }}
                          >
                            {site.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedSites.length > 1 && (
                    <>
                      <button
                        onClick={() => scroll("left")}
                        style={{
                          position: "absolute",
                          left: "-20px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          backgroundColor: "white",
                          border: "1px solid #eee",
                          borderRadius: "50%",
                          width: "44px",
                          height: "44px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          cursor: "pointer",
                          zIndex: 10,
                          color: "#E5710A",
                          transition: "all 0.2s ease",
                        }}
                        className="hover:scale-110 active:scale-95"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={() => scroll("right")}
                        style={{
                          position: "absolute",
                          right: "-20px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          backgroundColor: "white",
                          border: "1px solid #eee",
                          borderRadius: "50%",
                          width: "44px",
                          height: "44px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          cursor: "pointer",
                          zIndex: 10,
                          color: "#E5710A",
                          transition: "all 0.2s ease",
                        }}
                        className="hover:scale-110 active:scale-95"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {selectedSites.length > 1 && (
                  <div className="flex items-center justify-center gap-2 text-sm text-[#6b7280] font-medium">
                    <span className="w-12 h-px bg-gray-200" />
                    <span>Swipe or click to browse</span>
                    <span className="w-12 h-px bg-gray-200" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
