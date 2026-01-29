import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/DIMPL_Logo_Long_SVG.svg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Careers", href: "#careers" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl h-[88px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Durga Infra Mining Pvt Ltd"
              className="h-[56px] w-auto object-contain cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-[#626162] 
                  font-medium 
                  tracking-wide
                  hover:text-[#E77B2E] 
                  transition-colors
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#626162] hover:text-[#E77B2E]"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="
                  block 
                  px-3 
                  py-2 
                  text-[#626162]
                  font-medium
                  hover:bg-[#F4F4F4]
                  hover:text-[#E77B2E]
                  transition-colors
                "
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
