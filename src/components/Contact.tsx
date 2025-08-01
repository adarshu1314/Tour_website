import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Shared class for input/textarea with orange focus style
const focusClass =
  "w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-base " +
  "focus:border-[#f4a750] focus:ring-2 focus:ring-[#f4a750] outline-none transition";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const [groupData, setGroupData] = useState({
    groupName: "",
    adults: "",
    children: "",
    totalNights: "",
    destinations: "",
    nightsPerDestination: "",
    inclusions: "",
    mealPlan: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    });
  };

  const handlePlanSubmit = () => {
    toast({
      title: "Group Tour Submitted!",
      description: `Thanks ${groupData.groupName}, we'll contact you soon.`,
    });
  };

  const contactInfo = [
    { icon: MapPin, title: "Address", details: "123 Travel Street, Adventure City, AC 12345" },
    { icon: Phone, title: "Phone", details: "+1 (555) 123-4567" },
    { icon: Mail, title: "Email", details: "hello@Global journey.com" },
    { icon: Clock, title: "Hours", details: "Mon - Fri: 9AM - 6PM" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f4a750]">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next adventure? Contact us today and let's plan your dream journey together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Form */}
          <Card className="border-0 shadow-md flex flex-col">
            <CardContent className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-[#f4a750]">Send us a message</h3>
              <form className="space-y-6 flex-1 flex flex-col" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    className={focusClass}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    className={focusClass}
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className={focusClass}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={focusClass}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  name="destination"
                  placeholder="Destination of Interest"
                  className={focusClass}
                  value={formData.destination}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your dream trip..."
                  className={`${focusClass} min-h-[120px]`}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#f4a750] hover:bg-[#e08f30] w-full text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Info + Dialog */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition flex-1"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f4a750] to-orange-400 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

              <Card className="border-0 bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to explore?</h3>
                <p className="mb-6">
                  Join thousands of happy travelers who have discovered amazing destinations with us.
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-orange-600 hover:bg-gray-100">
                      Start Planning
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md rounded-xl p-6">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">
                        Plan Your Group Tour
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto">
                      <input
                        name="groupName"
                        placeholder="Group Name"
                        value={groupData.groupName}
                        onChange={handleGroupChange}
                        className={focusClass}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          name="adults"
                          placeholder="Adults"
                          value={groupData.adults}
                          onChange={handleGroupChange}
                          className={focusClass}
                        />
                        <input
                          name="children"
                          placeholder="Children"
                          value={groupData.children}
                          onChange={handleGroupChange}
                          className={focusClass}
                        />
                      </div>
                      <input
                        name="totalNights"
                        placeholder="Total Nights"
                        value={groupData.totalNights}
                        onChange={handleGroupChange}
                        className={focusClass}
                      />
                      <input
                        name="destinations"
                        placeholder="Destination(s)"
                        value={groupData.destinations}
                        onChange={handleGroupChange}
                        className={focusClass}
                      />
                      <input
                        name="nightsPerDestination"
                        placeholder="Nights in Each Destination"
                        value={groupData.nightsPerDestination}
                        onChange={handleGroupChange}
                        className={focusClass}
                      />
                      <input
                        name="inclusions"
                        placeholder="Inclusions"
                        value={groupData.inclusions}
                        onChange={handleGroupChange}
                        className={focusClass}
                      />
                      <input
                        name="mealPlan"
                        placeholder="Meal Plan"
                        value={groupData.mealPlan}
                        onChange={handleGroupChange}
                        className={focusClass}
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={handlePlanSubmit}
                        className="bg-[#f4a750] hover:bg-[#e08f30] text-white"
                      >
                        Submit
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
