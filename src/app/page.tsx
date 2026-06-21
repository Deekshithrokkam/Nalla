"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ManufacturingSection from "@/components/sections/ManufacturingSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <main className="relative">
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <ManufacturingSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ChatBot />
      <WhatsAppFloat />
    </main>
  );
}
