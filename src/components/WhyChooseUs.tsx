import { Card, CardContent } from "./ui/card";
import { Stethoscope, Clock, Heart } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Stethoscope,
      title: "Experienced Endocrinologist",
      description: "15+ years of specialized experience in treating diabetes, obesity, thyroid, and hormone disorders with proven results."
    },
    {
      icon: Clock,
      title: "Daily Consultation Available",
      description: "Flexible scheduling with daily consultations available. Online and offline appointment options for your convenience."
    },
    {
      icon: Heart,
      title: "Comprehensive Hormone Care",
      description: "Complete diagnostic and treatment services for all endocrine disorders with personalized treatment plans."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CataLife Health Care?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide exceptional endocrine care with a patient-centered approach and cutting-edge treatment methods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}