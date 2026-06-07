"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturesGrid from "@/components/FeaturesGrid";
import DashboardPreview from "@/components/DashboardPreview";
import MobileAppShowcase from "@/components/MobileAppShowcase";
import Industries from "@/components/Industries";
import PlatformStrengths from "@/components/PlatformStrengths";
import AwardsSection from "@/components/AwardsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onBookDemo={openModal} />
      <main className="flex-grow">
        <Hero onBookDemo={openModal} />
        <Stats />
        <FeaturesGrid />
        <DashboardPreview />
        <MobileAppShowcase />
        <Industries />
        <PlatformStrengths />
        <AwardsSection />
        <CTA onBookDemo={openModal} />
      </main>
      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
      <WhatsAppButton />
    </>
  );
}

