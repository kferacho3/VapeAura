"use client";

import ContactSection from "@/components/homePage/ContactSection";
import CustomInquirySection from "@/components/homePage/CustomInquirySection";
import FeaturedBrandsSection from "@/components/homePage/FeaturedBrandsSection";
import HeroSection from "@/components/homePage/HeroSection";
import InfoCardsSection from "@/components/homePage/InfoCardsSection";
import MissionStatement from "@/components/homePage/MissionStatement";
import PriceMatchSection from "@/components/homePage/PriceMatchSection";
import ProductsSection from "@/components/homePage/ProductsSection";
export default function Home() {
  return (
    <main className="space-y-20 p-5">
      <HeroSection />

          <MissionStatement />
          <InfoCardsSection />
      <FeaturedBrandsSection />
      <CustomInquirySection />
      <ProductsSection />

      <PriceMatchSection />
  
      <ContactSection />
    </main>
  );
}
