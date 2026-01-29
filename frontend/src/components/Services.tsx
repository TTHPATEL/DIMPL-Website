import { Drill, Mountain, Pickaxe, Settings } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Drill,
      title: "HEMM Operations",
      description:
        "Advanced Heavy Earth Moving Machinery operations with 350+ fleet strength including excavators, dumpers, dozers, and surface miners for large-scale mining projects.",
    },
    {
      icon: Mountain,
      title: "Mine Development & Operations",
      description:
        "End-to-end MDO services from mine planning and development to full-scale production operations, ensuring optimal resource extraction and regulatory compliance.",
    },
    {
      icon: Pickaxe,
      title: "Conventional Mining",
      description:
        "Expertise in traditional mining methods including drilling, blasting, loading, and hauling operations for coal and other minerals across diverse geological conditions.",
    },
    {
      icon: Settings,
      title: "Value-Added Mining Services",
      description:
        "Comprehensive support services including site management, equipment maintenance, safety systems, and operational optimization for enhanced productivity.",
    },
  ];

  return (
    <section className="py-20 bg-[#F6F6F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-6"></div>
          <p className="text-lg text-[#605F5A]/80 max-w-3xl mx-auto">
            Comprehensive mining and infrastructure solutions backed by
            cutting-edge technology, experienced workforce, and unwavering
            commitment to safety and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-[#E5710A]"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#E5710A]/10 flex items-center justify-center group-hover:bg-[#E5710A] transition-colors duration-300">
                    <Icon
                      className="text-[#E5710A] group-hover:text-white transition-colors duration-300"
                      size={32}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#605F5A] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#605F5A]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
