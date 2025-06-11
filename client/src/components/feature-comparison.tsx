import { Check, X } from "lucide-react";

export default function FeatureComparison() {
  const features = [
    { name: "Administrative Tasks", starter: true, professional: true, enterprise: true },
    { name: "Email & Calendar Management", starter: true, professional: true, enterprise: true },
    { name: "Research & Data Entry", starter: true, professional: true, enterprise: true },
    { name: "Social Media Management", starter: false, professional: true, enterprise: true },
    { name: "Content Creation", starter: false, professional: true, enterprise: true },
    { name: "Customer Support", starter: false, professional: true, enterprise: true },
    { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
    { name: "Custom Workflows", starter: false, professional: false, enterprise: true },
    { name: "24/7 Priority Support", starter: false, professional: false, enterprise: true },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Feature Comparison</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Compare what's included in each plan to find the perfect fit for your business
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-sm border border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-slate-900">Features</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-900">Starter</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-900 bg-primary-50">Professional</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-900">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {features.map((feature, index) => (
                <tr key={feature.name} className={index % 2 === 1 ? "bg-slate-25" : ""}>
                  <td className="py-4 px-6 font-medium text-slate-900">{feature.name}</td>
                  <td className="text-center py-4 px-6">
                    {feature.starter ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-6 bg-primary-50">
                    {feature.professional ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {feature.enterprise ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
