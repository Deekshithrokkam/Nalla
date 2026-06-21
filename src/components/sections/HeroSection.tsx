"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Star, Award, Shield } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bgEl = hero.querySelector(".hero-bg") as HTMLElement;
      if (bgEl) bgEl.style.transform = `translateY(${scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    const elements = hero.querySelectorAll("[data-reveal]");
    elements.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      (el as HTMLElement).style.animationFillMode = "both";
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND */}
      <div className="hero-bg absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#120300] via-[#3D0A00] to-[#120300]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(255,100,0,0.18) 0%, rgba(180,40,0,0.08) 40%, transparent 75%)" }} />

        {/* MANDALA 1 — Large outer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "min(120vw, 1000px)", height: "min(120vw, 1000px)" }}>
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ animation: "spin 60s linear infinite", opacity: 0.22 }}>
            <circle cx="500" cy="500" r="480" fill="none" stroke="#FFBF00" strokeWidth="0.8" strokeDasharray="6 8" />
            <circle cx="500" cy="500" r="460" fill="none" stroke="#FF8C00" strokeWidth="0.5" />
            {[...Array(24)].map((_, i) => {
              const angle = (i * 360) / 24; const rad = (angle * Math.PI) / 180;
              const x1 = 500 + 380 * Math.cos(rad); const y1 = 500 + 380 * Math.sin(rad);
              const cx1 = 500 + 300 * Math.cos(((angle - 7.5) * Math.PI) / 180); const cy1 = 500 + 300 * Math.sin(((angle - 7.5) * Math.PI) / 180);
              const cx2 = 500 + 300 * Math.cos(((angle + 7.5) * Math.PI) / 180); const cy2 = 500 + 300 * Math.sin(((angle + 7.5) * Math.PI) / 180);
              return <path key={i} d={`M500,500 Q${cx1},${cy1} ${x1},${y1} Q${cx2},${cy2} 500,500`} fill="rgba(255,191,0,0.07)" stroke="#FFBF00" strokeWidth="0.7" />;
            })}
            {[...Array(16)].map((_, i) => <ellipse key={i} cx="500" cy="240" rx="18" ry="240" fill="none" stroke="#FF9A00" strokeWidth="0.8" transform={`rotate(${i * 22.5} 500 500)`} />)}
            <circle cx="500" cy="500" r="340" fill="none" stroke="#FFBF00" strokeWidth="1" />
            <circle cx="500" cy="500" r="310" fill="none" stroke="#FF7A00" strokeWidth="0.6" strokeDasharray="3 5" />
            {[...Array(12)].map((_, i) => {
              const angle = (i * 360) / 12; const rad = (angle * Math.PI) / 180;
              const x1 = 500 + 280 * Math.cos(rad); const y1 = 500 + 280 * Math.sin(rad);
              const cx1 = 500 + 210 * Math.cos(((angle - 15) * Math.PI) / 180); const cy1 = 500 + 210 * Math.sin(((angle - 15) * Math.PI) / 180);
              const cx2 = 500 + 210 * Math.cos(((angle + 15) * Math.PI) / 180); const cy2 = 500 + 210 * Math.sin(((angle + 15) * Math.PI) / 180);
              return <path key={i} d={`M500,500 Q${cx1},${cy1} ${x1},${y1} Q${cx2},${cy2} 500,500`} fill="rgba(255,150,0,0.08)" stroke="#FF9A00" strokeWidth="0.9" />;
            })}
            <circle cx="500" cy="500" r="200" fill="none" stroke="#FFBF00" strokeWidth="1.2" />
            <circle cx="500" cy="500" r="160" fill="none" stroke="#FF7A00" strokeWidth="0.8" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8; const rad = (angle * Math.PI) / 180;
              const x1 = 500 + 155 * Math.cos(rad); const y1 = 500 + 155 * Math.sin(rad);
              const cx1 = 500 + 110 * Math.cos(((angle - 22.5) * Math.PI) / 180); const cy1 = 500 + 110 * Math.sin(((angle - 22.5) * Math.PI) / 180);
              const cx2 = 500 + 110 * Math.cos(((angle + 22.5) * Math.PI) / 180); const cy2 = 500 + 110 * Math.sin(((angle + 22.5) * Math.PI) / 180);
              return <path key={i} d={`M500,500 Q${cx1},${cy1} ${x1},${y1} Q${cx2},${cy2} 500,500`} fill="rgba(255,191,0,0.12)" stroke="#FFBF00" strokeWidth="1" />;
            })}
            <circle cx="500" cy="500" r="80" fill="none" stroke="#FFBF00" strokeWidth="1.5" />
            <circle cx="500" cy="500" r="50" fill="none" stroke="#FF9A00" strokeWidth="1" />
            <circle cx="500" cy="500" r="25" fill="rgba(255,191,0,0.15)" stroke="#FFBF00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* MANDALA 2 — Medium counter-clockwise */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "min(80vw, 600px)", height: "min(80vw, 600px)" }}>
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ animation: "spin 35s linear infinite reverse", opacity: 0.3 }}>
            <circle cx="300" cy="300" r="285" fill="none" stroke="#FF7A00" strokeWidth="1" strokeDasharray="4 6" />
            {[...Array(20)].map((_, i) => <line key={i} x1="300" y1="300" x2={300 + 280 * Math.cos((i * 18 * Math.PI) / 180)} y2={300 + 280 * Math.sin((i * 18 * Math.PI) / 180)} stroke="#FFBF00" strokeWidth="0.6" opacity="0.6" />)}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 360) / 16; const rad = (angle * Math.PI) / 180;
              const cx = 300 + 200 * Math.cos(rad); const cy = 300 + 200 * Math.sin(rad);
              return <g key={i} transform={`rotate(${angle} ${cx} ${cy})`}><polygon points={`${cx},${cy - 12} ${cx + 6},${cy} ${cx},${cy + 12} ${cx - 6},${cy}`} fill="rgba(255,191,0,0.2)" stroke="#FFBF00" strokeWidth="0.8" /></g>;
            })}
            <circle cx="300" cy="300" r="220" fill="none" stroke="#FFBF00" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="180" fill="none" stroke="#FF9A00" strokeWidth="0.8" strokeDasharray="2 4" />
            {[...Array(8)].map((_, i) => {
              const a = (i * 45 * Math.PI) / 180; const a2 = ((i * 45 + 22.5) * Math.PI) / 180;
              return <path key={i} d={`M300,300 L${300 + 170 * Math.cos(a)},${300 + 170 * Math.sin(a)} L${300 + 120 * Math.cos(a2)},${300 + 120 * Math.sin(a2)} Z`} fill="rgba(255,122,0,0.1)" stroke="#FF9A00" strokeWidth="0.8" />;
            })}
            <circle cx="300" cy="300" r="100" fill="none" stroke="#FFBF00" strokeWidth="1.5" />
            {[...Array(12)].map((_, i) => {
              const rad = (i * 30 * Math.PI) / 180;
              return <circle key={i} cx={300 + 75 * Math.cos(rad)} cy={300 + 75 * Math.sin(rad)} r="4" fill="#FFBF00" opacity="0.6" />;
            })}
            <circle cx="300" cy="300" r="40" fill="none" stroke="#FF7A00" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="18" fill="rgba(255,191,0,0.2)" stroke="#FFBF00" strokeWidth="2" />
          </svg>
        </div>

        {/* MANDALA 3 — Small fast inner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "min(45vw, 280px)", height: "min(45vw, 280px)" }}>
          <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ animation: "spin 15s linear infinite", opacity: 0.45 }}>
            {[...Array(16)].map((_, i) => {
              const angle = (i * 360) / 16; const rad = (angle * Math.PI) / 180;
              const x1 = 140 + 120 * Math.cos(rad); const y1 = 140 + 120 * Math.sin(rad);
              const cx1 = 140 + 85 * Math.cos(((angle - 11.25) * Math.PI) / 180); const cy1 = 140 + 85 * Math.sin(((angle - 11.25) * Math.PI) / 180);
              const cx2 = 140 + 85 * Math.cos(((angle + 11.25) * Math.PI) / 180); const cy2 = 140 + 85 * Math.sin(((angle + 11.25) * Math.PI) / 180);
              return <path key={i} d={`M140,140 Q${cx1},${cy1} ${x1},${y1} Q${cx2},${cy2} 140,140`} fill="rgba(255,191,0,0.18)" stroke="#FFD700" strokeWidth="1.2" />;
            })}
            <circle cx="140" cy="140" r="125" fill="none" stroke="#FFBF00" strokeWidth="1.5" />
            {[...Array(8)].map((_, i) => {
              const a = (i * 45 * Math.PI) / 180;
              return <line key={i} x1="140" y1="140" x2={140 + 110 * Math.cos(a)} y2={140 + 110 * Math.sin(a)} stroke="#FF9A00" strokeWidth="1.5" opacity="0.8" />;
            })}
            <circle cx="140" cy="140" r="70" fill="none" stroke="#FFD700" strokeWidth="1.8" />
            <circle cx="140" cy="140" r="45" fill="none" stroke="#FF7A00" strokeWidth="1.2" strokeDasharray="3 3" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              return <ellipse key={i} cx={140 + 30 * Math.cos(angle)} cy={140 + 30 * Math.sin(angle)} rx="8" ry="20" fill="rgba(255,215,0,0.25)" stroke="#FFD700" strokeWidth="1" transform={`rotate(${i * 45} ${140 + 30 * Math.cos(angle)} ${140 + 30 * Math.sin(angle)})`} />;
            })}
            <circle cx="140" cy="140" r="18" fill="rgba(255,191,0,0.3)" stroke="#FFBF00" strokeWidth="2" />
            <circle cx="140" cy="140" r="7" fill="#FFBF00" opacity="0.8" />
          </svg>
        </div>

        {/* Corner accents */}
        <div className="absolute -top-16 -left-16 w-40 h-40 sm:w-56 sm:h-56 opacity-10" style={{ animation: "spin 50s linear infinite reverse" }}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {[...Array(12)].map((_, i) => <ellipse key={i} cx="100" cy="30" rx="10" ry="80" fill="none" stroke="#FFBF00" strokeWidth="0.8" transform={`rotate(${i * 30} 100 100)`} />)}
            <circle cx="100" cy="100" r="90" fill="none" stroke="#FF9A00" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 sm:w-56 sm:h-56 opacity-10" style={{ animation: "spin 45s linear infinite" }}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {[...Array(12)].map((_, i) => <ellipse key={i} cx="100" cy="30" rx="10" ry="80" fill="none" stroke="#FF7A00" strokeWidth="0.8" transform={`rotate(${i * 30} 100 100)`} />)}
            <circle cx="100" cy="100" r="90" fill="none" stroke="#FFBF00" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAF6F0] to-transparent" />
      </div>

      {/* Smoke lines */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute bottom-20" style={{ left: `${10 + i * 15}%`, opacity: 0.12, animation: `float ${5 + i}s ease-in-out ${i * 0.7}s infinite` }}>
          <div className="w-px bg-gradient-to-t from-transparent via-white/60 to-transparent rounded-full" style={{ height: `${50 + i * 12}px` }} />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 animate-fade-in-up" data-reveal style={{ animationDelay: "0.1s" }}>
          {[
            { icon: <Star size={11} className="text-gold-400 fill-gold-400" />, label: "Est. 2006" },
            { icon: <Award size={11} className="text-gold-400" />, label: "Premium Quality" },
            { icon: <Shield size={11} className="text-gold-400" />, label: "Trusted Manufacturer" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5">
              {icon}
              <span className="text-white/90 text-[10px] sm:text-xs font-medium tracking-wider uppercase">{label}</span>
            </div>
          ))}
        </div>

        {/* Om */}
        <div className="font-devanagari text-4xl sm:text-5xl text-gold-400 mb-3 animate-fade-in-up opacity-90" data-reveal style={{ animationDelay: "0.2s" }}>ॐ</div>

        {/* Headline */}
        <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-5 leading-tight animate-fade-in-up" data-reveal style={{ animationDelay: "0.3s" }}>
          Crafting{" "}
          <span style={{ background: "linear-gradient(135deg, #FFD12E 0%, #FFBF00 40%, #FF9A2E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Devotion
          </span>
          <br />
          <span className="text-white/90">Since 2006</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-5 animate-fade-in-up" data-reveal style={{ animationDelay: "0.4s" }}>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full" />
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400" />
        </div>

        {/* Sub-headline */}
        <p className="text-white/80 text-base sm:text-xl md:text-2xl max-w-3xl mx-auto mb-2 font-light animate-fade-in-up" data-reveal style={{ animationDelay: "0.45s" }}>
          Trusted Manufacturer of Premium Pooja and Spiritual Products
        </p>
        <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-in-up" data-reveal style={{ animationDelay: "0.5s" }}>
          Agarbatti · Kumkum · Camphor · Dhoop · Sambrani · Cotton Wicks & More
        </p>

        {/* Logo with spinning ring */}
        <div className="flex justify-center mb-8 sm:mb-12 animate-fade-in-up" data-reveal style={{ animationDelay: "0.55s" }}>
          <div className="relative">
            <div className="absolute rounded-full border-2 border-dashed border-gold-400/60" style={{ animation: "spin 8s linear infinite", inset: "-8px" }} />
            <div className="absolute inset-0 rounded-full border-[3px] border-gold-400 shadow-glow" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-white">
              <Image src="/logo.jpeg" alt="Nalla's Pooja Products" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up" data-reveal style={{ animationDelay: "0.65s" }}>
          <a href="#products" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full xs:w-auto max-w-xs">Explore Products</a>
          <a href="#contact" className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full xs:w-auto max-w-xs">Contact Us</a>
        </div>

        {/* Scroll */}
        <div className="mt-12 sm:mt-20 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-white text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} className="text-white" />
        </div>
      </div>
    </section>
  );
}
