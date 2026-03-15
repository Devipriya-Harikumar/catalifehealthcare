import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Specialties } from "./components/Specialties";
import { DoctorProfile } from "./components/DoctorProfile";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { AppointmentBooking } from "./components/AppointmentBooking";
import { ContactPage } from "./components/ContactPage";
import { BMICalculator } from "./components/BMICalculator";
import { LaboratoryPage } from "./components/LaboratoryPage";
import { AboutUsPage } from "./components/AboutUsPage";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "appointment":
        return <AppointmentBooking />;
      case "contact":
        return <ContactPage />;
      case "about":
        return <AboutUsPage onNavigate={handleNavigate} />;
      case "laboratory":
        return <LaboratoryPage onNavigate={handleNavigate} />;
      case "doctor":
        return (
          <div className="pt-16">
            <DoctorProfile onNavigate={handleNavigate} />
          </div>
        );
      case "specialties":
        return (
          <div className="pt-16">
            <Specialties onNavigate={handleNavigate} />
          </div>
        );
      case "home":
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <WhyChooseUs />
            <Specialties onNavigate={handleNavigate} />
            <DoctorProfile onNavigate={handleNavigate} />
            <BMICalculator />
            <Testimonials />
            <CallToAction onNavigate={handleNavigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}