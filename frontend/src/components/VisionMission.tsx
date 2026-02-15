import { Handshake } from "lucide-react";
import { mdiBullseyeArrow } from "@mdi/js";
import Icon from "@mdi/react";
export function VisionMission() {
  return (
    <section className="py-5 md:py-15 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-10 md:gap-30">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision Card */}
              <div className="group relative">
                <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xs transition-all duration-500 border border-slate-100 group-hover:border-orange-200 h-full">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-all duration-500">
                      <Handshake
                        className="w-8 h-8 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-2 border-2 border-orange-200/50 rounded-2xl group-hover:border-orange-300 group-hover:scale-106 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#605F5A] mb-5 group-hover:text-[#E5710A] transition-colors duration-300">
                      Our Vision
                    </h3>
                    <p className="text-[#605F5A]/70 text-base lg:text-lg leading-relaxed">
                      Focused on growing sustainable production, delivering on
                      our commitments to excellence and valuing and developing
                      our employees through continuous innovation and
                      responsible mining practices.
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative">
                <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-md hover:shadow-xs transition-all duration-500 border border-slate-100 group-hover:border-slate-300 h-full">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-linear-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200 group-hover:scale-110 transition-all duration-500">
                      <Icon
                        path={mdiBullseyeArrow}
                        size={1.5}
                        className="text-white group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-2 border-2 border-slate-200/50 rounded-2xl group-hover:border-slate-300 group-hover:scale-106 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#605F5A] mb-5 group-hover:text-slate-700 transition-colors duration-300">
                      Our Mission
                    </h3>
                    <p className="text-[#605F5A]/70 text-base lg:text-lg leading-relaxed">
                      To deliver world-class mining solutions through
                      operational excellence, cutting-edge technology, and
                      unwavering commitment to safety, environmental
                      stewardship, and stakeholder satisfaction.
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-slate-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
