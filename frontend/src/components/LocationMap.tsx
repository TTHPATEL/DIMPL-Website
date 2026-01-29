import { MapPin } from "lucide-react";

export function LocationMap() {
  const locations = [
    { name: "Tadkeshwar", state: "Gujarat", x: "22%", y: "45%" },
    { name: "Dhiruli", state: "Madhya Pradesh", x: "40%", y: "48%" },
    { name: "Parsa Kente", state: "Chhattisgarh", x: "52%", y: "55%" },
    { name: "Talabira", state: "Odisha", x: "58%", y: "60%" },
    { name: "PK OC 2", state: "Telangana", x: "45%", y: "68%" },
    { name: "PL OC 4", state: "Telangana", x: "47%", y: "70%" },
  ];

  return (
    <section className="py-20 bg-[#F6F6F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
            Our Presence Across India
          </h2>
          <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-6"></div>
          <p className="text-lg text-[#605F5A]/80 max-w-3xl mx-auto">
            Active operations across 5 states, delivering excellence at every
            location.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-lg">
          <div className="relative max-w-4xl mx-auto">
            {/* India Map SVG Outline */}
            <div className="relative w-full" style={{ paddingBottom: "100%" }}>
              <svg
                viewBox="0 0 500 600"
                className="absolute inset-0 w-full h-full"
                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
              >
                {/* Simplified India Map Outline */}
                <path
                  d="M 150 80 L 180 60 L 220 55 L 250 65 L 280 80 L 300 100 L 310 130 L 315 160 L 320 200 L 325 240 L 330 280 L 335 320 L 340 360 L 340 400 L 335 440 L 325 470 L 310 490 L 290 500 L 270 505 L 250 500 L 230 490 L 210 475 L 190 455 L 175 430 L 165 400 L 160 370 L 155 340 L 150 310 L 148 280 L 147 250 L 148 220 L 150 190 L 152 160 L 155 130 L 158 110 Z M 280 480 L 295 495 L 305 510 L 310 525 L 308 540 L 300 550 L 285 555 L 270 553 L 258 545 L 250 530 L 248 515 L 252 500 L 265 490 Z"
                  fill="#605F5A"
                  fillOpacity="0.1"
                  stroke="#605F5A"
                  strokeWidth="2"
                />

                {/* Location Markers */}
                {locations.map((location, index) => (
                  <g key={index}>
                    {/* Pulse Animation Circle */}
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r="8"
                      fill="#E5710A"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        from="8"
                        to="20"
                        dur="2s"
                        begin={`${index * 0.3}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.6"
                        to="0"
                        dur="2s"
                        begin={`${index * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* Pin */}
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r="6"
                      fill="#E5710A"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </g>
                ))}
              </svg>

              {/* Location Labels */}
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 group"
                  style={{ left: location.x, top: location.y }}
                >
                  <div className="mt-8 bg-white px-3 py-2 shadow-lg border-l-4 border-[#E5710A] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <div className="font-bold text-[#605F5A] text-sm">
                      {location.name}
                    </div>
                    <div className="text-xs text-[#605F5A]/70">
                      {location.state}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location List */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-[#F6F6F6] hover:bg-[#E5710A]/10 transition-colors"
              >
                <MapPin className="text-[#E5710A] flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-[#605F5A] text-sm">
                    {location.name}
                  </div>
                  <div className="text-xs text-[#605F5A]/70">
                    {location.state}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
