// import { ChevronRight } from "lucide-react";
// import miningVideo from "@/assets/Video/Durga Mining 4K.mp4";
import bgImage from "@/assets/BG Images/BG2.png";
export function Hero() {
  return (
    <section
      id="home"
      // className="relative h-[100vh] min-h-[600px] flex items-center pt-[88px] overflow-hidden"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={miningVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img src={bgImage} alt="" />

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#605F5A]/95 via-[#605F5A]/40 to-[#605F5A]/30"></div> */}
        {/* <div className="absolute inset-0 bg-black/25"></div> */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content */}
      {/* <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="max-w-3xl">
          {/* <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#E5710A] text-white text-sm tracking-wide">
              DELIVERING EXCELLENCE SINCE 2015
            </span>
          </div> */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Industry Through{" "}
            <span className="text-[#E5710A]"> Responsible Mining</span>
          </h1>

          {/* <h2 className="text-2xl md:text-3xl text-white/90 mb-6">
            Powering Nation's Growth Through Scale, Safety & Execution
            Excellence
          </h2> */}

          <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
            Durga Infra Private Limited is a leading mining and infrastructure
            company specializing in HEMM operations, mine development, and
            large-scale mineral extraction. With a robust fleet of 350+
            equipment and operations across multiple states, we deliver
            reliable, safe, and efficient mining solutions nationwide.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E5710A] text-white hover:bg-[#d66609] transition-colors group"
            >
              Know More About Us
              <ChevronRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#605F5A] transition-colors"
            >
              View Our Projects
            </a>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
}
