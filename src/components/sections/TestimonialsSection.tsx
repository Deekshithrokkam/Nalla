"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Priya Deshpande", location: "Pune, Maharashtra", role: "Regular Customer", text: "I have been using Nalla's Agarbatti for my morning puja for over 10 years now. The fragrance is consistently pure and the burn time is excellent. It truly elevates the atmosphere of worship.", rating: 5, avatar: "PD" },
  { name: "Ramesh Naidu", location: "Hyderabad, Telangana", role: "Puja Store Owner", text: "As a retailer, consistency matters most. Nalla's has never disappointed me in 8 years of stocking their range. The kumkum and camphor are my bestsellers. Customers always come back.", rating: 5, avatar: "RN" },
  { name: "Sunitha Krishnamurthy", location: "Bengaluru, Karnataka", role: "Temple Trustee", text: "We source all our dhoop sticks and sambrani from Nalla's for our temple. The purity and fragrance are exactly what our daily rituals require. Highly recommended.", rating: 5, avatar: "SK" },
  { name: "Vijay Sharma", location: "Chennai, Tamil Nadu", role: "Wholesale Distributor", text: "I distribute Nalla's products across South India. Their packaging quality, on-time delivery, and consistent product standards make them a reliable business partner.", rating: 5, avatar: "VS" },
  { name: "Anitha Reddy", location: "Vijayawada, AP", role: "Regular Customer", text: "Nalla's cotton wicks are the best I have used. They light quickly, burn steadily, and don't drip. My grandmother's diya has never burned more beautifully.", rating: 5, avatar: "AR" },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealChildren = () => {
      section.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    };

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      revealChildren();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) revealChildren(); });
    }, { threshold: 0.1 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => { if (animating) return; setAnimating(true); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); setTimeout(() => setAnimating(false), 400); };
  const handleNext = () => { if (animating) return; setAnimating(true); setCurrent((p) => (p + 1) % testimonials.length); setTimeout(() => setAnimating(false), 400); };

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="section-pad bg-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-saffron-50 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gold-50 opacity-60 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <p className="eyebrow mb-2 sm:mb-3">Customer Voices</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-temple-brown mb-3 sm:mb-4">
            What Our{" "}
            <span style={{ background: "linear-gradient(135deg, #FF7A00, #FFBF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Customers Say
            </span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="reveal">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-luxury border border-gold-100 p-6 sm:p-10 md:p-12 text-center relative transition-all duration-400"
            style={{ opacity: animating ? 0.6 : 1, transform: animating ? "scale(0.98)" : "scale(1)" }}>
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-gold-300 rounded-tl" />
            <div className="absolute top-4 right-4 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-gold-300 rounded-tr" />
            <div className="absolute bottom-4 left-4 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-gold-300 rounded-bl" />
            <div className="absolute bottom-4 right-4 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-gold-300 rounded-br" />

            <div className="flex justify-center gap-1 mb-4 sm:mb-6">
              {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="text-gold-500 fill-gold-400 sm:w-5 sm:h-5" />)}
            </div>
            <div className="text-3xl sm:text-4xl text-gold-300 font-display mb-3 leading-none">&ldquo;</div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light italic mb-4 sm:mb-6">{t.text}</p>
            <div className="text-3xl sm:text-4xl text-gold-300 font-display leading-none mb-6 sm:mb-8">&rdquo;</div>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-saffron-500 to-gold-400 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-saffron flex-shrink-0">
                {t.avatar}
              </div>
              <div className="text-left">
                <p className="font-bold text-temple-brown text-sm sm:text-base">{t.name}</p>
                <p className="text-saffron-600 text-xs sm:text-sm">{t.role}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <button onClick={handlePrev} className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gold-300 flex items-center justify-center text-saffron-600 hover:bg-saffron-50 hover:border-saffron-400 transition-all">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all duration-300 ${i === current ? "w-5 sm:w-6 h-2 bg-saffron-500" : "w-2 h-2 bg-gold-200 hover:bg-gold-300"}`} />
              ))}
            </div>
            <button onClick={handleNext} className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gold-300 flex items-center justify-center text-saffron-600 hover:bg-saffron-50 hover:border-saffron-400 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
