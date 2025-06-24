import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will contact you soon Nature Loves Adventure.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Nature loves adventure</h2>
        <p className="section-subtitle text-center">
          Contact us today to begin planning your perfect safari experience
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        
          <div className="lg:col-span-1 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-tanzania-green">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-tanzania-green/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-tanzania-green" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-600">+255 698 809 207</p>
                  <p className="text-gray-600">+255 (678) 567-891</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tanzania-green/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-tanzania-green" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-600">info@NatureloveAdventure.com</p>
                  <p className="text-gray-600">bookings@NatureloveAdventure.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tanzania-green/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-tanzania-green" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-600">
                    Arusha Office: 123 sekei<br />
                    Arusha, Tanzania<br />
                    P.O. Box 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Brian Benson"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="someone@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (298) 567-890"
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dream Nature love Adventure..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="bg-tanzania-green hover:bg-tanzania-green/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
