import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import mountainImage from "@/assets/mountain-destination.jpg";
import culturalImage from "@/assets/cultural-destination.jpg";
import cityImage from "@/assets/city-destination.jpg";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Swiss Alps Adventure",
      location: "Switzerland",
      image: mountainImage,
      rating: 4.9,
      price: "$1,299",
      description: "Experience breathtaking mountain peaks and pristine alpine lakes",
    },
    {
      id: 2,
      name: "Ancient Wonders",
      location: "Cambodia",
      image: culturalImage,
      rating: 4.8,
      price: "$899",
      description: "Discover mystical temples and rich cultural heritage",
    },
    {
      id: 3,
      name: "Urban Exploration",
      location: "Tokyo, Japan",
      image: cityImage,
      rating: 4.9,
      price: "$1,599",
      description: "Immerse yourself in vibrant city life and modern culture",
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most amazing places with our carefully curated travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-large transition-all duration-500 border-0 bg-card">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-golden fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.price}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;