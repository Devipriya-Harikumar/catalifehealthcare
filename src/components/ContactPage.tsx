import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you within 24 hours.");
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with CataLife Health Care for appointments, inquiries, or support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Clinic Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      CataLife Health Care<br />
                      1st Floor, EKB Towers, Doctors colony<br />
                      Karuvambram, Manjeri<br />
                      Kerala 676121
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Main: +91 8921169696</p>
                      <p className="text-gray-600">Alternate: +91 9744490975</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">CataLifeHealthCare@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Clinic Hours</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Mon - Sat: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                  <Phone className="h-4 w-4" />
                  Call Now: +91 8921169696
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={() => window.open('https://wa.me/918921169696?text=Hello! I would like to get in touch regarding your endocrinology services.', '_blank')}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Chat
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={() => window.open('https://maps.app.goo.gl/MfBrkCbpazKykRMQ8', '_blank')}
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions (Google Maps)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours. For urgent matters, please call us directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-white border-0 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.9456393969003!2d76.11555187584099!3d11.11742665280967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba637e6b7fd96af%3A0x4f0248580fbfeda0!2sCataLife%20Health%20Care%20%7C%20Dr%20Vishnu%20Radhakrishnan%20-%20Consultant%20Endocrinologist%20(DM%20-%20AIIMS)!5e0!3m2!1sen!2sin!4v1763261491002!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CataLife Health Care Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}