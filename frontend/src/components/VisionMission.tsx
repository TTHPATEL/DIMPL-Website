// import { Handshake } from "lucide-react";
// import { mdiBullseyeArrow } from "@mdi/js";
// import Icon from "@mdi/react";
import aboutusImg from "../assets/Extra/AboutImg.png";
export function VisionMission() {
  return (
    <section className="py-5 md:py-15 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-10 md:gap-30">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-12">
              <div className="group relative">
                <img src={aboutusImg} alt="" />
              </div>

              <div className="group relative flex flex-col gap-10 justify-around">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#E5710A] mb-5 group-hover:text-[#E5710A] transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-[#605F5A]/80 text-base lg:text-lg leading-relaxed">
                    Focused on growing sustainable production, delivering on our
                    commitments to excellence and valuing and developing our
                    employees through continuous innovation and responsible
                    mining practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#E5710A] mb-5 group-hover:text-[#E5710A] transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-[#605F5A]/80 text-base lg:text-lg leading-relaxed">
                    To deliver world-class mining solutions through operational
                    excellence, cutting-edge technology, and unwavering
                    commitment to safety, environmental stewardship, and
                    stakeholder satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
