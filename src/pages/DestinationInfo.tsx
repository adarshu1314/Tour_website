import React from "react";

// Importing images properly
import SpainImg from "@/assets/Images/destination/Spain.jpg";
import PortugalImg from "@/assets/Images/destination/Portugal.jpg";
import MoroccoImg from "@/assets/Images/destination/Morocco.jpg";
import EasternEuropeImg from "@/assets/Images/destination/eastern_europe.jpg";
import BalkansImg from "@/assets/Images/destination/Balkans.jpg";
import GreeceImg from "@/assets/Images/destination/Greece.jpg";
import ScandinaviaImg from "@/assets/Images/destination/Scandinavia.jpg";
import IcelandImg from "@/assets/Images/destination/Iceland.jpg";
import { useNavigate } from "react-router-dom";

type Destination = {
  title: string;
  description: string;
  image: string;
};

const destinations: Destination[] = [
  {
    title: "Spain",
    image: SpainImg,
    description:
      "A country of vibrant culture, flamenco rhythms, and striking architecture, Spain captivates visitors with treasures like Barcelona’s Sagrada Família, Madrid’s museums, Andalusia’s palaces, and sun-soaked Mediterranean coastlines. Its historic cities, lively festivals, and world-class cuisine promise unforgettable experiences.",
  },
  {
    title: "Portugal",
    image: PortugalImg,
    description:
      "Portugal’s charm lies in its golden beaches, soulful Fado music, and centuries-old cities. Explore Lisbon’s hills, Porto’s riverside, and the fairytale palaces of Sintra. Renowned for its port wine and seafaring history, Portugal invites you to discover authentic traditions and flavors.",
  },
  {
    title: "Morocco",
    image: MoroccoImg,
    description:
      "A gateway to Africa, Morocco enchants with vibrant souks, ancient medinas, and desert landscapes. Wander Marrakech’s bustling squares, discover Fez’s labyrinthine streets, and marvel at the Atlas Mountains—an immersive blend of Berber, Arab, and European influences.",
  },
  {
    title: "Eastern Europe",
    image: EasternEuropeImg,
    description:
      "Home to timeless architecture and enthralling history, Eastern Europe features storybook castles, cobbled old towns, and rich cultural heritage. Travelers are drawn to Prague’s gothic spires, Budapest’s spas, and the region's blend of tradition, resilience, and warmth.",
  },
  {
    title: "The Balkans",
    image: BalkansImg,
    description:
      "The Balkans offer dramatic scenery, ancient cities, and a mosaic of cultures. Journey through the Adriatic coast, historic towns like Dubrovnik, and discover diverse traditions shaped by Ottoman, Slavic, and Mediterranean influences—making every visit both authentic and unique.",
  },
  {
    title: "Greece",
    image: GreeceImg,
    description:
      "Birthplace of democracy and Western philosophy, Greece dazzles with azure islands, ancient ruins, and sunlit shores. From Athens’ Acropolis to Santorini’s sunsets, Greece fuses myth, history, and Mediterranean splendour into an irresistible destination.",
  },
  {
    title: "Scandinavia",
    image: ScandinaviaImg,
    description:
      "A land of dramatic fjords, serene forests, and sophisticated cities, Scandinavia—covering Norway, Sweden, and Denmark—blends Viking history, rich design heritage, and a high quality of life. Highlights include Oslo’s modernism, Stockholm’s waterways, and Copenhagen’s culinary scene.",
  },
  {
    title: "Iceland",
    image: IcelandImg,
    description:
      "Renowned for its breath taking volcanic landscapes and natural wonders, Iceland offers glaciers, geothermal springs, black sand beaches, and the enchanting Northern Lights. Its Viking heritage and mystical scenery make it a haven for adventurers and lovers of unspoiled nature.",
  },
];

const DestinationInfo = () => {
    const navigate = useNavigate();
  return (
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded-md"
      >
        ← Back to Home
      </button>
      <h1 className="text-4xl font-bold text-center mb-16">Destinations We Cover</h1>

      {destinations.map((destination, idx) => (
        <div
          key={destination.title}
          className={`flex flex-col md:flex-row items-center mb-16 gap-8 ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-72 object-cover rounded-2xl shadow-md "
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">{destination.title}</h2>
            <p className="text-gray-700">{destination.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationInfo;
