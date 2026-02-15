import {
  Trophy,
  Target,
  Handshake,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Industry Recognition",
      description:
        "Multiple awards for excellence in mining operations and safety standards",
      year: "2020-2024",
    },
    {
      icon: Target,
      title: "Project Milestones",
      description:
        "Successfully completed 50+ major mining and infrastructure projects",
      year: "Since 1994",
    },
    {
      icon: Handshake,
      title: "Trusted Partner",
      description:
        "Long-term partnerships with leading PSUs and private sector companies",
      year: "30+ Years",
    },
    {
      icon: TrendingUp,
      title: "Consistent Growth",
      description:
        "Year-on-year revenue growth with expanding operational footprint",
      year: "2015-2024",
    },
  ];

  const commitments = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring highest quality standards",
    },
    {
      icon: Award,
      title: "Safety Excellence",
      description:
        "Zero-harm workplace culture with industry-leading safety record",
    },
    {
      icon: Handshake,
      title: "Client Satisfaction",
      description:
        "95%+ client retention rate through exceptional service delivery",
    },
    {
      icon: Target,
      title: "Operational Excellence",
      description:
        "Continuous improvement in efficiency and productivity metrics",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-3">
            Achievements & Commitments
          </h2>
          <p className="text-[#605F5A]/70 text-lg max-w-2xl mx-auto">
            Celebrating success while staying committed to excellence
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#605F5A] mb-8 text-center">
            Our Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E5E5E5] hover:border-[#E5710A] relative overflow-hidden"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5710A]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-[#E5710A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#E5710A] transition-all duration-300 group-hover:scale-110">
                      <Icon
                        size={28}
                        className="text-[#E5710A] group-hover:text-white transition-colors duration-300"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div className="text-sm text-[#E5710A] font-semibold mb-2">
                      {achievement.year}
                    </div>
                    <h4 className="text-lg font-bold text-[#605F5A] mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-[#605F5A]/70 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E5710A] to-[#E77B2E] group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitments Section */}
        <div className="bg-gradient-to-br from-white to-[#F6F6F6] rounded-3xl p-8 lg:p-12 border border-[#E5E5E5]">
          <h3 className="text-3xl font-bold text-[#605F5A] mb-8 text-center">
            Our Commitments
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white hover:bg-[#E5710A]/5 border border-[#E5E5E5] hover:border-[#E5710A] transition-all duration-300 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#E5710A]/10 rounded-lg flex items-center justify-center group-hover:bg-[#E5710A] transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-[#E5710A] group-hover:text-white transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#605F5A] mb-2">
                      {commitment.title}
                    </h4>
                    <p className="text-[#605F5A]/70 text-sm leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-[#605F5A]/80 text-lg mb-6">
              Join us in building India's infrastructure future
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#E5710A] text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-[#d66609] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
