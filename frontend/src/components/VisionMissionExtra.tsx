import { Target, Lightbulb } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-3">
            Our Vision & Mission
          </h2>
          <p className="text-[#605F5A]/70 text-lg max-w-2xl mx-auto">
            Driving sustainable growth through innovation and excellence
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="group relative bg-gradient-to-br from-[#F6F6F6] to-white rounded-2xl p-8 lg:p-10 border border-[#E5E5E5] hover:border-[#E5710A] transition-all duration-500 hover:shadow-2xl overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5710A]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-[#E5710A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#E5710A] transition-all duration-300 group-hover:scale-110">
                <Target
                  size={32}
                  className="text-[#E5710A] group-hover:text-white transition-colors duration-300"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#605F5A] mb-4">
                Our Vision
              </h3>
              <p className="text-[#605F5A]/80 text-base lg:text-lg leading-relaxed">
                To be India's most trusted and technologically advanced mining
                contractor, setting industry benchmarks in safety, efficiency,
                and environmental stewardship while powering the nation's
                infrastructure growth.
              </p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E5710A] to-[#E77B2E] group-hover:w-full transition-all duration-500" />
          </div>

          {/* Mission Card */}
          <div className="group relative bg-gradient-to-br from-[#F6F6F6] to-white rounded-2xl p-8 lg:p-10 border border-[#E5E5E5] hover:border-[#E5710A] transition-all duration-500 hover:shadow-2xl overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5710A]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-[#E5710A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#E5710A] transition-all duration-300 group-hover:scale-110">
                <Lightbulb
                  size={32}
                  className="text-[#E5710A] group-hover:text-white transition-colors duration-300"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#605F5A] mb-4">
                Our Mission
              </h3>
              <div className="space-y-3">
                <p className="text-[#605F5A]/80 text-base lg:text-lg leading-relaxed">
                  To deliver exceptional mining and infrastructure solutions
                  through:
                </p>
                <ul className="space-y-2 text-[#605F5A]/80 text-base lg:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#E5710A] mr-2 font-bold">•</span>
                    <span>State-of-the-art equipment and technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5710A] mr-2 font-bold">•</span>
                    <span>
                      Unwavering commitment to safety and sustainability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5710A] mr-2 font-bold">•</span>
                    <span>Skilled workforce and operational excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E5710A] mr-2 font-bold">•</span>
                    <span>Building lasting partnerships with stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E5710A] to-[#E77B2E] group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
