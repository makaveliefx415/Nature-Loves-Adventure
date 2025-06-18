
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
const destinationsData = [
  {
    id: "serengeti",
    title: "Serengeti National Park",
    location: "Northern Tanzania",
    description: "Witness the Great Migration and incredible wildlife in endless plains.",
    image: "https://images.pexels.com/photos/13098896/pexels-photo-13098896.jpeg?auto=compress&cs=tinysrgb&w=2000",
    longDescription: "The Serengeti ecosystem is one of the oldest on earth. The essential features of climate, vegetation and fauna have barely changed in the past million years. Early human ancestors and modern humans have inhabited the Serengeti for 3.6 million years. The Serengeti is Tanzania's oldest national park and remains the flagship of the country's tourism industry, attracting thousands of visitors each year for the annual migration of over 1.5 million wildebeest and 250,000 zebra and expirence the beauty of Tanzania and make you're trip to become great and wonderfull and breathtaking."
  },
  {
    id: "kilimanjaro",
    title: "Mount Kilimanjaro",
    location: "Kilimanjaro Region",
    description: "Climb Africa's highest peak and conquer the roof of Africa.",
    image: "https://images.pexels.com/photos/15993990/pexels-photo-15993990/free-photo-of-a-view-of-kilimanjaro.jpeg?auto=compress&cs=tinysrgb&w=1000",
    longDescription: "Mount Kilimanjaro, with its three volcanic cones, is a dormant volcano in Tanzania and the highest mountain in Africa. The mountain is part of Kilimanjaro National Park and is a major climbing destination. Kilimanjaro rises approximately 4,900 metres from its base to 5,895 metres above sea level, making it the highest free-standing mountain in the world and it's the second highest Mountain in the world, come and help to conquar the upppear highest level of mountain kilimanjaro and to see the best view of on top of the mountain kilimanjaro and have the breathtaking moment, Welcome To Tanzania and have the best moment in you're live."
  },
  {
    id: "zanzibar",
    title: "Zanzibar Archipelago",
    location: "Indian Ocean",
    description: "Relax on pristine beaches with crystal clear turquoise waters.",
    image: "https://images.pexels.com/photos/30312987/pexels-photo-30312987/free-photo-of-breathtaking-zanzibar-beach-with-turquoise-waters.jpeg?auto=compress&cs=tinysrgb&w=1000",
    longDescription: "The Zanzibar Archipelago consists of several islands lying off the coast of East Africa. The main island, Unguja, is commonly referred to as Zanzibar. The archipelago was once a separate state with a long trading history within the Arab world; it united with Tanganyika to form Tanzania in 1964. Today, it is a semi-autonomous region of Tanzania known for its beautiful beaches, coral reefs, and historic Stone Town, a UNESCO World Heritage Site and have the best moment that you never expirience in you're life by visiting Tanzania."
  },
  {
    id: "ngorongoro",
    title: "Ngorongoro Crater",
    location: "Ngorongoro Conservation Area",
    description: "Explore the world's largest intact caldera with diverse wildlife.",
    image: "https://images.pexels.com/photos/7205272/pexels-photo-7205272.jpeg?auto=compress&cs=tinysrgb&w=1000",
    longDescription: "The Ngorongoro Crater is a breathtaking natural wonder, a collapsed volcano that forms an incredible bowl of about 265 square kilometers with sides up to 600 meters deep. It's home to approximately 25,000 animals, including the highest density of mammalian predators in Africa. The crater, which formed when a large volcano exploded and collapsed on itself, is the largest intact volcanic caldera in the world."
  },
];

const DestinationPage = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const foundDestination = destinationsData.find(dest => dest.id === id);
    setDestination(foundDestination);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-tanzania-green"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
        <Button asChild>
          <Link to="/#destinations">Browse All Destinations</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
     
      <div className="relative h-[60vh]">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{destination.title}</h1>
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-tanzania-orange mr-2" />
              <p className="text-lg font-medium text-white">{destination.location}</p>
            </div>
          </div>
        </div>
      </div>
      
     
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About {destination.title}</h2>
          
          <p className="mb-6 text-lg leading-relaxed">{destination.longDescription}</p>
          
          <h3 className="text-2xl font-bold mb-4">Plan Your Visit</h3>
          <p className="mb-8 text-lg">
            Ready to experience the magic of {destination.title}? Our expert guides will help you create the perfect itinerary tailored to your preferences and budget.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-tanzania-orange hover:bg-tanzania-orange/90 text-white flex items-center gap-2" asChild>
              <Link to="/book-now">
                Book This Safari <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button variant="outline" className="border-tanzania-green text-tanzania-green hover:bg-tanzania-green/10" asChild>
              <Link to="/#destinations">View Other Destinations</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DestinationPage;
