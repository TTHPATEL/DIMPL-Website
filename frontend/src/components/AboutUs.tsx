import { useState } from "react";
import { ArrowRight } from "lucide-react";
import dig from "../assets/History Photo/Dig.jpg";
import thermal2 from "../assets/History Photo/Thermal2.jpg";
import thermal3 from "../assets/History Photo/Thermal3.jpg";
import od from "../assets/Mines/GJ.png";
import TL2 from "../assets/Mines/TL2.png";

export function AboutUs() {
  const milestones = [
    {
      id: 1,
      year: "1994",
      // location: "BHUJ-KUTCH, GUJARAT",
      title: "Foundation as Durga Construction Co.",
      description:
        "Durga Construction Co. was established as a partnership firm with a small set of earthwork equipment, including one Tata Hitachi-083 excavator and 4-5 dumpers. The company began its journey as a sub contractor, focusing on basic earthwork activities.",
      image: dig,
    },
    {
      id: 2,
      year: "2000–2010",
      // location: "MULTI-STATE OPERATIONS",
      title: "Steady Growth and Experience",
      description:
        "With growing experience, the firm executed earthwork projects for roads, dams, canals, and thermal power stations. This period marked steady expansion in capability, manpower, and execution of increasingly complex works.",
      image: thermal2,
    },
    {
      id: 3,
      year: "2010–2017",
      // location: "RAJASTHAN & TELANGANA",
      title: "Entry into Large Scale Mining",
      description:
        "The company evolved into a main contractor for State and Central Government projects. Major mining assignments were completed for GMDC, SCCL, and RSMM, establishing a strong presence in coal and lignite mining.",
      image: od,
    },
    {
      id: 4,
      year: "2018–2019",
      // location: "MAHARASHTRA & TELANGANA",
      title: "Handling Complex Geological Conditions",
      description:
        "Projects were executed under challenging site conditions involving hard rock, unstable benches, and long lead and lift requirements. These works strengthened the company’s operational and technical capabilities.",
      image: TL2,
    },
    {
      id: 5,
      year: "2020",
      // location: "PAN-INDIA",
      title: "Transition to Corporate Entity",
      description:
        "On 09/09/2020, the partnership firm was converted into Durga Infra Mining Private Limited. This transition marked a new phase of structured growth, governance, and nationwide operations.",
      image: TL2,
    },
    {
      id: 6,
      year: "2021–2024",
      // location: "GUJARAT & RAJASTHAN",
      title: "Major Mining Achievements",
      description:
        "At GMDC Rajpardi, extensive dewatering of nearly 50,000 cubic meters per day enabled lignite extraction under heavy water ingress. At Tadkeshwar, overburden removal of about 1 lakh cubic meters per day was achieved despite sliding strata.",
      image:
        "https://images.unsplash.com/photo-1581092918484-8cf2c4a5c6d4?w=1200&q=80",
    },
    {
      id: 7,
      year: "2025",
      // location: "NATIONWIDE PRESENCE",
      title: "Established National Footprint",
      description:
        "DIMPL operates multiple large mining projects across India with a strong fleet of equipment and a skilled workforce. The company continues to deliver consistent performance across diverse geological and operational conditions.",
      image:
        "https://images.unsplash.com/photo-1581092918484-8cf2c4a5c6d4?w=1200&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeMilestone = milestones[activeIndex];
  const progressHeight = ((activeIndex + 1) / milestones.length) * 100;

  return (
    <section id="about" className="min-h-screen py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
          Creating a Lasting <span className="text-[#E5710A]">Legacy</span>
        </h2>
        <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-6"></div>
        <p className="text-lg text-[#605F5A]/80 max-w-3xl mx-auto">
          Built on strength and reliability
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-19 items-start">
          {/* Left Column */}
          <div className="lg:w-1/3">
            {/* <div className="space-y-4 mb-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#605F5A] leading-tight">
                Creating a Lasting
                <span className="block text-[#E5710A]">Legacy</span>
              </h2>
              <div className="w-16 h-1 bg-[#E5710A]"></div>
            </div> */}
            <div className="text-lg text-justify text-[#605F5A]/80 leading-relaxed">
              <p>
                <strong className="text-[#605F5A]">
                  Durga Infra Mining Private Limited (DIMPL)
                </strong>{" "}
                is a leading mining company engaged in comprehensive mine
                development and operations across India. The company specializes
                in overburden removal and coal and lignite extraction, supported
                by modern equipment and two decades of hands-on industry
                experience.
              </p>

              <p className="pt-4">
                Over the years, DIMPL has executed a wide range of
                infrastructure and mining projects including roads, dams,
                canals, and thermal power stations, and focuses on large-scale
                coal and lignite mining operations, delivering high-volume
                production under complex geological and site conditions.
              </p>

              <p className="text-[#E5710A] font-semibold italic pt-4">
                Focused on coal and lignite mining with proven experience across
                diverse projects.
              </p>
            </div>

            {/* <div className="space-y-6 text-base text-[#605F5A]/80 leading-relaxed">
              <p>
                <strong className="text-[#605F5A]">
                  Durga Infra Mining Private Limited (DIMPL)
                </strong>{" "}
                is a leading mining contractor engaged in comprehensive mine
                development and operations across India. The company specializes
                in overburden removal and coal and lignite extraction, supported
                by modern equipment and decades of hands-on industry experience.
              </p>

              <p>
                With capabilities spanning earthwork, drilling, blasting,
                dewatering, and complete mining operations, DIMPL has
                successfully contributed to major infrastructure and mining
                projects including roads, dams, canals, thermal power stations,
                and large-scale coal and lignite mines.
              </p>

              <p>
                Established in 1994 as Durga Construction Co. with a modest
                beginning of one excavator and a few dumpers, the organization
                has grown steadily into a large-scale mining enterprise. Today,
                DIMPL operates a strong fleet of heavy equipment with a skilled
                workforce and delivers projects directly for leading State and
                Central Government bodies as well as prominent private sector
                organizations.
              </p>

              <p>
                The company has executed landmark projects across Gujarat,
                Rajasthan, Telangana, Maharashtra, Odisha, Chhattisgarh, and
                Madhya Pradesh, overcoming diverse site conditions ranging from
                waterlogged mines requiring extensive dewatering to unstable
                geological formations demanding precise and safe execution.
              </p>

              <p className="text-[#E5710A] font-semibold italic">
                Consistently delivering results across every terrain and
                challenge.
              </p>
            </div> */}

            <div className="pt-8">
              <button className="group inline-flex items-center gap-2 text-[#E5710A] font-bold border-b-2 border-[#E5710A] pb-1 hover:gap-4 transition-all">
                <span>Explore Our Journey</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:w-2/3 w-full relative group">
            <div className="flex gap-10 items-stretch h-[600px]">
              <div className="flex flex-col justify-center gap-6 py-4">
                {milestones.map((m, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setActiveIndex(idx)}
                      className="cursor-pointer"
                    >
                      <div
                        className={`min-w-[100px] px-4 py-2 rounded-full transition-all ${
                          isActive
                            ? "bg-[#E5710A] text-white"
                            : "text-gray-400 hover:bg-[#E5710A]/10"
                        }`}
                      >
                        <span className="text-md font-bold">{m.year}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={activeMilestone.image}
                  alt={activeMilestone.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="text-[#F1C40F] font-bold text-sm uppercase">
                    {/* {activeMilestone.location} */}
                  </span>
                  <h3 className="text-4xl font-bold text-white mt-2">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-gray-200 text-lg mt-3">
                    {activeMilestone.description}
                  </p>
                </div>

                <div className="absolute top-0 left-0 w-1.5 h-full bg-white/10">
                  <div
                    className="w-full bg-[#E5710A]"
                    style={{ height: `${progressHeight}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
