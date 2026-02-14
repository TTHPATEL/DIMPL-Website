import { Users, Truck, Mountain, Factory, MapPin, Award } from "lucide-react";
import CountUp from "./ui/CountUp";

export function PerformanceStatsPremium() {
  const stats = [
    {
      icon: Award,
      value: 30,
      suffix: "+",
      label: "Years of Expertise",
      description: "Proven mining & infrastructure",
    },
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Workforce",
      description: "On-ground professionals",
      separator: ",",
    },
    {
      icon: Truck,
      value: 1200,
      suffix: "+",
      label: "Equipment Fleet",
      description: "Heavy machinery in service",
      separator: ",",
    },
    {
      icon: Mountain,
      value: 147,
      suffix: "+ Million",
      label: "CuM/Year Overburden",
      description: "Total awarded quantity",
      separator: ",",
    },
    {
      icon: Factory,
      value: 13,
      suffix: "+ Million",
      label: "MT/Year Capacity",
      description: "Mineral production",
    },
    {
      icon: MapPin,
      value: 7,
      suffix: "+",
      label: "Indian States",
      description: "Active & completed projects",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#626162] mb-4">
            Performance Proven by Numbers
          </h2>
          <div className="w-24 h-1 bg-[#E77B2E] mx-auto mb-4" />
          <p className="text-[#1F1F1F]/70 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Delivering consistent results
            across operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-[#F6F6F6] rounded-xl p-6 border border-[#E5E5E5] hover:border-[#E77B2E] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 bg-[#E77B2E]/10 rounded-lg flex items-center justify-center group-hover:bg-[#E77B2E] transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-[#E77B2E] group-hover:text-white transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </div>
                  {/* Content */}

                  <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-[#1F1F1F] mb-1 leading-none">
                      <CountUp
                        from={0}
                        to={stat.value}
                        separator={stat.separator || ""}
                        direction="up"
                        duration={1}
                        className="count-up-text"
                        startCounting={true}
                      />
                      {stat.suffix && (
                        <span className="ml-1">{stat.suffix}</span>
                      )}
                    </h3>
                    <p className="text-[#626162] font-semibold text-lg mb-1">
                      {stat.label}
                    </p>
                    <p className="text-[#1F1F1F]/60 text-md leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
