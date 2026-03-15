import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Type 2 Diabetes",
      rating: 5,
      text: "Dr. Vishnu's comprehensive approach to diabetes management has completely transformed my health. My blood sugar levels are now well-controlled, and I feel more energetic than ever.",
      location: "Mumbai"
    },
    {
      name: "Rajesh Kumar",
      condition: "Thyroid Disorder",
      rating: 5,
      text: "After struggling with thyroid issues for years, Dr. Radhakrishnan's treatment plan helped me regain my energy and lose the excess weight. Highly recommend his expertise.",
      location: "Bangalore"
    },
    {
      name: "Meera Patel",
      condition: "PCOS",
      rating: 5,
      text: "The personalized hormone treatment for my PCOS has been life-changing. Dr. Vishnu's approach is thorough and compassionate. I'm grateful for the excellent care.",
      location: "Chennai"
    },
    {
      name: "Arjun Nair",
      condition: "Obesity Management",
      rating: 5,
      text: "Lost 25kg with Dr. Vishnu's medical weight management program. The approach was scientific, sustainable, and supported by excellent follow-up care.",
      location: "Hyderabad"
    },
    {
      name: "Lakshmi Iyer",
      condition: "Menopause Management",
      rating: 5,
      text: "Dr. Radhakrishnan's hormone replacement therapy made my menopause transition so much smoother. Professional, knowledgeable, and caring doctor.",
      location: "Kochi"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from patients who have experienced exceptional care and life-changing results.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full bg-gray-50 border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Quote className="h-8 w-8 text-primary opacity-50" />
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-primary">{testimonial.condition}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}