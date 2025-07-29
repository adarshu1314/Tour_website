import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    });
  };

  const handleStartPlanning = () => {
    const formSection = document.querySelector('#contact form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Let's Start Planning!",
      description: "Fill out the form to begin your journey with us.",
    });
  };

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
      details: "hello@Global journey.com",
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 textOrange">
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
              <h3 className="text-2xl font-bold text-foreground mb-6 textOrange">Send us a message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      name="firstName"
                      placeholder="First Name" 
                      className="bg-background" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      name="lastName"
                      placeholder="Last Name" 
                      className="bg-background"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <Input 
                  name="email"
                  placeholder="Email Address" 
                  type="email" 
                  className="bg-background"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  name="phone"
                  placeholder="Phone Number" 
                  type="tel" 
                  className="bg-background"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <Input 
                  name="destination"
                  placeholder="Destination of Interest" 
                  className="bg-background"
                  value={formData.destination}
                  onChange={handleInputChange}
                />
                <Textarea 
                  name="message"
                  placeholder="Tell us about your dream trip..." 
                  className="bg-background min-h-[120px]"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                
                <Button variant="cta" size="lg" className="w-full" type="submit">
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
                  <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
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
                <Button variant="glass" size="lg" onClick={handleStartPlanning}>
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