import {
  Truck,
  Construction,
  Shield,
  Wrench,
  Wind,
  Droplet,
} from "lucide-react";

export function Fleet() {
  const fleet = [
    {
      icon: Truck,
      name: "Tippers / Dumpers",
      count: "150+",
      capacity: "20-50 MT",
      description: "Heavy-duty dumpers for efficient material transportation",
    },
    {
      icon: Construction,
      name: "Excavators",
      count: "80+",
      capacity: "1.5-10 CuM",
      description: "Hydraulic excavators for loading and digging operations",
    },
    {
      icon: Shield,
      name: "Dozers",
      count: "40+",
      capacity: "D6-D11",
      description: "Bulldozers for land clearing and material pushing",
    },
    {
      icon: Wrench,
      name: "Surface Miners",
      count: "15+",
      capacity: "1000-2000 TPH",
      description: "Advanced surface mining equipment for selective extraction",
    },
    {
      icon: Wind,
      name: "Graders / Loaders",
      count: "35+",
      capacity: "3-8 CuM",
      description: "Motor graders and wheel loaders for site preparation",
    },
    {
      icon: Droplet,
      name: "Water Tankers",
      count: "30+",
      capacity: "10-20 KL",
      description: "Water sprinklers for dust suppression and road maintenance",
    },
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
            Our Fleet Strength
          </h2>
          <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-6"></div>
          <p className="text-lg text-[#605F5A]/80 max-w-3xl mx-auto">
            State-of-the-art HEMM fleet with 350+ equipment ensuring operational
            excellence and timely delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((equipment, index) => {
            const Icon = equipment.icon;
            return (
              <div
                key={index}
                className="relative bg-[#F6F6F6] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group border-l-4 border-[#E5710A]"
              >
                {/* Count Badge */}
                <div className="absolute top-4 right-4 bg-[#E5710A] text-white px-3 py-1 text-sm font-bold">
                  {equipment.count}
                </div>

                <div className="mb-6">
                  <div className="w-20 h-20 bg-white group-hover:bg-[#E5710A]/10 flex items-center justify-center transition-colors duration-300 shadow-md">
                    <Icon
                      className="text-[#E5710A]"
                      size={40}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#605F5A] mb-2">
                  {equipment.name}
                </h3>

                <div className="text-sm text-[#E5710A] font-semibold mb-4">
                  Capacity: {equipment.capacity}
                </div>

                <p className="text-[#605F5A]/70 leading-relaxed">
                  {equipment.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-[#605F5A] p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Modern, Well-Maintained, Mission-Ready
            </h3>
            <p className="text-white/80 text-lg mb-6">
              Our fleet is maintained to the highest standards with regular
              servicing, genuine spare parts, and certified technicians ensuring
              maximum uptime and operational safety.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E5710A] mb-2">
                  95%+
                </div>
                <div className="text-white">Equipment Availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E5710A] mb-2">
                  24/7
                </div>
                <div className="text-white">Maintenance Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E5710A] mb-2">
                  100%
                </div>
                <div className="text-white">Safety Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
