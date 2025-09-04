"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  const testimonials = [
    {
      quote: "We can now manage our global contractors effortlessly. The compliance automation saves us countless hours each month.",
      author: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp",
      rating: 5,
    },
    {
      quote: "The platform's ease of use and comprehensive compliance features make it indispensable for our international operations.",
      author: "Michael Chen",
      role: "Operations Manager", 
      company: "GlobalStart",
      rating: 5,
    },
    {
      quote: "Outstanding support team and seamless payment processing. Our contractors love the quick, reliable payments.",
      author: "Emily Davis",
      role: "Finance Lead",
      company: "InnovateLab",
      rating: 5,
    },
  ];

  return (
    <section ref={testimonialsRef} className="bg-blue-400 text-white py-20 relative">
      <div id="testimonials" className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What our customers say</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join thousands of companies who trust us with their contractor payments and compliance
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-4/5 lg:basis-4/5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={testimonialsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-1"
                >
                  <div className="bg-blue-500 border border-blue-600 rounded-xl shadow-sm p-8 flex flex-col items-center text-center relative">
                    <blockquote className="text-white text-lg mb-8">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-400 font-semibold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-white">
                        <p className="font-semibold">{testimonial.author},</p>
                        <p>{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
