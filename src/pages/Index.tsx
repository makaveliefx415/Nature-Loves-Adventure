
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import SafariExperiences from "@/components/SafariExperiences";
import WhyTanzania from "@/components/WhyTanzania";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const destinations = [
    {
      id: "serengeti",
      title: "Serengeti National Park",
      location: "Northern Tanzania",
      description: "Witness the Great Migration and incredible wildlife in endless plains.",
      image: "https://images.pexels.com/photos/10714623/pexels-photo-10714623.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "kilimanjaro",
      title: "Mount Kilimanjaro",
      location: "Kilimanjaro Region",
      description: "Climb Africa's highest peak and conquer the roof of Africa.",
      image: "https://media.istockphoto.com/id/1299083454/photo/mother-with-son-backpackers-climbing-with-backpacks-using-trekking-poles-kilimanjaro-summit.jpg?s=612x612&w=0&k=20&c=4gBGqsEuzjkInc03g7-CbP-ovcA0lnSFrnUHhNbnLz4=",
    },
    {
      id: "zanzibar",
      title: "Zanzibar Archipelago",
      location: "Indian Ocean",
      description: "Relax on pristine beaches with crystal clear turquoise waters.",
      image: "https://images.pexels.com/photos/5993602/pexels-photo-5993602.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "ngorongoro",
      title: "Ngorongoro Crater",
      location: "Ngorongoro Conservation Area",
      description: "Explore the world's largest intact caldera with diverse wildlife.",
      image: "https://images.pexels.com/photos/30980273/pexels-photo-30980273/free-photo-of-safari-adventure-in-african-savanna-with-lion.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  // Animation on scroll functionality
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
    });

    animateOnScrollElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
    
      <section id="destinations" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Top Destinations in Tanzania</h2>
          <p className="section-subtitle text-center">
            Explore Tanzania's most iconic and breathtaking locations
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {destinations.map((destination, index) => (
              <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SafariExperiences />
      <WhyTanzania />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
