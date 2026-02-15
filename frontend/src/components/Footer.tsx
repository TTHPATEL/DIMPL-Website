import { Phone, MapPin, Mail } from "lucide-react";
import logo from "../assets/Logo/DIMPL_Logo_Long_SVG.svg"; // update path if needed
import linkedinIcon from "../assets/linkedin.png";
export function Footer() {
  return (
    <footer className="bg-[#F6F6F6] text-[#1F1F1F]">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* ===== LOGO + CALL ===== */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="Company Logo"
              className="h-14 object-contain"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <Phone className="text-[#E77B2E]" size={23} />
                <div>
                  <p className="text-md text-[#626162]">Call us</p>
                  <a
                    href="tel:02652780707"
                    className="text-lg font-semibold hover:text-[#E77B2E]"
                  >
                    0265-2711633
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#E77B2E]" size={23} />
                <div>
                  <p className="text-md text-[#626162]">Email us</p>
                  <a
                    href="mailto:info@durgainframining.com"
                    className="text-lg font-semibold hover:text-[#E77B2E]"
                  >
                    info@durgainframining.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== REGISTERED OFFICE ===== */}
          <div>
            <h4 className="font-semibold text-xl mb-4 text-[#626162]">
              Head Office
            </h4>
            <div className="flex gap-3">
              <MapPin className="text-[#E77B2E] mt-1" size={20} />
              <p className="text-lg text-[#1F1F1F]/70 leading-relaxed">
                202, 2nd Floor Balram Complex,
                <br />
                Station Road,
                <br />
                Bhuj, Kutch,
                <br />
                Gujarat - 370001
              </p>
            </div>
          </div>

          {/* ===== CORPORATE OFFICE ===== */}
          <div>
            <h4 className="font-semibold text-xl mb-4 text-[#626162]">
              Corporate Office
            </h4>
            <div className="flex gap-3">
              <MapPin className="text-[#E77B2E] mt-1" size={20} />
              <p className="text-lg text-[#1F1F1F]/70 leading-relaxed">
                101, M.S.Plaza,
                <br />
                Near Abhilasha Cross Road,
                <br />
                New Sama Road, Vadodara,
                <br />
                Gujarat - 390002
              </p>
            </div>
          </div>

          {/* ===== SOCIAL ===== */}
          <div>
            <h4 className="font-semibold text-xl mb-4 text-[#626162]">
              Follow Us on
            </h4>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/durga-infra-mining-pvt-ltd"
                target="_blank"
                className="w-13 h-13 flex items-center justify-center rounded-full
             bg-transparent hover:bg-[#E77B2E]/10 transition-colors duration-300"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-10 w-10" />
              </a>

              {/* <a
                href="https://www.facebook.com/"
                target="_blank"
                className="w-10 h-10 bg-[#E5E5E5] hover:bg-[#E77B2E] hover:text-white flex items-center justify-center transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-10 h-10 bg-[#E5E5E5] hover:bg-[#E77B2E] hover:text-white flex items-center justify-center transition"
              >
                <Instagram size={18} />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-[#E5E5E5] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p className="text-[#1F1F1F]/60 text-center md:text-left">
            ©2026 <b>Durga Infra Mining Pvt. Ltd.</b> All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[#1F1F1F]/60">
            <span>Design By</span>
            <a
              href="https://www.linkedin.com/in/tapasvi-chhabhaiya/"
              target="_blank"
            >
              {/* <img
                src="/sna-logo.svg"
                alt="Design By"
                className="h-4 object-contain"
              /> */}
              CHHABHAIYA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
