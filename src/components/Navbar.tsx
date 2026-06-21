"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#manufacturing", label: "Manufacturing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-glass shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400 shadow-gold transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/logo.jpeg"
                  alt="Nalla's Pooja Products"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-display font-bold text-lg leading-tight text-crimson-700">
                  Nalla&apos;s
                </p>
                <p className="text-xs text-saffron-600 font-medium tracking-wider uppercase">
                  Pooja Products
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-saffron-600 bg-saffron-50"
                      : scrolled
                      ? "text-temple-brown hover:text-saffron-600 hover:bg-saffron-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919154127230"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled ? "text-saffron-600 hover:text-saffron-700" : "text-white/90 hover:text-white"
                }`}
              >
                <Phone size={14} />
                <span>+91 91541 27230</span>
              </a>
              <a href="#contact" className="btn-primary text-sm py-2 px-4">
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled ? "text-temple-brown" : "text-white"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="navbar-glass border-t border-gold-200 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-md text-sm font-medium text-temple-brown hover:text-saffron-600 hover:bg-saffron-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gold-100">
              <a href="#contact" className="btn-primary w-full justify-center text-sm py-3 mt-2">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
