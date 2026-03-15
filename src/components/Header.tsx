import { Button } from "./ui/button";
import { Menu, Phone, Calendar } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'laboratory', label: 'Laboratory' },
    { id: 'doctor', label: 'Doctor' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-primary">CataLife Health Care</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Call
            </Button>
            <Button 
              onClick={() => onNavigate('appointment')}
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}