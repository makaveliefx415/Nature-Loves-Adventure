
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tanzania-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  
          <div>
            <h3 className="text-xl font-bold mb-4">Nature Love <span className="text-tanzania-brown"> Adventure </span></h3>
            <p className="text-gray-200 mb-4">
              Experience the adventure of a lifetime with our expertly curated safari experiences across Tanzania's most breathtaking locations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="hover:text-tanzania-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/" className="hover:text-tanzania-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/" className="hover:text-tanzania-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/" className="hover:text-tanzania-gold transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
               <a href="https://www.tripadvisor.com/" className="hover:text-tanzania-gold transition-colors" aria-label="TripAdvisor">
                <FaTripadvisor className="h-5 w-5" />
              </a>
            </div>
          </div>
          
        
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-tanzania-gold transition-colors">About Us</a></li>
              <li><a href="#destinations" className="text-gray-200 hover:text-tanzania-gold transition-colors">Destinations</a></li>
              <li><a href="#safaris" className="text-gray-200 hover:text-tanzania-gold transition-colors">Safari Packages</a></li>
              <li><a href="#" className="text-gray-200 hover:text-tanzania-gold transition-colors">Travel Blog</a></li>
              <li><a href="#" className="text-gray-200 hover:text-tanzania-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
      
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Experiences</h3>
            <ul className="space-y-2">
              <li><a href="/serengeti" className="text-gray-200 hover:text-tanzania-gold transition-colors">Serengeti Migration</a></li>
              <li><a href="/kilimanjaro" className="text-gray-200 hover:text-tanzania-gold transition-colors">Kilimanjaro Climbing</a></li>
              <li><a href="/zanzibar" className="text-gray-200 hover:text-tanzania-gold transition-colors">Zanzibar Beach Holidays</a></li>
              <li><a href="/ngorongoro" className="text-gray-200 hover:text-tanzania-gold transition-colors">Ngorongoro Crater Tours</a></li>
              <li><a href="/cultural" className="text-gray-200 hover:text-tanzania-gold transition-colors">Cultural Experiences</a></li>
            </ul>
          </div>
 
          <div>
            <h3 className="text-lg font-bold mb-4">follow to Our Newsletter</h3>
            <p className="text-gray-200 mb-4">Stay updated with our latest offers and travel tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="py-2 px-4 rounded-l-md flex-1 text-gray-900 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-tanzania-orange hover:bg-tanzania-orange/90 text-white py-2 px-4 rounded-r-md font-medium"
              >
                Follow
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300">
          <p>© {currentYear} Nature love Adventure Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
