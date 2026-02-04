import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

export function AboutUs() {
  const [expandedCard, setExpandedCard] = useState(null);

  const milestones = [
    {
      id: 1,
      year: "2000",
      decade: "2000s",
      location: "Jharkhand, India",
      title: "Foundation & First Mining Contract",
      shortDesc: "The beginning of a legacy in coal mining operations",
      fullDesc:
        "Established as a pioneering mining contractor with our first major contract at a coal mine in Jharkhand. Starting with a fleet of 20 HEMMs, we laid the foundation for what would become one of India's leading mining service providers. Our commitment to safety and efficiency set us apart from day one.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
      achievements: [
        "20+ HEMM Fleet",
        "First Coal Contract",
        "ISO 9001 Certified",
      ],
    },
    {
      id: 2,
      year: "2005",
      decade: "2005-2009",
      location: "Chhattisgarh, India",
      title: "Expansion into MDO Services",
      shortDesc: "From operators to comprehensive mining partners",
      fullDesc:
        "Marked our strategic entry into Mine Development & Operations, transforming from equipment operators to comprehensive mining partners. This pivotal shift enabled us to serve major PSUs and private sector clients across Central India, establishing long-term partnerships that continue today.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      achievements: [
        "MDO Division Launch",
        "3 Major PSU Contracts",
        "50+ Fleet Expansion",
      ],
    },
    {
      id: 3,
      year: "2010",
      decade: "2010-2014",
      location: "Odisha & Madhya Pradesh, India",
      title: "Multi-State Operations",
      shortDesc: "Scaling across diverse geological terrains",
      fullDesc:
        "Expanded operations across multiple states, achieving a fleet strength of 150+ HEMMs. Successfully executed simultaneous projects in coal, iron ore, and limestone mines, establishing our reputation for operational excellence across varied geological conditions and challenging terrains.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
      achievements: [
        "150+ HEMM Fleet",
        "Multi-Mineral Expertise",
        "5-State Presence",
      ],
    },
    {
      id: 4,
      year: "2015",
      decade: "2015-2019",
      location: "Pan-India Operations",
      title: "Technology Integration Era",
      shortDesc: "Pioneering digital transformation in mining",
      fullDesc:
        "Led the industry in integrating GPS-based fleet management systems and automation in surface mining operations. Achieved multiple ISO certifications for quality, environment, and occupational health & safety management, setting new industry standards for technological excellence.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
      achievements: [
        "GPS Fleet Management",
        "ISO 14001 & 45001",
        "Automation Systems",
      ],
    },
    {
      id: 5,
      year: "2020",
      decade: "2020-2024",
      location: "Nationwide, India",
      title: "350+ Fleet Strength Milestone",
      shortDesc: "Achieving unprecedented scale and safety records",
      fullDesc:
        "Scaled to 350+ HEMM fleet strength with presence across 15+ mining sites. Introduced sustainable mining practices and a zero-harm safety culture, becoming a trusted partner for India's largest mining corporations. Despite pandemic challenges, achieved record production and safety milestones.",
      image:
        "https://images.unsplash.com/photo-1625525701226-fdef2d034d36?w=1200&q=80",
      achievements: [
        "350+ Fleet Strength",
        "Zero Lost-Time Injuries",
        "15+ Active Sites",
      ],
    },
    {
      id: 6,
      year: "2025",
      decade: "2025+",
      location: "Future Forward",
      title: "Green Mining & AI Integration",
      shortDesc: "Leading India's sustainable mining revolution",
      fullDesc:
        "Spearheading the transition to green mining with electric and hybrid equipment trials. Implementing AI-driven predictive maintenance, autonomous haulage systems, and setting new benchmarks in mining efficiency and environmental stewardship. Our vision: zero-emission mining by 2030.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
      achievements: [
        "Electric HEMM Trials",
        "AI Predictive Systems",
        "Carbon Neutral Goal",
      ],
    },
  ];

  const toggleCard = (id: any) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="about" className="min-h-screen py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
            Creating a Lasting
            <span className="block text-[#E5710A]">Legacy</span>
          </h2>
          <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-6"></div>
          <p className="text-lg text-[#605F5A]/80 max-w-3xl mx-auto">
            Two decades of pioneering excellence, transforming India's mining
            landscape through innovation, sustainability, and unwavering
            commitment to safety
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E5710A]/20 via-[#E5710A] to-[#E5710A]/20 transform md:-translate-x-1/2"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isExpanded = expandedCard === milestone.id;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0 z-10">
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#E5710A] rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                        <span className="text-white font-bold text-sm">
                          {milestone.year}
                        </span>
                      </div>
                      {/* Pulse animation */}
                      <div className="absolute inset-0 rounded-full bg-[#E5710A] animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${
                      isLeft ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                        isExpanded ? "ring-4 ring-[#E5710A]/30" : ""
                      }`}
                    >
                      {/* Card Header - Always Visible */}
                      <div
                        className="p-6 md:p-8 cursor-pointer"
                        onClick={() => toggleCard(milestone.id)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <MapPin size={16} className="text-[#E5710A]" />
                              <span className="text-sm font-semibold text-[#E5710A] uppercase tracking-wide">
                                {milestone.location}
                              </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#605F5A] mb-2 group-hover:text-[#E5710A] transition-colors">
                              {milestone.title}
                            </h3>
                            <p className="text-[#605F5A]/70 text-sm md:text-base italic">
                              {milestone.shortDesc}
                            </p>
                          </div>
                          <button className="ml-4 p-2 hover:bg-[#E5710A]/10 rounded-full transition-colors">
                            {isExpanded ? (
                              <ChevronUp className="text-[#E5710A]" size={24} />
                            ) : (
                              <ChevronDown
                                className="text-[#605F5A]"
                                size={24}
                              />
                            )}
                          </button>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#605F5A]/60">
                          <Calendar size={14} />
                          <span className="font-medium">
                            {milestone.decade}
                          </span>
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <div
                        className={`transition-all duration-500 ease-in-out ${
                          isExpanded
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        {/* Animated Image with Pan Effect */}
                        <div className="relative h-72 overflow-hidden bg-[#605F5A]">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-full object-cover animate-slow-pan"
                            style={{
                              animation: isExpanded
                                ? "panZoom 20s ease-in-out infinite"
                                : "none",
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 text-white/90">
                              <Award size={20} className="text-[#E5710A]" />
                              <span className="text-sm font-semibold">
                                Key Milestones
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="p-6 md:p-8 bg-gradient-to-b from-white to-[#F6F6F6]">
                          <p className="text-[#605F5A]/80 leading-relaxed mb-6 text-base md:text-lg">
                            {milestone.fullDesc}
                          </p>

                          {/* Achievement Tags */}
                          <div className="flex flex-wrap gap-3 mb-6">
                            {milestone.achievements.map((achievement, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-white text-[#E5710A] text-sm font-semibold rounded-full border-2 border-[#E5710A]/20 hover:bg-[#E5710A] hover:text-white transition-all duration-300 cursor-default"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>

                          {/* Action Button */}
                          <button className="inline-flex items-center gap-2 text-[#E5710A] font-bold hover:gap-4 transition-all duration-300 group">
                            <span>Explore This Era</span>
                            <ArrowRight
                              size={20}
                              className="group-hover:translate-x-1 transition-transform"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E5710A]/5 via-[#E5710A]/10 to-[#E5710A]/5 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#605F5A] mb-3">
                  Our Impact in Numbers
                </h2>
                <div className="w-24 h-1 bg-[#E5710A] mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "25+", label: "Years of Excellence", icon: "🏆" },
                  { number: "350+", label: "HEMM Fleet Strength", icon: "🚜" },
                  { number: "15+", label: "Active Mining Sites", icon: "⛏️" },
                  { number: "5000+", label: "Dedicated Workforce", icon: "👷" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-110 transition-transform duration-300"
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold text-[#E5710A] mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-[#605F5A]/70 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
      </div>

      <style>{`
        @keyframes panZoom {
          0% {
            transform: scale(1) translateX(0);
          }
          25% {
            transform: scale(1.1) translateX(-5%);
          }
          50% {
            transform: scale(1.15) translateX(0);
          }
          75% {
            transform: scale(1.1) translateX(5%);
          }
          100% {
            transform: scale(1) translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
