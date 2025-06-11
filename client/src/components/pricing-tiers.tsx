import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PricingTiers() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      price: 12,
      minimum: "Minimum 10 hours/week",
      features: [
        "Administrative tasks",
        "Email management",
        "Calendar scheduling",
        "Basic research",
        "Standard support"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: 15,
      minimum: "Minimum 20 hours/week",
      features: [
        "Everything in Starter",
        "Social media management",
        "Content creation",
        "Customer support",
        "Priority support",
        "Monthly reporting"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: 18,
      minimum: "Minimum 40 hours/week",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom workflows",
        "Advanced analytics",
        "24/7 priority support",
        "SLA guarantee"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Flexible pricing options to match your business needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative hover:shadow-lg transition-shadow ${
                plan.isPopular ? 'shadow-lg border-2 border-primary-500' : 'shadow-sm border border-slate-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-600">/hour</span>
                </div>
                <p className="text-sm text-slate-500">{plan.minimum}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full font-semibold ${
                    plan.isPopular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'bg-slate-600 text-white hover:bg-slate-700'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
