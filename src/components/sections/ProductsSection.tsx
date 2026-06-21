"use client";

import { useEffect, useRef } from "react";

const products = [
  { emoji: "🕯️", name: "Agarbatti", subtitle: "Incense Sticks", desc: "Handcrafted incense sticks with long-lasting fragrances — Jasmine, Sandalwood, Rose & Devotional blends.", color: "from-orange-50 to-amber-50", border: "border-orange-200 hover:border-orange-400", accent: "#E86200" },
  { emoji: "🔴", name: "Kumkum", subtitle: "Sacred Vermilion", desc: "Pure, vibrant kumkum in traditional formulations — free from harmful dyes, ideal for daily puja and festivals.", color: "from-red-50 to-rose-50", border: "border-red-200 hover:border-red-400", accent: "#CC0033" },
  { emoji: "🌿", name: "Turmeric", subtitle: "Sacred Haldi", desc: "Pure turmeric powder sourced from the finest farms — brilliant colour, authentic aroma, and ritual purity.", color: "from-yellow-50 to-amber-50", border: "border-yellow-200 hover:border-yellow-400", accent: "#D4A000" },
  { emoji: "✨", name: "Camphor", subtitle: "Kapur Tablets", desc: "Premium quality camphor tablets that burn clean and bright — perfect for aarti, purification, and home rituals.", color: "from-blue-50 to-indigo-50", border: "border-blue-200 hover:border-blue-400", accent: "#3B6EA5" },
  { emoji: "🕊️", name: "Cotton Wicks", subtitle: "Rui Batti", desc: "Soft, hand-rolled cotton wicks in various sizes — crafted for bright, steady flames in diyas and lamps.", color: "from-gray-50 to-slate-50", border: "border-gray-200 hover:border-gray-400", accent: "#555555" },
  { emoji: "🌫️", name: "Dhoop Sticks", subtitle: "Sacred Incense", desc: "Thick, resin-based dhoop sticks releasing rich, meditative smoke — perfect for deepening spiritual practice.", color: "from-violet-50 to-purple-50", border: "border-violet-200 hover:border-violet-400", accent: "#6B3DAA" },
  { emoji: "🌸", name: "Sambrani", subtitle: "Benzoin Resin", desc: "Traditional sambrani cups and powder — fills the home with a warm, purifying fragrance revered in South Indian rituals.", color: "from-pink-50 to-rose-50", border: "border-pink-200 hover:border-pink-400", accent: "#C0396B" },
  { emoji: "🪷", name: "Pooja Essentials", subtitle: "Complete Range", desc: "From vibhuti to chandan paste, rangoli colours to sacred threads — everything for a complete, heartfelt puja.", color: "from-amber-50 to-orange-50", border: "border-amber-200 hover:border-amber-400", accent: "#FF7A00" },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    if (!elements) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="section-pad bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <p className="eyebrow mb-2 sm:mb-3">What We Make</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-temple-brown mb-3 sm:mb-4">
            Our{" "}
            <span style={{ background: "linear-gradient(135deg, #FF7A00, #FFBF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Product Range
            </span>
          </h2>
          <div className="section-divider mb-3 sm:mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Every product is manufactured in-house with traditional care, premium raw materials, and stringent quality checks.
          </p>
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div key={product.name} className={`reveal product-card card-luxury border ${product.border} transition-all duration-300`} style={{ transitionDelay: `${index * 0.07}s` }}>
              <div className={`p-6 sm:p-8 ${product.color} bg-gradient-to-br flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                <div className="product-card-icon text-4xl sm:text-5xl mb-2 sm:mb-3 relative z-10">{product.emoji}</div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-temple-brown">{product.name}</h3>
                <p className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: product.accent }}>{product.subtitle}</p>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{product.desc}</p>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: product.accent }} />
                  <span className="text-xs text-gray-400 font-medium">In-house manufactured</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 reveal">
          <p className="text-gray-400 text-sm mb-4">Looking for bulk orders or custom packaging?</p>
          <a href="#contact" className="btn-outline text-sm sm:text-base">Request a Quote</a>
        </div>
      </div>
    </section>
  );
}
