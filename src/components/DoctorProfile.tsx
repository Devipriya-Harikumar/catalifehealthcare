import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Users, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DoctorProfileProps {
  onNavigate: (section: string) => void;
}

export function DoctorProfile({ onNavigate }: DoctorProfileProps) {
  const credentials = [
    "MBBS, MD (General Medicine), DNB (General Medicine)",
    "DM - Endocrinology (All India Institute of Medical Sciences)",
    "MRCP (UK) SCE (Endocrinology)"
  ];

  const expertise = [
    "Diabetes Management",
    "Thyroid Disorders",
    "Obesity Treatment",
    "PCOS/PCOD",
    "Hormone Replacement",
    "Metabolic Disorders"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert</h2>
          <p className="text-lg text-gray-600">
            Leading endocrinologist with extensive experience in comprehensive hormone care
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-white border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Doctor Photo */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1745426358430-7d88183c1b90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBtYWxlJTIwa2VyYWxhfGVufDF8fHx8MTc2MzY1OTk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Dr. Vishnu Radhakrishnan"
                    className="w-64 h-64 object-cover rounded-lg shadow-md mx-auto lg:mx-0"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-primary text-white px-3 py-1 rounded-full">
                    <span className="font-semibold">10+ Years</span>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Vishnu Radhakrishnan</h3>
                  <p className="text-lg text-primary font-medium mb-3">Medical Director & Senior Consultant Endocrinologist @ CataLife Health Care</p>
                  
                  <div className="space-y-2">
                    {credentials.map((credential, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span className="text-gray-700">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((area, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mx-auto mb-2">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-semibold text-gray-900">10+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mx-auto mb-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-semibold text-gray-900">15,000+</div>
                    <div className="text-xs text-gray-600">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mx-auto mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-semibold text-gray-900">Daily</div>
                    <div className="text-xs text-gray-600">Consultations</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => onNavigate('appointment')}
                    className="bg-primary hover:bg-primary/90 gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Consultation
                  </Button>
                  <Button variant="outline" onClick={() => onNavigate('contact')}>
                    Contact Doctor
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}