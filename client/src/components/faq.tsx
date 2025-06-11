import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much can I really save with a virtual assistant?",
      answer: "Most businesses save 40-60% compared to hiring a local employee when you factor in salary, benefits, office space, equipment, and other overhead costs. Our calculator above gives you a personalized estimate based on your specific situation."
    },
    {
      question: "What qualifications do your virtual assistants have?",
      answer: "All our virtual assistants have university degrees and undergo rigorous screening including skills testing, background checks, and interviews. They have an average of 5+ years of professional experience and are trained in the latest business tools and software."
    },
    {
      question: "Can I scale my hours up or down as needed?",
      answer: "Yes! Our flexible plans allow you to adjust hours with just 1 week notice. You can scale up during busy periods and reduce hours during slower times, giving you the flexibility that traditional employees can't provide."
    },
    {
      question: "What time zones do your virtual assistants work in?",
      answer: "We have virtual assistants available across multiple time zones to match your business hours. Whether you need coverage during EST, PST, or even 24/7 support, we can accommodate your schedule requirements."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most clients are matched with their ideal virtual assistant within 48-72 hours. We'll schedule a consultation call, understand your needs, and introduce you to pre-screened candidates who match your requirements."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">
            Get answers to common questions about our virtual assistant services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-slate-200">
              <button 
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => toggleItem(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-slate-400 transition-transform flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
