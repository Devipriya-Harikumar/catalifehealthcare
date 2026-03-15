import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle, GraduationCap, Award, Briefcase, TrendingUp, Building2 } from "lucide-react";

interface AboutUsPageProps {
  onNavigate?: (section: string) => void;
}

export function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  const openWhatsApp = (message: string) => {
    const phoneNumber = "918921169696";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">About CataLife Health Care</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            A center of excellence in endocrinology and metabolic health, committed to delivering 
            specialized diagnostic services and comprehensive patient care.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-primary">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide world-class endocrinology care and specialized hormonal diagnostics, 
                  combining clinical excellence with advanced technology to improve the health and 
                  well-being of our patients. We are dedicated to accurate diagnosis, evidence-based 
                  treatment, and compassionate care for all endocrine and metabolic disorders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-primary">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading center of excellence in endocrinology diagnostics and metabolic 
                  health in Kerala, ensuring that patients and physicians have access to the highest 
                  quality specialized diagnostic services, innovative treatment protocols, and 
                  patient-centered care delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Led by experts who combine clinical excellence with strategic vision to deliver 
              exceptional healthcare services.
            </p>
          </div>

          {/* Medical Director */}
          <div className="mb-20">
            <Card className="border-primary/20 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative">
                  <div className="h-full min-h-[400px] md:min-h-[600px]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1698465281093-9f09159733b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBLZXJhbGElMjBtYWxlJTIwZG9jdG9yJTIwZW5kb2NyaW5vbG9naXN0JTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNDczMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Dr. Vishnu Radhakrishnan - Medical Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-5 h-5" />
                      <span className="text-sm font-medium">Medical Director</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-primary mb-2">Dr. Vishnu Radhakrishnan</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        MD, DM
                      </span>
                      <span className="inline-block bg-secondary/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Endocrinologist
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 font-medium mb-4">Medical Director</p>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Dr. Vishnu Radhakrishnan serves as the Medical Director of CataLife Health Care and is a 
                      nationally recognized Endocrinologist with extensive expertise in the diagnosis and management 
                      of endocrine and metabolic disorders. He completed his DM in Endocrinology from the All India 
                      Institute of Medical Sciences (AIIMS), one of India's most prestigious medical institutions, 
                      after obtaining his MD in Internal Medicine.
                    </p>
                    
                    <p>
                      Dr. Vishnu has significant clinical experience in managing complex endocrine conditions including 
                      diabetes, thyroid disorders, pituitary diseases, adrenal disorders, metabolic bone diseases, obesity, 
                      and hormonal disorders. He is widely regarded as an expert in obesity management and pediatric growth 
                      disorders, with a strong focus on evaluating and treating children with growth issues, short stature, 
                      and hormonal causes of delayed or abnormal growth.
                    </p>
                    
                    <p>
                      Known for his academic rigor and clinical expertise, he has contributed to advancing endocrine care 
                      and specialized hormonal diagnostics. Under his leadership, CataLife has developed specialized endocrine 
                      diagnostic services and advanced hormonal testing protocols aimed at supporting clinicians with accurate, 
                      reliable, and clinically meaningful laboratory data.
                    </p>
                    
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                      <p className="font-medium text-primary mb-2 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        Vision for Excellence
                      </p>
                      <p className="text-gray-700">
                        His vision is to build a center of excellence in endocrinology diagnostics and metabolic health, 
                        ensuring that patients and physicians have access to high-quality specialized diagnostic services.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => openWhatsApp("Hello, I would like to schedule a consultation with Dr. Vishnu Radhakrishnan.")}
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Schedule Consultation via WhatsApp
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Managing Director */}
          <div>
            <Card className="border-primary/20 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 md:order-2 relative">
                  <div className="h-full min-h-[400px] md:min-h-[600px]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1745426358430-7d88183c1b90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBLZXJhbGElMjBtYWxlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM0NzMxODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Ananthu Radhakrishnan - Managing Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-5 h-5" />
                      <span className="text-sm font-medium">Managing Director</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="md:col-span-3 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-primary mb-2">Ananthu Radhakrishnan</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        CFA
                      </span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        FRM
                      </span>
                      <span className="inline-block bg-secondary/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        MBA - Finance & Strategy
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 font-medium mb-4">Managing Director</p>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Mr. Ananthu Radhakrishnan serves as the Managing Director of CataLife Health Care, bringing 
                      extensive expertise in finance, strategy, and healthcare operations. He holds a B.Tech from the 
                      College of Engineering Trivandrum, and an MBA in Finance and Strategy from the International 
                      Management Institute (IMI), New Delhi. He is also a Chartered Financial Analyst (CFA) and 
                      Financial Risk Manager (FRM).
                    </p>
                    
                    <p>
                      Prior to joining CataLife, Mr. Ananthu built a distinguished career in global financial institutions. 
                      He worked as an Investment Banker with UBS and later served as Vice President at Barclays Investment 
                      Bank, where he was involved in strategic financial and capital markets activities. He has also led 
                      product development initiatives at Arcesium, a global financial technology and services firm.
                    </p>
                    
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                      <p className="font-medium text-primary mb-2 flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        Strategic Leadership
                      </p>
                      <p className="text-gray-700">
                        At CataLife, he leads the organization's strategic planning, operational management, and 
                        technological development, ensuring that the institution continues to expand its capabilities 
                        in specialized diagnostics, healthcare partnerships, and innovative service models. His focus 
                        is on building a healthcare organization that combines clinical excellence with efficient systems, 
                        advanced technology, and patient-centered service delivery.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Previous Experience</p>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Vice President - Barclays Investment Bank</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Investment Banker - UBS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Product Development - Arcesium</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Education</p>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>B.Tech - CET Trivandrum</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>MBA Finance & Strategy - IMI New Delhi</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>CFA, FRM Certifications</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => openWhatsApp("Hello, I would like to inquire about CataLife Health Care services and partnerships.")}
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Connect via WhatsApp
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our commitment to excellence in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Clinical Excellence</h3>
                <p className="text-gray-700">
                  Delivering the highest standards of medical care through expertise, 
                  evidence-based practice, and continuous learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
                <p className="text-gray-700">
                  Embracing advanced technology and innovative approaches to improve 
                  diagnostic accuracy and treatment outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Patient-Centered Care</h3>
                <p className="text-gray-700">
                  Placing patient needs at the heart of everything we do, with compassion, 
                  respect, and personalized attention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Experience Excellence in Endocrine Care?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book your appointment today and benefit from our specialized expertise in endocrinology and metabolic health.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate && onNavigate('appointment')}
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Book Appointment
            </button>
            <button
              onClick={() => openWhatsApp("Hello, I would like to learn more about CataLife Health Care services.")}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
