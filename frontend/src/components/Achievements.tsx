import trophy from "../assets/Extra/Trophy.png";

export default function Achievements() {
  const points = [
    {
      title: "Production Commitment",
      text: "Consistently achieving targeted coal and lignite production since commencement.",
    },
    {
      title: "Difficult Site Capability",
      text: "Efficient operations in complex geological and terrain conditions.",
    },
    {
      title: "Rajpardi GMDC Operations",
      text: "Dewatering approx. 50,000 m³/day to ensure continuous lignite extraction.",
    },
    {
      title: "Tadkeshwar Performance",
      text: "Achieving 1,00,000 m³/day OB removal with strict safety precautions.",
    },
    {
      title: "Talabira Coal Production",
      text: "Resolved operational challenges and achieved 1 million MT/month output.",
    },
    {
      title: "SCCL Manuguru Operations",
      text: "OB removal at 6 km lead and 300 m lift demonstrating strong capability.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#626162] mb-6">
            Our Operational Excellence
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] mx-auto mb-8 rounded-full"></div>

          {/* <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-[#626162]/80 leading-relaxed font-light">
              Meet the leaders of DIMPL who guide the company with experience
              and strong values.
            </p>
          </div> */}
        </div>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={trophy}
                alt="Achievements & Excellence"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* overlay gradient */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Right Content */}
          <div>
            {/* <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-5">
              Operational Excellence
            </h2>

            <div className="w-20 h-1.5 bg-gradient-to-r from-[#E77B2E] to-[#F9A056] mb-8 rounded-full"></div> */}

            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4 group">
                  {/* Premium Bullet */}
                  <div className="mt-2">
                    <div className="w-3 h-3 rounded-full bg-[#E77B2E] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#605F5A]">
                      {point.title}
                    </h4>
                    <p className="text-[#605F5A]/70 text-sm leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
