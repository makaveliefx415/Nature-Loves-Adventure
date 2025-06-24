
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "https://media.istockphoto.com/id/168252293/photo/safari-car-is-waiting-for-crossing-elephants.jpg?s=612x612&w=0&k=20&c=XgXFWCizGZQ6swKafSqvHf1Mq5NQGYqfQA7kYsYkVgI=",
    "https://media.istockphoto.com/id/2162535130/photo/elephant-visitor-during-safari-tour-from-car.jpg?s=612x612&w=0&k=20&c=THEOgQpAcp67zVoRK0pV88WRcLnzEtQKUOmkT-bzNKo=",
    "https://media.istockphoto.com/id/941491662/photo/giraffes-herd-in-savannah.jpg?s=612x612&w=0&k=20&c=4_YcLLNLRJXUReR3L6mvLK3IIyXljIjEU2YfPQrGA7E=",
    "https://media.istockphoto.com/id/692556208/photo/africa-tanzania-serengeti-zebras-on-the-road-in-serengeti-national-park-in-front-of-the-jeep.jpg?s=612x612&w=0&k=20&c=WWLoenNUtF46GPZyM4W3XaWjzAF8vy_0XNiGYtOBvj0=",
    "https://images.pexels.com/photos/13098709/pexels-photo-13098709.jpeg?auto=compress&cs=tinysrgb&w=1000",
    
    
      ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById("destinations");
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="container mx-auto px-4 relative z-10 text-[12px] md:text-[23px] ">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-center">
          Discover the Wonderlust  <br />
          of <span className="text-tanzania-gold">Tanzania</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Experience breathtaking wildlife, majestic landscapes, and vibrant cultural heritage in the heart of East Africa
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant= "link" className="bg-tanzania-gold hover:bg-tanzania-gold/90 text-white">
            <Link to="/Book-now">Explore Safaris</Link> 
          </Button>
          <Button 
            variant="link" 
            size="lg" 
            className="bg-transparent border-white text-white hover:bg-white/10"
            asChild
          >
            <Link to="/book-now">Plan Your Visit</Link>
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToDestinations}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce"
      >
        <span className="text-sm mb-2">Explore</span>
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
