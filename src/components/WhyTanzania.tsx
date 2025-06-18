
import { CheckCircle } from "lucide-react";

const WhyTanzania = () => {
  const reasons = [
    {
      title: "Spectacular Wildlife",
      description: "Home to the Great Migration and the highest concentration of wildlife in Africa.",
    },
    {
      title: "Iconic Landscapes",
      description: "From Mount Kilimanjaro to the Serengeti Plains and Ngorongoro Crater.",
    },
    {
      title: "Rich Culture",
      description: "Experience the traditions and hospitality of over 120 ethnic groups.",
    },
    {
      title: "Pristine Beaches",
      description: "Enjoy the white sandy beaches and azure waters of Zanzibar and other coastal areas.",
    },
    {
      title: "Adventure Activities",
      description: "From mountain climbing to diving, hot air balloon safaris to walking safaris.",
    },
    {
      title: "Authentic Experiences",
      description: "Connect with local communities and get off the beaten path with expert guides.",
    },
  ];

  return (
    <section id="why-tanzania" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title mb-6">Why Choose Tanzania?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Tanzania offers an unparalleled safari experience with its incredible biodiversity, stunning landscapes, and welcoming culture.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                  <CheckCircle className="h-6 w-6 text-tanzania-orange mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-tanzania-green mb-1">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/21564214/pexels-photo-21564214/free-photo-of-giraffes-standing-on-savannah.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Wildlife in Tanzania" 
                  className="w-full h-60 object-cover rounded-lg shadow-md animate-on-scroll"
                />
                <img 
                  src="https://images.pexels.com/photos/14667378/pexels-photo-14667378.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Zanzibar beach" 
                  className="w-full h-60 object-cover rounded-lg shadow-md animate-on-scroll" 
                  style={{ transitionDelay: '200ms' }}
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.pexels.com/photos/15838666/pexels-photo-15838666/free-photo-of-safari-4x4-at-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Kilimanjaro" 
                  className="w-full h-60 object-cover rounded-lg shadow-md animate-on-scroll" 
                  style={{ transitionDelay: '100ms' }}
                />
                <img 
                  src="https://images.pexels.com/photos/11679893/pexels-photo-11679893.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Maasai culture" 
                  className="w-full h-60 object-cover rounded-lg shadow-md animate-on-scroll" 
                  style={{ transitionDelay: '300ms' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTanzania;
