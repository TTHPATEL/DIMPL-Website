import { useState, useRef } from "react";
import { LOCATION_DATA } from "../data/SiteData";
import type { Site } from "../data/SiteData";
import {
  MapPin,
  ChevronRight,
  ChevronLeft,
  Calendar,
  TrendingUp,
  Hammer,
  Package,
  ArrowUpRight,
} from "lucide-react";
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
        <div className="text-center z-20 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#626162] mb-4">
            Our Presence Across India
          </h2>
          <div className="w-24 h-1 bg-[#E77B2E] mx-auto mb-4" />
          <p className="text-[#1F1F1F]/70 max-w-2xl mx-auto text-lg">
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
                  // backgroundColor: "#FFFFFF",

                  borderRadius: "16px",
                  padding: "40px",
                  // boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  // border: "1px solid #E5E5E5",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "500px",
                }}
              >
                {/* Header Section */}
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#E77B2E",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      boxShadow: "0 4px 12px rgba(231, 123, 46, 0.25)",
                    }}
                  >
                    <MapPin size={32} color="#FFFFFF" strokeWidth={2.5} />
                  </div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#626162",
                      marginBottom: "10px",
                    }}
                  >
                    Discover Our Mining Operations
                  </h3>
                  <p
                    style={{
                      color: "#1F1F1F",
                      opacity: 0.6,
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    Choose a highlighted state to view active project details.
                  </p>
                </div>

                {/* Stats Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F6F6F6",
                      borderRadius: "12px",
                      padding: "20px",
                      textAlign: "center",
                      // border: "1px solid #E5E5E5",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: "800",
                        color: "#E77B2E",
                        margin: "0 0 8px 0",
                        lineHeight: 1,
                      }}
                    >
                      5
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#626162",
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      States
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#F6F6F6",
                      borderRadius: "12px",
                      padding: "20px",
                      textAlign: "center",
                      // border: "1px solid #E5E5E5",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: "800",
                        color: "#E77B2E",
                        margin: "0 0 8px 0",
                        lineHeight: 1,
                      }}
                    >
                      7
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#626162",
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Active Sites
                    </p>
                  </div>
                </div>

                {/* Featured States */}
                <div
                  style={{
                    backgroundColor: "#F6F6F6",
                    borderRadius: "12px",
                    padding: "20px",
                    // border: "1px solid #E5E5E5",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#626162",
                      marginBottom: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Our Locations
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {[
                      "Gujarat",
                      "Odisha",
                      "Telangana",
                      "Chhattisgarh",
                      "Madhya Pradesh",
                    ].map((state) => (
                      <span
                        key={state}
                        style={{
                          backgroundColor: "#ededed",
                          color: "#1F1F1F",
                          padding: "8px 14px",
                          borderRadius: "6px",
                          fontSize: "13px",
                          fontWeight: "600",
                          border: "1px solid #E5E5E5",
                        }}
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "24px",
                    textAlign: "center",
                  }}
                >
                  <button
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      gap: "8px",
                      backgroundColor: "#E77B2E",
                      color: "#FFFFFF",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "700",
                      letterSpacing: "0.3px",
                      boxShadow: "0 2px 8px rgba(231, 123, 46, 0.3)",
                    }}
                  >
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                    View All Projects
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center px-2">
                  <h3 className="text-2xl font-bold text-[#626162]">
                    {selectedSites[0]?.state}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#E77B2E]/10 text-[#E77B2E] px-4 py-1.5 rounded-full text-sm font-bold border border-[#E77B2E]/20">
                      {selectedSites.length}{" "}
                      {selectedSites.length === 1 ? "Site" : "Sites"}
                    </span>
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar"
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
                          backgroundColor: "#FFFFFF",
                          borderRadius: "12px",
                          overflow: "hidden",
                          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                          border: "1px solid #E5E5E5",
                          flexShrink: 0,
                          width: "100%",
                          scrollSnapAlign: "start",
                        }}
                      >
                        {/* Image Section */}
                        <div
                          style={{
                            position: "relative",
                            height: "180px",
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
                        </div>

                        {/* Content Section */}
                        <div style={{ padding: "22px", position: "relative" }}>
                          {selectedSites.length > 1 && (
                            <div
                              style={{
                                position: "absolute",
                                margin: "0 0 8px 0",
                                right: "12px",
                                backgroundColor: "#dc7124e4",
                                padding: "7px 18px",
                                borderRadius: "6px",
                                fontSize: "11px",
                                fontWeight: "800",
                                letterSpacing: "0.8px",
                                color: "#FFFFFF",
                                zIndex: 1,
                              }}
                            >
                              SITE {toRoman(index + 1)}
                            </div>
                          )}
                          <h3
                            style={{
                              margin: "0 0 8px 0",
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "#626162",
                              lineHeight: "1.3",
                            }}
                          >
                            {site.name}
                          </h3>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "14px",
                              color: "#1F1F1F",
                              opacity: 0.6,
                              marginBottom: "14px",
                            }}
                          >
                            <MapPin
                              size={15}
                              style={{ marginRight: "6px", color: "#E77B2E" }}
                            />
                            {site.location}
                          </div>

                          {/* Client Name - Increased Height */}
                          <div
                            style={{
                              backgroundColor: "#F6F6F6",
                              borderRadius: "10px",
                              padding: "14px 16px",
                              marginBottom: "16px",
                              borderLeft: "3px solid #E77B2E",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: "700",
                                color: "#626162",
                                letterSpacing: "0.5px",
                                marginBottom: "6px",
                                textTransform: "uppercase",
                              }}
                            >
                              Client
                            </p>
                            <p
                              style={{
                                fontSize: "15px",
                                fontWeight: "600",
                                color: "#1F1F1F",
                                margin: 0,
                                lineHeight: "1.4",
                              }}
                            >
                              {site.clientName}
                            </p>
                          </div>

                          {/* Key Metrics - 2x2 Grid with Increased Height & Font */}
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: "10px",
                            }}
                          >
                            {/* Duration */}
                            <div
                              style={{
                                backgroundColor: "#F6F6F6",
                                borderRadius: "10px",
                                padding: "14px 12px",
                                border: "1px solid #E5E5E5",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "6px",
                                }}
                              >
                                <Calendar
                                  size={14}
                                  style={{
                                    color: "#E77B2E",
                                    marginRight: "5px",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    color: "#626162",
                                    letterSpacing: "0.4px",
                                    margin: 0,
                                    textTransform: "uppercase",
                                  }}
                                >
                                  Duration
                                </p>
                              </div>
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "700",
                                  color: "#1F1F1F",
                                  margin: 0,
                                }}
                              >
                                {site.duration}
                              </p>
                            </div>

                            {/* Project Value */}
                            <div
                              style={{
                                backgroundColor: "#F6F6F6",
                                borderRadius: "10px",
                                padding: "14px 12px",
                                border: "1px solid #E5E5E5",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "6px",
                                }}
                              >
                                <TrendingUp
                                  size={14}
                                  style={{
                                    color: "#E77B2E",
                                    marginRight: "5px",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    color: "#626162",
                                    letterSpacing: "0.4px",
                                    margin: 0,
                                    textTransform: "uppercase",
                                  }}
                                >
                                  Value
                                </p>
                              </div>
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "700",
                                  color: "#1F1F1F",
                                  margin: 0,
                                }}
                              >
                                ₹{site.projectValue} Cr
                              </p>
                            </div>

                            {/* OB Work */}
                            <div
                              style={{
                                backgroundColor: "#F6F6F6",
                                borderRadius: "10px",
                                padding: "14px 12px",
                                border: "1px solid #E5E5E5",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "6px",
                                }}
                              >
                                <Hammer
                                  size={14}
                                  style={{
                                    color: "#E77B2E",
                                    marginRight: "5px",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    color: "#626162",
                                    letterSpacing: "0.4px",
                                    margin: 0,
                                    textTransform: "uppercase",
                                  }}
                                >
                                  OB Work
                                </p>
                              </div>
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "700",
                                  color: "#1F1F1F",
                                  margin: 0,
                                }}
                              >
                                {site.OB_work} L m³
                              </p>
                            </div>

                            {/* Coal Work */}
                            <div
                              style={{
                                backgroundColor: "#F6F6F6",
                                borderRadius: "10px",
                                padding: "14px 12px",
                                border: "1px solid #E5E5E5",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "6px",
                                }}
                              >
                                <Package
                                  size={14}
                                  style={{
                                    color: "#E77B2E",
                                    marginRight: "5px",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    color: "#626162",
                                    letterSpacing: "0.4px",
                                    margin: 0,
                                    textTransform: "uppercase",
                                  }}
                                >
                                  Coal Work
                                </p>
                              </div>
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "700",
                                  color: "#1F1F1F",
                                  margin: 0,
                                }}
                              >
                                {site.Coal_work} L MT
                              </p>
                            </div>
                          </div>
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
                          backgroundColor: "#FFFFFF",
                          border: "2px solid #E5E5E5",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          cursor: "pointer",
                          zIndex: 10,
                          color: "#E77B2E",
                          transition: "all 0.2s ease",
                        }}
                        className="hover:bg-[#E77B2E] hover:text-white hover:border-[#E77B2E]"
                      >
                        <ChevronLeft size={22} strokeWidth={3} />
                      </button>
                      <button
                        onClick={() => scroll("right")}
                        style={{
                          position: "absolute",
                          right: "-20px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          backgroundColor: "#FFFFFF",
                          border: "2px solid #E5E5E5",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          cursor: "pointer",
                          zIndex: 10,
                          color: "#E77B2E",
                          transition: "all 0.2s ease",
                        }}
                        className="hover:bg-[#E77B2E] hover:text-white hover:border-[#E77B2E]"
                      >
                        <ChevronRight size={22} strokeWidth={3} />
                      </button>
                    </>
                  )}
                </div>

                {selectedSites.length > 1 && (
                  <div className="flex items-center justify-center gap-2 text-xs text-[#1F1F1F]/50 font-medium mt-2">
                    <span className="w-8 h-px bg-[#E5E5E5]" />
                    <span>Scroll to view more</span>
                    <span className="w-8 h-px bg-[#E5E5E5]" />
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
        
        button:hover {
          transform: scale(1.05);
        }
        
        button:active {
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
}
