import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-900">VirtualWorker</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Calculator
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 text-white hover:bg-primary-700"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Calculator
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Features
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 text-white hover:bg-primary-700 mt-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
