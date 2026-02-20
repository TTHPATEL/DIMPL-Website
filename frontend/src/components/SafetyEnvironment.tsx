import { Leaf, Award, Users, Droplet, TreePine, HardHat } from "lucide-react";
import planning from "../assets/Extra/planning.jpeg";
import envTruck from "../assets/Extra/EnvTruck.jpg";
// import envTruck from "../assets/Extra/temp.jpg";
export function SafetyEnvironment() {
  const safetyFeatures = [
    {
      icon: Award,
      title: "Government Approved AA Class",
      description:
        "Officially recognized for meeting top-tier government quality and compliance standards",
    },
    {
      icon: HardHat,
      title: "Advanced Safety Equipment",
      description:
        "Equipped with modern protective gear and tools to ensure maximum on site safety",
    },
    {
      icon: Users,
      title: "Trained Workforce",
      description: "Regular safety training and certification programs",
    },
  ];

  const environmentFeatures = [
    {
      icon: Leaf,
      title: "Sustainable Mining",
      description: "Eco-friendly practices minimizing environmental impact",
    },
    {
      icon: Droplet,
      title: "Water Management",
      description: "Advanced water conservation and recycling systems",
    },
    {
      icon: TreePine,
      title: "Reclamation",
      description: "Post-mining land restoration and afforestation",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-3">
            Safety & Environment
          </h2>
          <p className="text-[#605F5A]/70 text-lg max-w-2xl mx-auto">
            Committed to the highest standards of safety and environmental
            responsibility
          </p>
        </div>

        {/* Safety Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={planning}
                  alt="Mining Safety Operations"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Safety First, Always
                  </h3>
                  <p className="text-white/90 text-sm">
                    Our commitment to safety is unwavering across all operations
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-[#605F5A] mb-6">
                Workplace Safety Excellence
              </h3>
              <p className="text-[#605F5A]/80 text-lg leading-relaxed mb-8">
                At DIMPL, safety isn’t just a priority - it’s a core value. We
                maintain a zero-harm culture through strong safety systems,
                regular training, and modern safety equipment to keep our
                workforce safe.
              </p>

              {/* Safety Features */}
              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F6F6] hover:bg-[#E5710A]/5 border border-transparent hover:border-[#E5710A] transition-all duration-300 group"
                    >
                      <div className="shrink-0 w-12 h-12 bg-[#E5710A]/10 rounded-lg flex items-center justify-center group-hover:bg-[#E5710A] transition-colors duration-300">
                        <Icon
                          size={24}
                          className="text-[#E5710A] group-hover:text-white transition-colors duration-300"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#605F5A] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-[#605F5A]/70 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Environment Section */}
        <div className="bg-gradient-to-br from-[#F6F6F6] to-white rounded-3xl p-8 lg:p-12 border border-[#E5E5E5]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-[#605F5A] mb-6">
                Environmental Responsibility
              </h3>
              <p className="text-[#605F5A]/80 text-lg leading-relaxed mb-8">
                We recognize our responsibility to protect and preserve the
                environment. Our operations integrate sustainable practices,
                from water conservation to land reclamation, ensuring minimal
                ecological impact.
              </p>

              {/* Environment Features */}
              <div className="space-y-4">
                {environmentFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-[#E5710A]/5 border border-transparent hover:border-[#E5710A] transition-all duration-300 group"
                    >
                      <div className="shrink-0 w-12 h-12 bg-[#E5710A]/10 rounded-lg flex items-center justify-center group-hover:bg-[#E5710A] transition-colors duration-300">
                        <Icon
                          size={24}
                          className="text-[#E5710A] group-hover:text-white transition-colors duration-300"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#605F5A] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-[#605F5A]/70 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6">
              <img
                src={envTruck}
                alt=""
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              {/* <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E5E5E5] hover:border-[#E5710A] transition-all duration-300 group">
                <div className="text-4xl font-bold text-[#E5710A] mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-sm text-[#605F5A]/80 font-medium">
                  Compliance with Environmental Norms
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E5E5E5] hover:border-[#E5710A] transition-all duration-300 group">
                <div className="text-4xl font-bold text-[#E5710A] mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm text-[#605F5A]/80 font-medium">
                  Acres Reclaimed & Afforested
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E5E5E5] hover:border-[#E5710A] transition-all duration-300 group">
                <div className="text-4xl font-bold text-[#E5710A] mb-2 group-hover:scale-110 transition-transform duration-300">
                  30%
                </div>
                <div className="text-sm text-[#605F5A]/80 font-medium">
                  Water Recycling Rate
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E5E5E5] hover:border-[#E5710A] transition-all duration-300 group">
                <div className="text-4xl font-bold text-[#E5710A] mb-2 group-hover:scale-110 transition-transform duration-300">
                  Zero
                </div>
                <div className="text-sm text-[#605F5A]/80 font-medium">
                  Major Environmental Incidents
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafetyEnvironment;
