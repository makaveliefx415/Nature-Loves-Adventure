
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DestinationCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  id: string;
}

const DestinationCard = ({ title, location, description, image, id }: DestinationCardProps) => {
  return (
    <div className="destination-card group">

      <div className="aspect-[3/4] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
    
      <div className="destination-card-overlay">
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 text-tanzania-orange mr-1" />
            <p className="text-sm font-medium">{location}</p>
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90 mb-4">{description}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg- transparent border-white text-white hover:bg-black"
            asChild
          >
            <Link to={`/destination/${id}`}>Explore</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
