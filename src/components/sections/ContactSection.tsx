"use client";
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: "+91 91541 27230", sub: "Mon–Sat, 9am–6pm", href: "tel:+919154127230" },
  { icon: Mail, label: "Email Us", value: "info@nallaspooja.com", sub: "We reply within 24 hours", href: "mailto:info@nallaspooja.com" },
  { icon: MapPin, label: "Visit Us", value: "Sree Medha Dakshinamurthy Pooja Samagri", sub: "Hyderabad, Telangana — 500 076", href: "#" },
  { icon: Clock, label: "Business Hours", value: "Mon–Saturday", sub: "9:00 AM – 6:00 PM", href: "#" },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealChildren = () => {
      section
        .querySelectorAll(".reveal, .reveal-left, .reveal-right")
        .forEach((el) => el.classList.add("visible"));
    };

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      revealChildren();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) revealChildren(); });
    }, { threshold: 0.08 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false); setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-pad bg-temple-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,122,0,0.2) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <p className="eyebrow mb-2 sm:mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-temple-brown mb-3 sm:mb-4">
            Let&apos;s Do Business{" "}
            <span style={{ background: "linear-gradient(135deg, #FF7A00, #FFBF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Together</span>
          </h2>
          <div className="section-divider mb-3 sm:mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Whether you&apos;re a retailer, distributor, or devotee — we&apos;d love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-luxury border border-gold-100 p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-saffron-500 to-gold-400 flex items-center justify-center flex-shrink-0">
                  <Send size={13} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-temple-brown text-lg sm:text-xl">Send an Enquiry</h3>
              </div>

              {submitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl sm:text-3xl">🙏</span>
                  </div>
                  <h3 className="font-display font-bold text-temple-brown text-xl sm:text-2xl mb-2">Thank You!</h3>
                  <p className="text-gray-500 text-sm sm:text-base">Your enquiry has been received. We will get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", business: "", message: "" }); }} className="btn-outline mt-5 text-sm py-2.5 px-6">Send Another Enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="input-luxury text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="input-luxury text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="input-luxury text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nature of Enquiry</label>
                    <select name="business" value={form.business} onChange={handleChange} className="input-luxury text-sm">
                      <option value="">Select enquiry type</option>
                      <option value="retail">Retail Purchase</option>
                      <option value="wholesale">Wholesale / Bulk Order</option>
                      <option value="distribution">Distribution Partnership</option>
                      <option value="custom">Custom Packaging / Private Label</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your requirements..." rows={3} className="input-luxury resize-none text-sm" />
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-3 sm:py-3.5 text-sm sm:text-base">
                    {submitting ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={15} />Send Enquiry</>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">We take your privacy seriously. No spam, ever.</p>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3 sm:space-y-4 reveal-right order-1 lg:order-2">
            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <a key={label} href={href} className="flex items-center gap-3 sm:gap-5 bg-white rounded-xl p-4 sm:p-5 border border-gold-100 shadow-card hover:shadow-luxury hover:border-gold-300 transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-400 flex items-center justify-center flex-shrink-0 shadow-saffron group-hover:scale-105 transition-transform">
                  <Icon size={17} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-saffron-600 font-semibold tracking-wider uppercase mb-0.5">{label}</p>
                  <p className="font-semibold text-temple-brown text-sm sm:text-base truncate">{value}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a href="https://wa.me/919154127230?text=Hi%2C%20I%20am%20interested%20in%20Nalla's%20Pooja%20Products" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-5 bg-green-50 rounded-xl p-4 sm:p-5 border border-green-200 shadow-card hover:shadow-luxury hover:border-green-400 transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare size={17} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-green-700 font-semibold tracking-wider uppercase mb-0.5">WhatsApp</p>
                <p className="font-semibold text-green-800 text-sm sm:text-base">Chat with Us Directly</p>
                <p className="text-green-600 text-xs">Quick responses on WhatsApp</p>
              </div>
            </a>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gold-100 shadow-card h-44 sm:h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8!2d78.5394996!3d17.3740035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9974219bdd1b%3A0x229ecd60b0f041c1!2sSREE%20MEDHA%20DAKSHINAMURTHY%20POOJA%20SAMAGRI!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Nalla's Pooja Products Location" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
