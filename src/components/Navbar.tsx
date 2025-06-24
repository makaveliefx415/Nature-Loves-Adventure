
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Destinations", href: "/#destinations" },
    { name: "Safaris", href: "/#safaris" },
    { name: "Why Tanzania", href: "/#why-tanzania" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent shadow-lg py-5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl font-bold ${isScrolled ? 'text-tanzania-green' : 'text-white'}`}>
            Nature Loves <span className="text-tanzania-brown"> Adventure </span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-tanzania-green" : "text-white hover:text-tanzania-sand"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-tanzania-orange hover:bg-tanzania-orange/90 text-white" asChild>
            <Link to="/book-now">Book Now</Link>
          </Button>
        </nav>

      
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 
            <X className={`h-6 w-6 ${isScrolled ? 'text-tanzania-green' : 'text-white'}`} /> : 
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-tanzania-green' : 'text-white'}`} />}
        </button>

      
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4 animated fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-tanzania-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link to="/book-now" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-tanzania-orange hover:bg-tanzania-orange/90 text-white w-full">
                Book Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;