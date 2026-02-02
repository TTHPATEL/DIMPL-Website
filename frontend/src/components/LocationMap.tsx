import { useEffect, useState } from "react";
import { LOCATION_DATA } from "../data/LocationData";
import type { Site } from "../data/LocationData";
import { MapPin } from "lucide-react";
// import { Info } from "lucide-react";

declare global {
  interface Window {
    simplemaps_countrymap: any;
  }
}

export function LocationMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedSites, setSelectedSites] = useState<Site[]>([]);

  useEffect(() => {
    // Determine if scripts are already loaded
    const isMapLoaded = document.getElementById("simplemaps-mapdata");
    const isCountryLoaded = document.getElementById("simplemaps-countrymap");

    if (!isMapLoaded) {
      const mapdata = document.createElement("script");
      mapdata.id = "simplemaps-mapdata";
      mapdata.src = "/mapdata.js";
      mapdata.async = false;
      document.body.appendChild(mapdata);
    }

    if (!isCountryLoaded) {
      const countrymap = document.createElement("script");
      countrymap.id = "simplemaps-countrymap";
      countrymap.src = "/countrymap.js";
      countrymap.async = false;
      document.body.appendChild(countrymap);
    }

    // Checking for the map object availability to attach hooks
    const interval = setInterval(() => {
      if (
        window.simplemaps_countrymap &&
        typeof window.simplemaps_countrymap.hooks !== "undefined"
      ) {
        clearInterval(interval);

        window.simplemaps_countrymap.hooks.click_state = (id: string) => {
          if (LOCATION_DATA[id]) {
            setSelectedState(id);
            const sites = LOCATION_DATA[id] || [];
            setSelectedSites(sites);
          }
        };
      }
    }, 100);

    // Add global click listener to capture map clicks immediately
    const handleMapClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | SVGElement;
      // SimpleMaps usually adds classes like sm_state_INGJ
      // search for class starting with sm_state_
      let current: HTMLElement | SVGElement | null = target;
      while (current && current.id !== "map") {
        if (current.classList) {
          for (let i = 0; i < current.classList.length; i++) {
            const cls = current.classList[i];
            if (cls.startsWith("sm_state_")) {
              const stateId = cls.replace("sm_state_", "");
              // Only update if it's a valid state ID from our data or map
              if (stateId && LOCATION_DATA[stateId]) {
                setSelectedState(stateId);
                const sites = LOCATION_DATA[stateId] || [];
                setSelectedSites(sites);
                return; // Stop once we find the state
              }
            }
          }
        }
        current = current.parentElement;
      }
    };

    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.addEventListener("click", handleMapClick);
    }

    return () => {
      clearInterval(interval);
      if (mapElement) {
        mapElement.removeEventListener("click", handleMapClick);
      }
    };
  }, []);

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
            <div id="map" className="w-full h-full" />
          </div>

          {/* DETAILS CARD */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {
              !selectedState ? (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center h-[500px]">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Explore Our Locations
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    Click on a highlighted state in the map to view detailed
                    information about our mining projects and sites.
                  </p>
                </div>
              ) : selectedSites.length > 0 ? (
                <div className="flex flex-col gap-6 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {selectedSites.map((site) => (
                    <div
                      key={site.id}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="h-48 w-full relative overflow-hidden group">
                        <img
                          src={site.image}
                          alt={site.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#E5710A] shadow-sm">
                          {site.state}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-[#605F5A] mb-1">
                              {site.name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="w-4 h-4 mr-1 text-[#E5710A]" />
                              {site.location}
                            </div>
                          </div>
                        </div>

                        <div className="w-full h-px bg-gray-100 mb-4" />

                        <p className="text-gray-600 leading-relaxed text-sm">
                          {site.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null
              // (
              //    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center h-[300px]">
              //     <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
              //       <Info className="w-8 h-8 text-[#E5710A]" />
              //     </div>
              //     <h3 className="text-xl font-semibold text-gray-800 mb-2">
              //       No Active Projects
              //     </h3>
              //     <p className="text-gray-500">
              //       We currently don't have listed projects in this region.
              //     </p>
              //   </div>
              // )
            }
          </div>
        </div>
      </div>
    </section>
  );
}
