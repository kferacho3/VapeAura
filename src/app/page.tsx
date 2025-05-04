"use client";

import ContactSection from "@/components/homePage/ContactSection";
import CustomInquirySection from "@/components/homePage/CustomInquirySection";
import FeaturedBrandsSection from "@/components/homePage/FeaturedBrandsSection";
import HeroSection from "@/components/homePage/HeroSection";
import InfoCardsSection from "@/components/homePage/InfoCardsSection";
import ProductsSection from "@/components/homePage/ProductsSection";
export default function Home() {
  return (
    <main className="space-y-5 p-5">
      <HeroSection />

          <InfoCardsSection />
      <FeaturedBrandsSection />
      <CustomInquirySection />
      <ProductsSection />


  
      <ContactSection />
    </main>
  );
}
