import { Button } from "./ui/button";
import { Calendar, Phone, MessageCircle } from "lucide-react";

interface CallToActionProps {
  onNavigate: (section: string) => void;
}

export function CallToAction({ onNavigate }: CallToActionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Take Control of Your Health Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Don't wait for symptoms to worsen. Get expert endocrine care and start your journey to better health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('appointment')}
              className="bg-white text-primary hover:bg-gray-50 gap-2 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Your Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 98765 43210
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/90">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Online & Offline Consultations</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Same Day Appointments Available</span>
              </div>
              <button 
                className="flex items-center justify-center gap-2 hover:text-white transition-colors"
                onClick={() => window.open('https://wa.me/918921169696?text=Hello! I need support with my endocrinology consultation.', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}