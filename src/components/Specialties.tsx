import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Droplets, Scale, Zap, Pill, TrendingUp, Users, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SpecialtiesProps {
  onNavigate: (section: string) => void;
}

export function Specialties({ onNavigate }: SpecialtiesProps) {
  const specialties = [
    {
      icon: Droplets,
      title: "Diabetes",
      description: "Comprehensive diabetes management including Type 1, Type 2, and gestational diabetes with advanced monitoring and treatment.",
      image: "https://images.unsplash.com/photo-1684156486280-ff59f07fc5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMHN1Z2FyJTIwdGVzdCUyMGdsdWNvbWV0ZXJ8ZW58MXx8fHwxNzYzMjYwOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-blue-500"
    },
    {
      icon: Scale,
      title: "Obesity",
      description: "Medical weight management programs, metabolic evaluation, and comprehensive obesity treatment with lifestyle counseling.",
      image: "https://images.unsplash.com/photo-1634463278803-f9f71890e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYmVzaXR5JTIwYmVsbHklMjBvdmVyd2VpZ2h0fGVufDF8fHx8MTc2MzI2MDY1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "Thyroid",
      description: "Complete thyroid care including hyperthyroidism, hypothyroidism, thyroid nodules, and thyroid cancer management.",
      image: "https://images.unsplash.com/photo-1622014401796-6b22d5ed7d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG5lY2slMjB0aHlyb2lkfGVufDF8fHx8MTc2MzI2MDk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-purple-500"
    },
    {
      icon: Pill,
      title: "Hormone Disorders",
      description: "Treatment of PCOS, menopause, adrenal disorders, growth hormone issues, and other endocrine imbalances.",
      image: "https://images.unsplash.com/photo-1590538289828-8f7d7170210f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRlcHJlc3NlZCUyMGhvcm1vbmFsfGVufDF8fHx8MTc2MzI2MDk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Disorders",
      description: "Diagnosis and treatment of growth hormone deficiency, short stature, delayed growth, and other growth-related conditions.",
      image: "https://images.unsplash.com/photo-1725596698141-15882898fc42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGdyb3d0aCUyMGhlaWdodCUyMG1lYXN1cmVtZW50fGVufDF8fHx8MTc2MzI2MDk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Pubertal Disorders",
      description: "Management of early or delayed puberty, precocious puberty, and adolescent hormone-related conditions.",
      image: "https://images.unsplash.com/photo-1758798486599-202466e4152c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMGFkb2xlc2NlbnQlMjBoZWFsdGh8ZW58MXx8fHwxNzYzMjYwOTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-indigo-500"
    },
    {
      icon: Heart,
      title: "Sexual Disorders",
      description: "Confidential treatment for erectile dysfunction, low libido, testosterone deficiency, and reproductive hormone issues.",
      image: "https://images.unsplash.com/photo-1758691462370-cef1774278cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwdGhlcmFweXxlbnwxfHx8fDE3NjMyNjA5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert care across all areas of endocrinology with personalized treatment plans for optimal health outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 ${specialty.color} rounded-lg flex items-center justify-center`}>
                  <specialty.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{specialty.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{specialty.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onNavigate('appointment')}
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}