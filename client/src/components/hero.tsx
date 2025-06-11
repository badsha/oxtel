import React from "react";
import { Calculator, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Virtual Assistant<br />
            <span className="text-primary-600">Pricing & Savings Guide</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Discover how much you can save by hiring a virtual assistant. Calculate your potential savings and find the perfect plan for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('calculator')}
              className="bg-primary-600 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-700 h-auto"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Savings
            </Button>
            <Button 
              onClick={() => scrollToSection('pricing')}
              variant="outline"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 text-lg font-semibold hover:bg-primary-50 h-auto"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
