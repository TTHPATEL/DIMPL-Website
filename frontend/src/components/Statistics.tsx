import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Statistics() {
  const stats = [
    { value: "9+", label: "Years of Experience", suffix: "" },
    { value: "2500+", label: "Total Workforce", suffix: "" },
    { value: "350+", label: "Fleet Strength", suffix: "" },
    { value: "25", label: "Overburden Handled", suffix: "Million CuM/Year" },
    { value: "8", label: "Mineral Production", suffix: "Million MT/Year" },
    { value: "5", label: "States with Active Operations", suffix: "" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("statistics");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="statistics"
      className="py-20 bg-[#605F5A] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 36px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="text-[#E5710A]" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              By The Numbers
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our track record speaks for itself. Delivering consistent results
            across operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                {stat.value}
              </div>
              <div className="text-xl text-white/90 font-semibold mb-2">
                {stat.label}
              </div>
              {stat.suffix && (
                <div className="text-sm text-[#E5710A] font-medium">
                  {stat.suffix}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 text-lg italic">
            "Trusted partner for India's leading PSUs and private mining
            companies"
          </p>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `,
        }}
      />
    </section>
  );
}
