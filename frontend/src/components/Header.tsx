import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/Logo/DIMPL_Logo_Long_SVG.svg";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWhiteBg, setShowWhiteBg] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();

  // Detect hero visibility (background change)
  useEffect(() => {
    // Find the first section on the page (hero section)
    const firstSection = document.querySelector("section");
    if (!firstSection) {
      // If no section found, show white background
      setShowWhiteBg(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowWhiteBg(entry.intersectionRatio < 0.3);
      },
      {
        threshold: [0, 0.3, 1],
      },
    );

    observer.observe(firstSection);
    return () => observer.disconnect();
  }, [location.pathname]); // Re-run when route changes

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

  // Track active section
  useEffect(() => {
    const sections = ["home", "about", "projects", "fleet", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -66% 0px",
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navigation = [
    { name: "Home", href: "/", id: "home" },
    { name: "About Us", href: "/about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Our Fleet", href: "/fleet", id: "fleet" },
    { name: "Contact Us", href: "/contact", id: "contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 z-50 w-full
        transition-all duration-500 ease-in-out
        ${showWhiteBg ? "bg-white shadow-md" : "bg-transparent"}
        ${hideHeader ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <nav className="py-4 px-4 sm:px-6 lg:pl-20 lg:pr-17 transition-all duration-300">
        <div className="flex h-full items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="Durga Infra Mining Pvt Ltd"
              className="h-[56px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-[1.08rem]">
            {navigation.map((item) => {
              // Check if this menu item is active based on current route
              const isActive =
                location.pathname === item.href ||
                (location.pathname === "/" && activeSection === item.id);

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                  relative px-4 py-2 font-semibold tracking-wide transition-all duration-300 group
                  ${showWhiteBg ? "text-[#626162]" : "text-white"}
                  ${
                    isActive
                      ? showWhiteBg
                        ? "text-[#E77B2E]"
                        : "text-white"
                      : ""
                  }
                  ${showWhiteBg ? "hover:text-[#E77B2E]" : "hover:text-white"}
                `}
                >
                  {item.name}

                  {/* Animated underline */}
                  <span
                    className={`
                    absolute bottom-0 left-0 h-[3px] transition-all duration-300 ease-out
                    ${showWhiteBg ? "bg-[#E77B2E]" : "bg-white"}
                    ${isActive ? "w-full" : "w-0"}
                    group-hover:w-full
                  `}
                  />

                  {/* Background on hover - Gradient for transparent, solid for white */}
                  <span
                    className={`
                    absolute inset-0 -z-10 rounded-md transition-all duration-300 ease-out opacity-0
                    ${
                      showWhiteBg
                        ? "bg-[#F6F6F6]"
                        : "bg-gradient-to-r from-[#E77B2E] to-[#FF9A56]"
                    }
                    group-hover:opacity-100
                  `}
                  />
                </Link>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`
              md:hidden p-2 rounded-lg transition-all duration-300
              ${showWhiteBg ? "text-[#626162] hover:bg-[#F6F6F6]" : "text-white hover:bg-gradient-to-r hover:from-[#E77B2E] hover:to-[#FF9A56]"}
              ${showWhiteBg ? "hover:text-[#E77B2E]" : "hover:text-white"}
            `}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && showWhiteBg && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  block px-4 py-3 rounded-lg font-semibold text-[1rem] transition-all duration-300 hover:translate-x-2
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#E77B2E] to-[#FF9A56] text-white"
                      : "text-[#626162] hover:bg-[#F6F6F6] hover:text-[#E77B2E]"
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
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
