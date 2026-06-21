"use client";

import { useEffect, useRef } from "react";
import { Clock, Sparkles, Factory, BarChart3, Heart, Star } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "20+ Years of Excellence",
    desc: "Founded in 2006, we bring over two decades of manufacturing expertise and deep-rooted devotion to every product we craft.",
    number: "01",
  },
  {
    icon: Sparkles,
    title: "Premium Quality Ingredients",
    desc: "We source only the finest raw materials — natural resins, pure turmeric, quality cotton — ensuring every product meets the highest standards of purity.",
    number: "02",
  },
  {
    icon: Factory,
    title: "In-House Manufacturing",
    desc: "Complete control from raw material to finished product. Our vertically integrated process ensures consistent quality and no compromise at any stage.",
    number: "03",
  },
  {
    icon: BarChart3,
    title: "Consistent Standards",
    desc: "Every batch is tested and verified. Our quality assurance protocols ensure the product you receive today is as good as what you received a decade ago.",
    number: "04",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    desc: "Thousands of satisfied customers, retailers, and distributors across India trust Nalla's to deliver devotion in every package.",
    number: "05",
  },
  {
    icon: Star,
    title: "Registered & Trusted Brand",
    desc: "Nalla's is a registered trademark — a mark of authenticity, accountability, and the commitment we hold to every customer and product.",
    number: "06",
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2D0A00 0%, #5C1800 50%, #2D0A00 100%)" }}>
      {/* Mandala watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl animate-spin-slow">
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx="300" cy="140" rx="25" ry="140"
              fill="none" stroke="#FFBF00" strokeWidth="1"
              transform={`rotate(${i * 30} 300 300)`}
            />
          ))}
          <circle cx="300" cy="300" r="140" fill="none" stroke="#FFBF00" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="100" fill="none" stroke="#FF7A00" strokeWidth="1" />
          <circle cx="300" cy="300" r="60" fill="none" stroke="#FFBF00" strokeWidth="2" />
          <circle cx="300" cy="300" r="20" fill="rgba(255,191,0,0.3)" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A0500]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="eyebrow mb-3">Our Advantage</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose{" "}
            <span style={{
              background: "linear-gradient(135deg, #FFD12E 0%, #FFBF00 50%, #FF9A2E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Nalla&apos;s
            </span>
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            Six reasons why thousands of customers and businesses consistently choose us for their pooja product needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="reveal group relative p-7 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-gold-400/40 transition-all duration-400"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Number watermark */}
                <div className="absolute top-4 right-5 font-display text-5xl font-bold text-white/5 group-hover:text-gold-400/10 transition-colors">
                  {reason.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500/20 to-gold-500/20 border border-white/10 flex items-center justify-center mb-5 group-hover:from-saffron-500/30 group-hover:to-gold-500/30 transition-all duration-300">
                  <Icon size={22} className="text-gold-400" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {reason.desc}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-saffron-500 to-gold-400 group-hover:w-full transition-all duration-500 rounded-b-xl" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <a href="#contact" className="btn-primary text-base px-10">
            Partner with Nalla&apos;s
          </a>
        </div>
      </div>
    </section>
  );
}
