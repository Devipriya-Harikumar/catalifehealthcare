import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  TestTube2, 
  Microscope, 
  Clock, 
  Shield, 
  Award, 
  CheckCircle2,
  FlaskConical,
  Activity,
  CalendarCheck,
  MessageCircle
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LaboratoryPageProps {
  onNavigate: (section: string) => void;
}

export function LaboratoryPage({ onNavigate }: LaboratoryPageProps) {
  const features = [
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Fully Automated",
      description: "State-of-the-art automated hormonal testing machines for precision"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Best Accuracy",
      description: "Industry-leading accuracy rates with quality-controlled processes"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Results",
      description: "Fast turnaround time with comprehensive test reports"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certified Lab",
      description: "NABL accredited laboratory with international standards"
    }
  ];

  const hormonalTests = [
    {
      category: "Thyroid Panel",
      tests: ["TSH", "T3", "T4", "Free T3", "Free T4", "Anti-TPO", "Thyroglobulin"]
    },
    {
      category: "Diabetes Panel",
      tests: ["HbA1c", "Fasting Blood Sugar", "Post-Prandial", "Insulin Levels", "C-Peptide"]
    },
    {
      category: "Reproductive Hormones",
      tests: ["FSH", "LH", "Testosterone", "Estradiol", "Progesterone", "Prolactin", "AMH"]
    },
    {
      category: "Adrenal & Stress",
      tests: ["Cortisol", "ACTH", "DHEA-S", "Aldosterone", "17-OH Progesterone"]
    },
    {
      category: "Growth & Metabolism",
      tests: ["Growth Hormone", "IGF-1", "Vitamin D", "PTH", "Calcium Profile"]
    },
    {
      category: "Comprehensive Panels",
      tests: ["Complete Hormonal Panel", "PCOS Panel", "Male Fertility Panel", "Female Fertility Panel"]
    }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I would like to inquire about hormonal testing at CataLife Neuberg Laboratory.");
    window.open(`https://wa.me/918921169696?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/5 to-secondary/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full">
                <div className="flex items-center gap-2">
                  <FlaskConical className="h-4 w-4" />
                  <span>Advanced Diagnostic Center</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                CataLife Neuberg <span className="text-primary">Hormonal Laboratory</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience precision diagnostics with our fully automated hormonal testing facility. 
                Equipped with cutting-edge technology and certified processes, we deliver accurate 
                results you can trust for your endocrine health.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleWhatsApp}
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Test on WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="gap-2"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Contact Lab
                </Button>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudCUyMGF1dG9tYXRlZHxlbnwxfHx8fDE3NjM2NjEwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="CataLife Neuberg Laboratory Equipment"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Laboratory
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets clinical excellence for the most reliable hormonal diagnostics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzNjYxMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Laboratory Technology"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Advanced Automated Technology
              </h2>
              
              <p className="text-lg text-gray-600">
                Our laboratory is equipped with the latest fully automated hormonal analyzers 
                from leading global manufacturers, ensuring consistent, accurate results with 
                minimal human intervention.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Chemiluminescence Technology</h4>
                    <p className="text-gray-600">Most sensitive method for hormone detection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Control Systems</h4>
                    <p className="text-gray-600">Multi-level QC with external proficiency testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Digital Reporting</h4>
                    <p className="text-gray-600">Instant online access to test reports</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">NABL Accredited</h4>
                    <p className="text-gray-600">International quality standards maintained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hormonal Tests Available */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Hormonal Testing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete range of endocrine tests for accurate diagnosis and monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hormonalTests.map((panel, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <TestTube2 className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-gray-900">{panel.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {panel.tests.map((test, testIndex) => (
                      <li key={testIndex} className="flex items-center gap-2 text-gray-600">
                        <Activity className="h-4 w-4 text-secondary" />
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Get Accurate Hormonal Testing Today
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Experience precision diagnostics with our fully automated laboratory. 
            Book your test now for quick, reliable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-white text-primary hover:bg-white/90 gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Book Test via WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('appointment')}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 gap-2"
            >
              <CalendarCheck className="h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
