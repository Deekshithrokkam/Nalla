"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Leaf, Award, Users } from "lucide-react";

const values = [
  { icon: Leaf, label: "Purity First", desc: "100% natural ingredients in every product" },
  { icon: Award, label: "Quality Assured", desc: "Rigorous standards from raw material to dispatch" },
  { icon: Users, label: "Devotee Trusted", desc: "Serving thousands of households since 2006" },
  { icon: CheckCircle2, label: "Traditional Process", desc: "Heritage methods combined with modern hygiene" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (!elements) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-pad bg-temple-bg relative overflow-hidden">
      <div className="absolute top-4 right-4 om-watermark font-devanagari text-[10rem] sm:text-[15rem] leading-none text-saffron-500 select-none pointer-events-none">ॐ</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Visual */}
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <div className="aspect-[4/3] bg-gradient-to-br from-saffron-100 to-gold-100 flex flex-col items-center justify-center text-center p-6 sm:p-8">
                <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden border-4 border-gold-400 shadow-gold mb-4 sm:mb-6">
                  <Image src="/logo.jpeg" alt="Nalla's Pooja Products" width={144} height={144} className="object-contain bg-white p-2" />
                </div>
                <div className="flex justify-center gap-2 sm:gap-3 mb-3">
                  {["🪔", "🌸", "🪷", "🌸", "🪔"].map((e, i) => <span key={i} className="text-xl sm:text-2xl">{e}</span>)}
                </div>
                <p className="font-display text-xl sm:text-2xl text-crimson-700 font-bold">Since 2006</p>
                <p className="text-saffron-600 font-medium tracking-wider text-xs sm:text-sm uppercase mt-1">Crafting Pure Devotion</p>
              </div>
              <div className="absolute inset-0 border-4 border-gold-300/30 rounded-2xl pointer-events-none" />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-luxury p-3 sm:p-5 border border-gold-200">
              <p className="font-display text-3xl sm:text-4xl font-bold" style={{ background: "linear-gradient(135deg, #FF7A00, #FFBF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>20+</p>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">Years of<br />Excellence</p>
            </div>
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-gold-400 rounded-tl-lg" />
            <div className="absolute -bottom-3 right-8 sm:-bottom-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-gold-400 rounded-br-lg" />
          </div>

          {/* Content */}
          <div className="space-y-5 reveal-right">
            <div>
              <p className="eyebrow mb-2 sm:mb-3">Our Story</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-temple-brown leading-tight mb-3 sm:mb-4">
                Rooted in Tradition,{" "}
                <span style={{ background: "linear-gradient(135deg, #8B0020, #CC0033)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Built on Trust
                </span>
              </h2>
              <div className="section-divider-left mb-4 sm:mb-6" />
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Founded in 2006, <strong className="text-temple-brown">Nalla&apos;s Pooja Products</strong> began with a simple mission — to bring pure, high-quality pooja essentials to every household of devotion. What started as a humble endeavour has grown into a trusted name across India.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We manufacture our entire range in-house — from sourcing the finest raw materials to the final packaging — ensuring that every product upholds the sacred standards of purity and quality our customers expect.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white border border-gold-100 shadow-sm hover:shadow-md hover:border-gold-300 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-saffron-50 to-gold-100 flex items-center justify-center flex-shrink-0 border border-gold-200">
                    <Icon size={15} className="text-saffron-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-temple-brown text-sm">{label}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-1">
              <a href="#products" className="btn-primary inline-flex text-sm sm:text-base">Discover Our Products</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
