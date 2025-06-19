
import { Camera, Compass, Flag, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SafariExperiences = () => {
  const safariTypes = [
    {
      title: "Wildlife Safari",
      description: "Experience the thrill of witnessing the 'Big Five' in their natural habitat across Tanzania's national parks see the best amaizing animals like elephants, rhinos, and other Big five animals.",
      icon: <Camera className="h-6 w-6 text-tanzania-orange" />,
      image: "https://images.pexels.com/photos/86413/elephant-africa-okavango-delta-animal-86413.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Kilimanjaro Trek",
      description: "Conquer Africa's highest peak with expert guides on a once-in-a-lifetime climbing expedition, and see the very top of Tanzania and see the best view and breathtaking moment on the peak .",
      icon: <Mountain className="h-6 w-6 text-tanzania-orange" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIg108Pn_C1mmB6yccrvGr8xpaSE1YUQn82g&s",
    },
    {
      title: "Cultural Tours",
      description: "Immerse yourself in the rich traditions of the Maasai and other Tanzanian tribes through authentic cultural exchanges and get some new knowledge in Tanzania with there culture practice.",
      icon: <Flag className="h-6 w-6 text-tanzania-orange" />,
      image: "https://images.pexels.com/photos/12334810/pexels-photo-12334810.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Zanzibar Beach",
      description: "Relax on the pristine beaches of Zanzibar with crystal-clear waters and vibrant marine life and have the breathtaking moment in you're life, Welcome Zanzibar Travel with Nature loves Adventure.",
      icon: <Compass className="h-6 w-6 text-tanzania-orange" />,
      image: "https://images.pexels.com/photos/5993748/pexels-photo-5993748.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
  ];

  return (
    <section id="safaris" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Unforgettable Safari Experiences</h2>
        <p className="section-subtitle text-center">
          From thrilling wildlife encounters to breathtaking landscapes, Tanzania offers diverse experiences for every adventurer
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {safariTypes.map((safari, index) => (
            <div 
              key={index} 
              className="safari-card group animate-on-scroll" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={safari.image} 
                  alt={safari.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-full bg-tanzania-green/10 w-12 h-12 flex items-center justify-center">
                  {safari.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-tanzania-green">{safari.title}</h3>
                <p className="text-gray-600 mb-4">{safari.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-tanzania-green text-tanzania-green hover:bg-tanzania-green hover:text-white"
                  asChild
                >
                  <Link to="/book-now">Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafariExperiences;
