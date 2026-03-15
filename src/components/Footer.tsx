import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: "Home", section: "home" },
    { label: "About Us", section: "about" },
    { label: "Specialties", section: "specialties" },
    { label: "Laboratory", section: "laboratory" },
    { label: "Book Appointment", section: "appointment" },
    { label: "Contact Us", section: "contact" }
  ];

  const specialties = [
    "Diabetes Management",
    "Thyroid Treatment",
    "Obesity Care",
    "Hormone Therapy",
    "PCOS/PCOD Treatment",
    "Metabolic Disorders"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">CataLife Health Care</h3>
              <p className="text-gray-400 leading-relaxed">
                Super speciality center for comprehensive endocrine care with over 15 years of experience.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">
                  1st Floor, EKB Towers, Doctors colony, Karuvambram, Manjeri, Kerala 676121
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">+91 8921169696</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">CataLifeHealthCare@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Specialties</h4>
            <ul className="space-y-2">
              {specialties.map((specialty, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Hours & CTA */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-white mb-4">Clinic Hours</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <div>Mon - Sat: 8:00 AM - 8:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={() => onNavigate('appointment')}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 gap-2"
                onClick={() => window.open('https://wa.me/918921169696?text=Hello! I would like to inquire about your endocrinology services.', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CataLife Health Care. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}