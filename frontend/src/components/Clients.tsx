import { Award, Handshake, Shield, TrendingUp } from "lucide-react";

export function Clients() {
  const clients = [
    "Coal India Limited",
    "Singareni Collieries Company Ltd",
    "Gujarat Mineral Development Corporation",
    "Mahanadi Coalfields Limited",
    "Western Coalfields Limited",
    "Adani Enterprises",
    "Reliance Industries",
    "JSW Group",
  ];

  const trustFactors = [
    {
      icon: Award,
      title: "ISO Certified",
      description: "Quality & Safety Management Systems",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Zero compromise on safety standards",
    },
    {
      icon: Handshake,
      title: "Long-term Partnerships",
      description: "Trusted by leading PSUs & corporates",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "9+ years of consistent delivery",
    },
  ];

  return (
    <section className="py-20 bg-[#F6F6F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Factors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
              Why Leading Companies Trust Us
            </h2>
            <div className="w-24 h-1 bg-[#E5710A] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E5710A] mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-[#605F5A] mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-sm text-[#605F5A]/70">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clients Section */}
        <div className="bg-white p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#605F5A] mb-4">
              Our Valued Clients
            </h2>
            <p className="text-[#605F5A]/70">
              Proud to serve India's leading mining and infrastructure companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 border border-gray-200 hover:border-[#E5710A] hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#605F5A] group-hover:bg-[#E5710A] flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                    <span className="text-white text-2xl font-bold">
                      {client.charAt(0)}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#605F5A] leading-tight">
                    {client}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#605F5A] italic">
              "Building lasting relationships through excellence in execution"
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-[#605F5A] p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Durga Infra can deliver value to your mining and
            infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E5710A] text-white hover:bg-[#d66609] transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#605F5A] transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
