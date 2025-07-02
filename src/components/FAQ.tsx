
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does FindACoHost work?",
      answer: "Simply create your profile, browse through our database of hosts or guests, and connect with matches that align with your expertise and interests. We facilitate the initial connection and you take it from there."
    },
    {
      question: "Is FindACoHost free to use?",
      answer: "We offer a free tier with basic features, as well as premium plans with advanced search filters, unlimited connections, and priority support. Check our pricing page for details."
    },
    {
      question: "How do you ensure the quality of matches?",
      answer: "All users go through a verification process, and we use advanced matching algorithms based on expertise, interests, and show compatibility. Users can also rate and review their experiences."
    },
    {
      question: "Can I use FindACoHost if I'm new to podcasting?",
      answer: "Absolutely! We welcome podcasters at all levels. Many experienced hosts are happy to mentor newcomers, and we have resources to help you get started."
    },
    {
      question: "What information is shared when I connect with someone?",
      answer: "Your privacy is our priority. We only share basic profile information initially. Email addresses and contact details are only shared after both parties agree to connect."
    },
    {
      question: "How long does it take to find a match?",
      answer: "Most users find suitable matches within 1-3 days of creating their profile. Premium users with access to advanced filters often find matches even faster."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-purple-100">
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
