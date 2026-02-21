import trophy from "../assets/Extra/Trophy.png";

export default function Achievements() {
  const points = [
    {
      title: "Production Commitment",
      text: "Consistently achieving targeted coal and lignite production since commencement.",
      number: "01",
    },
    {
      title: "Difficult Site Capability",
      text: "Efficient operations in complex geological and terrain conditions.",
      number: "02",
    },
    {
      title: "Rajpardi GMDC Operations",
      text: "Dewatering approx. 50,000 m³/day to ensure continuous lignite extraction.",
      number: "03",
    },
    {
      title: "Tadkeshwar Performance",
      text: "Achieving 1,00,000 m³/day OB removal with strict safety precautions.",
      number: "04",
    },
    {
      title: "Talabira Coal Production",
      text: "Resolved operational challenges and achieved 1 million MT/month output.",
      number: "05",
    },
    {
      title: "SCCL Manuguru Operations",
      text: "OB removal at 6 km lead and 300 m lift demonstrating strong capability.",
      number: "06",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <style>{`
        .achievement-row {
          position: relative;
          cursor: default;
          overflow: hidden;
          border-radius: 12px;
          margin-bottom: 8px;
          background: #f9f9f9;
        }
        .achievement-row .fill-bar {
          display: none;
        }
        /* Number always visible, hover brightens */
        .achievement-row .num {
          color: #e8e8e8;
          transition: color 0.3s ease;
        }
        .achievement-row:hover .num {
          color: #E77B2E;
        }
        /* Title hover color */
        .achievement-row .row-title {
          transition: color 0.3s ease;
        }
        .achievement-row:hover .row-title {
          color: #E77B2E;
        }
        /* Background on hover */
        .achievement-row:hover {
          background: #fdf0e6;
        }
        /* Orange dot always present */
        .achievement-row .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e0e0e0;
          flex-shrink: 0;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .achievement-row:hover .dot {
          background: #E77B2E;
          transform: scale(1.4);
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#626162] mb-6">
            Our Operational Excellence
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="overflow-hidden">
              <img
                src={trophy}
                alt="Achievements & Excellence"
                className="w-full h-[460px] object-contain group-hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            {points.map((point, index) => (
              <div key={index} className="achievement-row pl-6 pr-4 py-[18px]">
                <div className="relative z-10 flex items-center gap-5">
                  {/* Big ghost number */}
                  <span
                    className="num text-4xl font-black select-none leading-none shrink-0 w-10 text-right"
                    style={{
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "-1px",
                    }}
                  >
                    {point.number}
                  </span>

                  {/* Divider dot */}
                  <div className="dot"></div>

                  {/* Text — fixed height, always visible */}
                  <div className="flex-1 min-w-0">
                    <h4 className="row-title text-base lg:text-lg font-bold text-[#605F5A] leading-tight mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm lg:text-base text-[#605F5A]/55 leading-relaxed">
                      {point.text}
                    </p>
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
