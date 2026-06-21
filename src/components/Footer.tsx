"use client";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const products = ["Agarbatti", "Kumkum", "Turmeric Powder", "Camphor", "Cotton Wicks", "Dhoop Sticks", "Sambrani", "Pooja Essentials"];
const quickLinks = [
  { label: "Home", href: "#home" }, { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" }, { label: "Why Choose Us", href: "#why-us" },
  { label: "Manufacturing", href: "#manufacturing" }, { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #1A0500 0%, #0D0200 100%)" }}>
      <div className="h-1 bg-gradient-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gold-400 shadow-gold flex-shrink-0">
                <Image src="/logo.jpeg" alt="Nalla's Pooja Products" width={56} height={56} className="object-contain bg-white p-1" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg sm:text-xl">Nalla&apos;s</p>
                <p className="text-gold-400 text-xs tracking-wider">Pooja Products ®</p>
              </div>
            </div>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4 max-w-xs">
              Trusted manufacturer of premium pooja and spiritual products since 2006. Crafting devotion with purity, quality, and care.
            </p>
            <div className="font-devanagari text-3xl sm:text-4xl text-gold-400 opacity-60">ॐ</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-5 text-xs sm:text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/50 text-xs sm:text-sm hover:text-gold-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-saffron-500 flex-shrink-0" />{l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-5 text-xs sm:text-sm tracking-wider uppercase">Our Products</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {products.map((p) => (
                <li key={p}>
                  <span className="text-white/50 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />{p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-white mb-3 sm:mb-5 text-xs sm:text-sm tracking-wider uppercase">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <a href="tel:+919154127230" className="flex items-start gap-2 sm:gap-3 text-white/50 hover:text-gold-400 transition-colors">
                <Phone size={13} className="flex-shrink-0 mt-0.5 text-saffron-500" />
                <span className="text-xs sm:text-sm">+91 91541 27230</span>
              </a>
              <a href="mailto:info@nallaspooja.com" className="flex items-start gap-2 sm:gap-3 text-white/50 hover:text-gold-400 transition-colors">
                <Mail size={13} className="flex-shrink-0 mt-0.5 text-saffron-500" />
                <span className="text-xs sm:text-sm break-all">info@nallaspooja.com</span>
              </a>
              <div className="flex items-start gap-2 sm:gap-3 text-white/50">
                <MapPin size={13} className="flex-shrink-0 mt-0.5 text-saffron-500" />
                <span className="text-xs sm:text-sm">Sree Medha Dakshinamurthy Pooja Samagri, Hyderabad, Telangana, India</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-gold-400 text-xs font-semibold mb-1">Business Hours</p>
              <p className="text-white/60 text-xs">Monday – Saturday · 9AM – 6PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
          <p className="text-white/30 text-xs">© {year} Nalla&apos;s Pooja Products. All rights reserved.</p>
          <p className="text-white/25 text-xs flex items-center gap-1">
            Crafted with <Heart size={9} className="text-saffron-500 fill-saffron-500 mx-0.5" /> & Devotion
          </p>
          <p className="text-white/25 text-xs">Registered Trademark ® Since 2006</p>
        </div>
      </div>
    </footer>
  );
}
