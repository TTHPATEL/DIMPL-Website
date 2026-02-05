import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/Logo/DIMPL_Logo_Long_SVG.svg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWhiteBg, setShowWhiteBg] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  // Detect hero visibility (background change)
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowWhiteBg(entry.intersectionRatio < 0.3);
      },
      {
        threshold: [0, 0.3, 1],
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Detect scroll direction (hide / show header)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setHideHeader(true);
      } else {
        // scrolling up
        setHideHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 z-50 w-full
        transition-all duration-300 ease-in-out
        ${showWhiteBg ? "bg-white" : "bg-transparent"}
        ${hideHeader ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <nav
        className={`
          py-4 px-4 sm:px-6 lg:px-20 transition-all duration-300
          ${showWhiteBg ? "border-b border-gray-200" : "border-b border-transparent"}
        `}
      >
        <div className="flex h-full items-center justify-between">
          {/* LOGO */}
          <img
            src={logo}
            alt="Durga Infra Mining Pvt Ltd"
            className={`
              h-[56px] w-auto object-contain transition-all duration-300
              ${showWhiteBg ? "" : "brightness-0 invert"}
            `}
          />

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-12 text-[1.15rem]">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  font-semibold tracking-wide transition-colors
                  ${showWhiteBg ? "text-[#626162]" : "text-white"}
                  hover:text-[#E77B2E]
                `}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${
              showWhiteBg ? "text-[#626162]" : "text-white"
            } hover:text-[#E77B2E]`}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && showWhiteBg && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 font-medium text-[#626162] hover:bg-[#F6F6F6] hover:text-[#E77B2E]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
