import { useState } from "react";
import { LOCATION_DATA } from "../data/LocationData";
import type { Site } from "../data/LocationData";
import { MapPin, Info } from "lucide-react";
import IndiaMap from "./IndiaMap";

declare global {
  interface Window {
    simplemaps_countrymap: any;
  }
}

export function LocationMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedSites, setSelectedSites] = useState<Site[]>([]);

  const handleStateSelect = (stateId: string | null) => {
    setSelectedState(stateId);
    if (stateId && LOCATION_DATA[stateId]) {
      setSelectedSites(LOCATION_DATA[stateId]);
    } else {
      setSelectedSites([]);
    }
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  maxHeight: "800px",
                  overflowY: "auto",
                  paddingRight: "10px",
                }}
              >
                {selectedSites.map((site) => (
                  <div
                    key={site.id}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      border: "1px solid #eee",
                      transition: "transform 0.3s ease",
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
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#E5710A",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                      >
                        {site.state}
                      </div>
                    </div>

                    <div style={{ padding: "24px" }}>
                      <h3
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "20px",
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
                          lineHeight: "1.6",
                        }}
                      >
                        {site.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
