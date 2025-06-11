import React from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import SavingsCalculator from "@/components/savings-calculator";
import PricingTiers from "@/components/pricing-tiers";
import FeatureComparison from "@/components/feature-comparison";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <SavingsCalculator />
      <PricingTiers />
      <FeatureComparison />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
