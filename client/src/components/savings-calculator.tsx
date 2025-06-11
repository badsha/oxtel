import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SavingsCalculator() {
  const [localSalary, setLocalSalary] = useState(50000);
  const [benefits, setBenefits] = useState(30);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [vaRate, setVaRate] = useState(15);
  const [calculations, setCalculations] = useState({
    localTotal: 65000,
    vaTotal: 31200,
    annualSavings: 33800,
    savingsPercent: 52
  });

  useEffect(() => {
    const localTotal = localSalary * (1 + benefits / 100);
    const vaTotal = hoursPerWeek * vaRate * 52;
    const annualSavings = localTotal - vaTotal;
    const savingsPercent = localTotal > 0 ? Math.round((annualSavings / localTotal) * 100) : 0;

    setCalculations({
      localTotal,
      vaTotal,
      annualSavings,
      savingsPercent
    });
  }, [localSalary, benefits, hoursPerWeek, vaRate]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Savings Calculator</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how much you could save by hiring a virtual assistant instead of a local employee
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Your Current Costs</h3>
              
              <div>
                <Label htmlFor="localSalary" className="text-sm font-medium text-slate-700 mb-2">
                  Local Employee Salary (Annual)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="localSalary"
                    type="number"
                    value={localSalary}
                    onChange={(e) => setLocalSalary(Number(e.target.value))}
                    className="pl-8"
                    placeholder="50,000"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="benefits" className="text-sm font-medium text-slate-700 mb-2">
                  Additional Benefits & Costs (%)
                </Label>
                <Input
                  id="benefits"
                  type="number"
                  value={benefits}
                  onChange={(e) => setBenefits(Number(e.target.value))}
                  placeholder="30"
                />
                <p className="text-sm text-slate-500 mt-1">
                  Include health insurance, payroll taxes, office space, equipment, etc.
                </p>
              </div>

              <div>
                <Label htmlFor="hoursPerWeek" className="text-sm font-medium text-slate-700 mb-2">
                  Hours Needed Per Week
                </Label>
                <Input
                  id="hoursPerWeek"
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  placeholder="40"
                />
              </div>

              <div>
                <Label htmlFor="vaRate" className="text-sm font-medium text-slate-700 mb-2">
                  Virtual Assistant Rate (Per Hour)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="vaRate"
                    type="number"
                    value={vaRate}
                    onChange={(e) => setVaRate(Number(e.target.value))}
                    className="pl-8"
                    placeholder="15"
                  />
                </div>
              </div>
            </div>

            {/* Calculator Results */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Your Potential Savings</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="text-slate-600">Local Employee Total Cost</span>
                    <span className="font-semibold text-slate-900">
                      ${calculations.localTotal.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="text-slate-600">Virtual Assistant Cost</span>
                    <span className="font-semibold text-slate-900">
                      ${calculations.vaTotal.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b-2 border-green-200 bg-green-50 px-4 rounded-lg">
                    <span className="text-green-700 font-medium">Annual Savings</span>
                    <span className="font-bold text-2xl text-green-700">
                      ${calculations.annualSavings.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="text-center mt-6">
                    <p className="text-sm text-slate-600 mb-4">
                      That's a <span className="font-semibold text-green-600">{calculations.savingsPercent}%</span> cost reduction!
                    </p>
                    <Button 
                      onClick={scrollToContact}
                      className="bg-primary-600 text-white hover:bg-primary-700 w-full font-semibold"
                    >
                      Get Your Custom Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
