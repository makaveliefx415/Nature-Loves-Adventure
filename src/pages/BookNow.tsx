import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CalendarCheck, Users, Ticket, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bookingFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number!.",
  }),
  destination: z.string({
    required_error: "Please select a destination.",
  }),
  tourType: z.string({
    required_error: "Please select a safari type.",
  }),
  groupSize: z.string({
    required_error: "Please select the number of people.",
  }),
  travelDate: z.string({
    required_error: "Please provide your preferred travel date.",
  }),
  duration: z.string({
    required_error: "Please select trip duration.",
  }),
  specialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const BookNow = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      destination: "",
      tourType: "",
      groupSize: "",
      duration: "",
      travelDate: "",
      specialRequests: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);
    
    
    setTimeout(() => {
      console.log("Booking data:", data);
      toast.success("Booking request submitted successfully! We'll contact you soon to confirm your adventure.", {
        duration: 5000,
      });
      setIsSubmitting(false);
      form.reset();
     
      setTimeout(() => navigate("/"), 2000);
    }, 1500);
  }

  const destinations = [
    "Serengeti National Park",
    "Mount Kilimanjaro",
    "Zanzibar Archipelago",
    "Ngorongoro Crater",
    "Tarangire National Park",
    "Lake Manyara",
    "Selous Game Reserve",
    "Arusha National park",
  ];

  const safariTypes = [
    "Wildlife Safari",
    "Beach Holiday",
    "Mountain Climbing",
    "Cultural Experience",
    "Photography Tour",
    "Luxury Safari",
    "Budget Safari",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      
      <div className="relative h-[40vh] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/2600207/pexels-photo-2600207.jpeg?auto=compress&cs=tinysrgb&w=1000')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <div>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">Book Your Tanzanian Adventure</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Start planning your dream safari experience in the heart of Africa
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-tanzania-green">Reserve Your Safari</CardTitle>
                <CardDescription>
                  Fill out the form below to start planning your personalized Nature Love Adventure experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Destination</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select destination" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {destinations.map((destination) => (
                                  <SelectItem key={destination} value={destination}>
                                    {destination}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tourType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Safari Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select safari type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {safariTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="groupSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of People</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select group size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, '7-10', '11', "12", "13+",].map((size) => (
                                  <SelectItem key={size} value={size.toString()}>
                                    {size.toString()}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="travelDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Travel Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Trip Duration (Days)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {['1-3', '4-7', '8-14', '15+'].map((duration) => (
                                  <SelectItem key={duration} value={duration}>
                                    {duration}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any special requirements or questions? (Optional)"
                              className="h-24"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-tanzania-orange hover:bg-tanzania-orange/90 text-white"
                    >
                      {isSubmitting ? "Processing..." : "Submit Booking Request"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Info Card */}
          <div>
            <Card className="bg-tanzania-green/5 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-tanzania-green">Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CalendarCheck className="h-6 w-6 text-tanzania-orange mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Flexible Scheduling</h3>
                    <p className="text-sm text-gray-600">We work with your preferred dates and offer flexible itineraries.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-tanzania-orange mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Personalized Experience</h3>
                    <p className="text-sm text-gray-600">Our expert guides customize each safari to your preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Ticket className="h-6 w-6 text-tanzania-orange mt-0.5" />
                  <div>
                    <h3 className="font-semibold">All-Inclusive Packages</h3>
                    <p className="text-sm text-gray-600">Accommodations, meals, transportation, and entrance fees all included.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-tanzania-orange mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Expert Local Knowledge</h3>
                    <p className="text-sm text-gray-600">Our guides have decades of combined experience in Tanzania's wilderness.</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="font-semibold mb-2">Have Questions?</h3>
                  <p className="text-sm text-gray-600 mb-3">Our team is ready to assist you with planning your perfect African adventure.</p>
                  <Button variant="outline" className="w-full border-tanzania-green text-tanzania-green hover:bg-tanzania-green/10">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookNow;
