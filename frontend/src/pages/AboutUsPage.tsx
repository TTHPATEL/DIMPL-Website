import mineGJ from "../assets/Mines/GJ.png";
import { VisionMission } from "../components/VisionMission";
import { SafetyEnvironment } from "../components/SafetyEnvironment";
import Achievements from "../components/Achievements";
import Leardership from "../components/Leardership";

export function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] min-h-[300px] flex items-center overflow-hidden"
        id="about"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={mineGJ} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl pt-15">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building India's{" "}
              <span className="text-[#E5710A]">Infrastructure Future</span>
            </h1>

            <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
              Three decades of excellence in mining and infrastructure
              development, powered by innovation, safety, and unwavering
              commitment.
            </p>
          </div>
        </div> */}

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div> */}
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-3">
              About DIMPL
            </h2>
            <p className="text-[#605F5A]/70 text-lg max-w-2xl mx-auto">
              Who we are and what we do.
            </p>
            <p className="text-[#605F5A]/70 pt-7 text-lg max-w-4xl mx-auto text-justify">
              <strong>Durga Infra Mining Private Limited (DIMPL)</strong>,
              formerly known as
              <strong> Durga Construction Co.</strong>, is a well-established
              mining and earthwork company in India. The company has strong
              experience in coal and lignite mining, overburden and interburden
              removal, and large-scale earthwork projects. With a strong fleet
              of modern equipment and skilled manpower, DIMPL delivers mining
              operations efficiently while maintaining quality, safety, and
              timely execution. The company works with major public and private
              sector clients across multiple states in India.
            </p>
          </div>
          <VisionMission />
        </div>
      </section>
      <Leardership />
      {/* Image */}
      {/* <div className="relative">
        <div className="relative rounded-xl px-7 overflow-hidden shadow-2xl group">
          <img
            src={trophy}
            alt="DIMPL Mining Operations"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div> */}
      {/* <div className="relative">
        <div className="relative rounded-xl px-7 overflow-hidden ">
          <img
            src={trophy}
            alt="DIMPL Mining Operations"
            className="w-full h-[300px] object-cover "
          />
          <div className="absolute inset-0 " />
        </div>
      </div> */}

      <Achievements />
      {/* Safety & Environment */}
      <SafetyEnvironment />

      {/* Achievements */}
      {/* <Achievements /> */}
    </div>
  );
}

export default AboutUsPage;
