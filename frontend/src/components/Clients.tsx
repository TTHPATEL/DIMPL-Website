import adani from "../assets/Client Logo/Adani.jpg";
import gmdc from "../assets/Client Logo/GMDC.png";
import nlc from "../assets/Client Logo/NLC.png";
import RSSM from "../assets/Client Logo/RSSM.png";
import sccl from "../assets/Client Logo/SCCL.png";
import wcl from "../assets/Client Logo/WCL.png";

export function Clients() {
  const logos = [adani, gmdc, wcl, nlc, RSSM, sccl];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#626162] mb-4">
            Trusted by India’s Energy & Mining Leaders
          </h2>
          <div className="w-24 h-1 bg-[#E77B2E] mx-auto mb-4" />
          <p className="text-[#1F1F1F]/70 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Delivering consistent results
            across operations.
          </p>
        </div>

        {/* ================= AUTO SLIDER ================= */}
        <div className="relative w-full overflow-hidden mask-linear-gradient">
          <div className="flex w-max animate-logo-scroll gap-8 md:gap-12 items-center">
            {/* duplicate logos for infinite effect */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-[140px] h-[80px]
                  sm:w-[180px] sm:h-[100px]
                  md:w-[220px] md:h-[120px]
                  flex items-center justify-center p-2"
              >
                <img
                  src={logo}
                  alt="client-logo"
                  className="max-h-full max-w-full object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-logo-scroll {
          animation: logo-scroll 40s linear infinite;
        }

        .animate-logo-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Optional: Add a mask to fade entries in/out */
        .mask-linear-gradient {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
`}</style>
    </section>
  );
}
