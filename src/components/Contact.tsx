import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "123 Travel Street, Adventure City, AC 12345",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@wanderlust.com",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Fri: 9AM - 6PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next adventure? Contact us today and let's plan your dream journey together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 bg-card shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First Name" className="bg-background" />
                  </div>
                  <div>
                    <Input placeholder="Last Name" className="bg-background" />
                  </div>
                </div>
                
                <Input placeholder="Email Address" type="email" className="bg-background" />
                <Input placeholder="Phone Number" type="tel" className="bg-background" />
                <Input placeholder="Destination of Interest" className="bg-background" />
                <Textarea 
                  placeholder="Tell us about your dream trip..." 
                  className="bg-background min-h-[120px]" 
                />
                
                <Button variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA Section */}
            <Card className="border-0 bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to explore?</h3>
                <p className="text-white/90 mb-6">
                  Join thousands of happy travelers who have discovered amazing destinations with us.
                </p>
                <Button variant="glass" size="lg">
                  Start Planning
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;