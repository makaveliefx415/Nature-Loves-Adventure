
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  image: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, location, image, rating }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 relative animate-on-scroll">
      
      <div className="absolute top-4 right-4 text-4xl font-serif text-tanzania-orange/20">"</div>
      
   
      <div className="flex mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-tanzania-gold fill-tanzania-gold" : "text-gray-300"}`}
          />
        ))}
      </div>
      
   
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      
     
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "Our safari in the Serengeti was truly magical. We witnessed the Great Migration and saw all of the Big Five in just three days!",
      author: "Brian Benson",
      location: "United States",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYWm7TwxYUYqAhnpQNgd92209vu4Kgg_8yQ&s",
      rating: 5
    },
    {
      quote: "Climbing Kilimanjaro with the guides from Tanzania Safari was an experience of a lifetime. They were professional and encouraging every step of the way, West side for Life.",
      author: "Tupac Shakur Omar",
      location: "Los Angelos, USA",
      image: "data:image/jpeg;base64,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",
      rating: 5
    },
    {
      quote: "Our family enjoyed every moment of our Tanzanian adventure. The cultural tour with the Maasai tribe was enlightening and authentic.",
      author: "John Jackson",
      location: "Australia",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZZmdOW7Bwi7piz6FJH7fT9gfP2I9HTWD9g&s",
      rating: 4
    }
  ];
  
  return (
    <section id="testimonials" className="py-20 bg-tanzania-sand/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What Our Travelers Say</h2>
        <p className="section-subtitle text-center">
          Hear from those who have experienced the magic of Tanzania firsthand
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
