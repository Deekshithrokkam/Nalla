"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, FlaskConical, Package, Truck, Search, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Raw Material Selection",
    desc: "We source only certified, natural raw materials. Every ingredient is inspected for quality, purity, and aroma before being accepted into our facility.",
  },
  {
    icon: FlaskConical,
    title: "Traditional Formulation",
    desc: "Our time-tested formulations — many refined over 20+ years — ensure consistency in colour, fragrance, and burn quality across every batch.",
  },
  {
    icon: CheckCircle,
    title: "Quality Checks",
    desc: "Mid-production inspections catch any deviations early. We test for colour consistency, fragrance strength, and product integrity at multiple stages.",
  },
  {
    icon: Package,
    title: "Hygienic Packaging",
    desc: "Products are sealed in clean-room conditions, with packaging designed to preserve freshness, purity, and shelf life throughout distribution.",
  },
  {
    icon: Truck,
    title: "Reliable Dispatch",
    desc: "Timely dispatch with secure packaging ensures products reach retailers and customers in perfect condition, on schedule.",
  },
  {
    icon: Handshake,
    title: "After-Sales Support",
    desc: "We stand behind every product. Our team is available for queries, replacements, and ongoing support for all our business partners.",
  },
];

const highlights = [
  "Natural & chemical-free formulations",
  "In-house production — no outsourcing",
  "Consistent fragrance & colour profiles",
  "Hygienic, clean manufacturing facility",
  "Quality tested before every dispatch",
  "Traditional recipes, modern standards",
];

export default function ManufacturingSection() {
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
    const reveals = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="manufacturing" ref={sectionRef} className="section-pad bg-temple-warm relative overflow-hidden">
      {/* Subtle pattern bg */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,122,0,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="eyebrow mb-3">Our Process</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-temple-brown mb-4">
            Manufacturing{" "}
            <span style={{
              background: "linear-gradient(135deg, #FF7A00, #FFBF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Excellence
            </span>
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From raw material to your doorstep — every step in our process is guided by
            the pursuit of purity, quality, and the sanctity of purpose.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Process Steps */}
          <div className="space-y-5 reveal-left">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-card transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center flex-shrink-0 shadow-saffron group-hover:scale-110 transition-transform duration-300">
                      <Icon size={16} className="text-white" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-gradient-to-b from-gold-300 to-transparent mt-2" />
                    )}
                  </div>

                  <div className="pb-2">
                    <h3 className="font-semibold text-temple-brown mb-1 group-hover:text-saffron-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — Highlights + Visual */}
          <div className="space-y-8 reveal-right">
            {/* Quality box */}
            <div className="bg-white rounded-2xl shadow-luxury border border-gold-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-gold-400 flex items-center justify-center">
                  <span className="text-white text-lg">✦</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-temple-brown text-xl">Quality Commitments</h3>
                  <p className="text-xs text-saffron-600 font-medium">What we promise in every product</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative product showcase */}
            <div className="rounded-2xl overflow-hidden border border-gold-200 shadow-card">
              <div className="bg-gradient-to-br from-[#1A0500] to-[#4A0E00] p-8 text-center">
                <div className="font-devanagari text-6xl text-gold-400 mb-3">ॐ</div>
                <p className="font-display text-white text-xl font-bold mb-1">Nalla&apos;s Promise</p>
                <p className="text-white/60 text-sm">
                  &ldquo;Every product that leaves our facility carries the same care and devotion as the one before it.&rdquo;
                </p>
              </div>
              <div className="bg-white p-6 flex items-center justify-between">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-saffron-600">100%</p>
                  <p className="text-xs text-gray-500 mt-1">Natural Inputs</p>
                </div>
                <div className="w-px h-12 bg-gold-200" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-saffron-600">0%</p>
                  <p className="text-xs text-gray-500 mt-1">Outsourcing</p>
                </div>
                <div className="w-px h-12 bg-gold-200" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-saffron-600">20+</p>
                  <p className="text-xs text-gray-500 mt-1">Years Crafting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
