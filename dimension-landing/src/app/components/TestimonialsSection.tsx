'use client';

import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useRef } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Inc",
    content: "Dimension has completely transformed our development workflow. The speed and reliability are unmatched. Our deployment time went from hours to minutes.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    company: "InnovateLab",
    content: "The AI-powered features are incredible. It's like having an expert developer by your side 24/7. The code suggestions are spot-on every time.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "StartupXYZ",
    content: "The collaboration features are game-changing. Our team can work together seamlessly, and the real-time updates keep everyone in sync.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    company: "ScaleTech",
    content: "The infrastructure scaling is phenomenal. We handle traffic spikes effortlessly, and the monitoring tools give us complete visibility.",
    rating: 5,
    avatar: "DK"
  },
  {
    name: "Lisa Thompson",
    role: "Frontend Lead",
    company: "WebCraft",
    content: "The development experience is unmatched. Hot reloading, instant deployments, and the best debugging tools I've ever used.",
    rating: 5,
    avatar: "LT"
  },
  {
    name: "Alex Morgan",
    role: "Backend Developer",
    company: "DataFlow",
    content: "The database management and API tools are incredible. We've reduced our development time by 60% since switching to Dimension.",
    rating: 5,
    avatar: "AM"
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="relative z-10 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Loved by
            <span className="text-purple-400"> Developers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Join thousands of developers who trust Dimension to build, deploy, and scale their applications.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-purple-400 opacity-60" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
                             <p className="text-gray-300 mb-8 leading-relaxed">
                 &ldquo;{testimonial.content}&rdquo;
               </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10"
        >
          {[
            { number: "10K+", label: "Happy Developers" },
            { number: "99.9%", label: "Uptime SLA" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Countries" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            Join Thousands of Developers
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
} 