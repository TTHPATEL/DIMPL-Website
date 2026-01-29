import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Careers", href: "#careers" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "HEMM Operations",
    "Mine Development & Operations",
    "Conventional Mining",
    "Value-Added Services",
  ];

  return (
    <footer className="bg-[#605F5A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E5710A] flex items-center justify-center">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DURGA INFRA</h3>
                <p className="text-xs opacity-75">PRIVATE LIMITED</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Leading mining and infrastructure company delivering excellence
              across India since 2015.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#E5710A] flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#E5710A] flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#E5710A] flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#E5710A] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="text-[#E5710A] flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-white/70 text-sm">
                  Corporate Office
                  <br />
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#E5710A] flex-shrink-0" size={18} />
                <span className="text-white/70 text-sm">+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#E5710A] flex-shrink-0" size={18} />
                <span className="text-white/70 text-sm">
                  info@durgainfra.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 Durga Infra Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-[#E5710A] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#E5710A] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
