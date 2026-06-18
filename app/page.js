"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturesGrid from "@/components/FeaturesGrid";
import MobileAppShowcase from "@/components/MobileAppShowcase";
import Industries from "@/components/Industries";
import PlatformStrengths from "@/components/PlatformStrengths";
import AwardsSection from "@/components/AwardsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onBookDemo={openModal} />
      <main className="flex-grow overflow-hidden">
        <Hero onBookDemo={openModal} />
        
        <ScrollReveal>
          <Stats />
        </ScrollReveal>
        
        <ScrollReveal>
          <FeaturesGrid />
        </ScrollReveal>
        
        <ScrollReveal>
          <MobileAppShowcase />
        </ScrollReveal>
        
        <ScrollReveal>
          <Industries />
        </ScrollReveal>
        
        <ScrollReveal>
          <PlatformStrengths />
        </ScrollReveal>
        
        <ScrollReveal>
          <AwardsSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <CTA onBookDemo={openModal} />
        </ScrollReveal>
      </main>
      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
      <WhatsAppButton />
    </>
  );
}

