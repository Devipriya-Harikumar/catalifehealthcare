import { Button } from "./ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-primary/5 to-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Super Speciality Center for{" "}
                <span className="text-primary">Diabetes, Obesity, Thyroid</span> & Hormones
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Comprehensive endocrine care with over 15 years of experience. 
                Take control of your metabolic health with expert treatment and personalized care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => onNavigate('appointment')}
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                <Calendar className="h-5 w-5" />
                Consult Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onNavigate('doctor')}
                className="gap-2"
              >
                Meet the Doctor
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Daily</div>
                <div className="text-sm text-gray-600">Consultations</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603540879030-cf3ef7505a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwa2VyYWxhJTIwaG9zcGl0YWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM2NjA4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="CataLife Health Care - Endocrinology Clinic"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}