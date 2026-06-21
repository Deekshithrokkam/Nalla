"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience", sublabel: "Est. 2006", icon: "🏆" },
  { value: 50, suffix: "+", label: "Products Manufactured", sublabel: "& counting", icon: "🛕" },
  { value: 10000, suffix: "+", label: "Happy Customers", sublabel: "Across India", icon: "🙏" },
  { value: 5, suffix: "+", label: "States Served", sublabel: "Pan-India reach", icon: "🗺️" },
];

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  const count = useCounter(stat.value, 2200, animate);
  return (
    <div className="stat-card text-center p-4 sm:p-6 md:p-8">
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{stat.icon}</div>
      <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #FF7A00, #FFBF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        {animate ? count.toLocaleString() : "0"}{stat.suffix}
      </div>
      <p className="text-temple-brown font-semibold text-sm sm:text-base mt-1 sm:mt-2">{stat.label}</p>
      <p className="text-gray-400 text-xs mt-0.5 sm:mt-1">{stat.sublabel}</p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setAnimate(true);
          e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
        }
      });
    }, { threshold: 0.25 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad relative overflow-hidden" style={{ background: "#FFF8F0" }}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <p className="eyebrow mb-2 sm:mb-3">By the Numbers</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-temple-brown mb-3 sm:mb-4">
            Our Story in{" "}
            <span style={{ background: "linear-gradient(135deg, #FF7A00, #FFBF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Numbers</span>
          </h2>
          <div className="section-divider" />
        </div>
        {/* 2x2 on mobile, 4 cols on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat) => <StatCard key={stat.label} stat={stat} animate={animate} />)}
        </div>
        <div className="text-center mt-10 sm:mt-14 reveal">
          <div className="inline-block bg-white rounded-2xl shadow-card border border-gold-100 p-5 sm:p-8 max-w-2xl mx-4 sm:mx-auto">
            <div className="font-devanagari text-2xl sm:text-3xl text-gold-400 mb-2">ॐ</div>
            <p className="font-display text-base sm:text-xl text-temple-brown italic leading-relaxed">
              &ldquo;Every stick of incense we craft carries a prayer. Every product we make carries a promise.&rdquo;
            </p>
            <p className="text-saffron-600 text-xs sm:text-sm font-medium mt-2 sm:mt-3">— Nalla&apos;s Pooja Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
