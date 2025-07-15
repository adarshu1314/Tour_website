import { Card, CardContent } from "@/components/ui/card";
import { Plane, Shield, Map, Headphones, Camera, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best deals on flights worldwide with our exclusive partnerships",
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for worry-free adventures",
    },
    {
      icon: Map,
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your preferences",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance wherever your journey takes you",
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning moments with professional guidance",
    },
    {
      icon: Users,
      title: "Group Travel",
      description: "Organized group adventures for unforgettable shared experiences",
    },
  ];

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the perfect travel experience, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;