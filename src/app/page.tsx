/* ------------------------------------------------------------------
 *  Home (landing) – uses ThemeProvider’s light/dark setting
 * ----------------------------------------------------------------- */
"use client";


import ContactSection from "@/components/homePage/ContactSection";
import CustomInquirySection from "@/components/homePage/CustomInquirySection";
import FeaturedBrandsSection from "@/components/homePage/FeaturedBrandsSection";
import HeroSection from "@/components/homePage/HeroSection";
import InfoCardsSection from "@/components/homePage/InfoCardsSection";
import ProductsSection from "@/components/homePage/ProductsSection";
export default function Home() {
  /* `resolvedTheme` is `"light"` | `"dark"` once mounted */


  return (
    <main className="space-y-12 px-4 sm:px-6 lg:px-8">
      <HeroSection     />
      <InfoCardsSection/>

      <FeaturedBrandsSection />
      <CustomInquirySection />

      <ProductsSection />
      <ContactSection />
    </main>
  );
}
