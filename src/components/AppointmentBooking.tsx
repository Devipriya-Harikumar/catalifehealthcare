import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";

export function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    consultation: "",
    specialty: "",
    message: ""
  });

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
  ];

  const specialties = [
    "Diabetes Management",
    "Thyroid Disorders",
    "Obesity Treatment",
    "PCOS/PCOD",
    "Hormone Replacement Therapy",
    "Metabolic Disorders",
    "General Endocrinology"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment request submitted! We will contact you shortly to confirm.");
    // In a real app, this would submit to a backend
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-lg text-gray-600">
            Schedule a consultation with Dr. Vishnu Radhakrishnan
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Appointment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Appointment Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="consultation">Consultation Type *</Label>
                      <Select value={formData.consultation} onValueChange={(value) => handleInputChange("consultation", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="offline">In-Person Consultation</SelectItem>
                          <SelectItem value="online">Online Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Specialty *</Label>
                      <Select value={formData.specialty} onValueChange={(value) => handleInputChange("specialty", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          {specialties.map((specialty) => (
                            <SelectItem key={specialty} value={specialty}>
                              {specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your symptoms or any specific concerns..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-gray-600">+91 8921169696</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-600">catalifehealthcare@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">Clinic Hours</div>
                      <div className="text-sm text-gray-600">Mon-Sat: 8AM-8PM</div>
                      <div className="text-sm text-gray-600">Sunday: Holiday</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2"
                    onClick={() => window.open('https://wa.me/918921169696?text=Hello! I would like to book an appointment with Dr. Vishnu Radhakrishnan.', '_blank')}
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-3">Emergency Consultation</h4>
                <p className="text-sm text-gray-700 mb-4">
                  For urgent medical concerns, please call our emergency line or visit the nearest hospital.
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Emergency Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}