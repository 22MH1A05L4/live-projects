'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Cloud,
    Code,
    Cpu,
    Database,
    Globe,
    Lock,
    Rocket, Shield,
    Sparkles,
    Star,
    Target,
    Zap
} from 'lucide-react';
import { useRef } from 'react';

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Build and deploy at unprecedented speed with our optimized development environment.",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.1
    },
    {
      icon: Code,
      title: "Smart Code",
      description: "AI-powered code suggestions and intelligent autocomplete for faster development.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: Rocket,
      title: "Instant Deploy",
      description: "One-click deployment to global edge networks with zero configuration.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.4
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy to 200+ locations worldwide with automatic CDN optimization.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.5
    },
    {
      icon: Cpu,
      title: "Advanced AI",
      description: "Built-in AI tools for code analysis, testing, and performance optimization.",
      gradient: "from-red-500 to-pink-500",
      delay: 0.6
    },
    {
      icon: Database,
      title: "Smart Database",
      description: "Auto-scaling databases with intelligent query optimization and caching.",
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.7
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for the cloud with seamless integration to all major providers.",
      gradient: "from-sky-500 to-blue-500",
      delay: 0.8
    },
    {
      icon: Lock,
      title: "Zero Trust",
      description: "Implement zero-trust security with built-in authentication and authorization.",
      gradient: "from-violet-500 to-purple-500",
      delay: 0.9
    },
    {
      icon: Sparkles,
      title: "Magic Workflows",
      description: "Automate complex workflows with our visual workflow builder.",
      gradient: "from-rose-500 to-pink-500",
      delay: 1.0
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Real-time analytics and insights to optimize your applications.",
      gradient: "from-amber-500 to-orange-500",
      delay: 1.1
    },
    {
      icon: Star,
      title: "Premium Support",
      description: "24/7 expert support with dedicated success managers.",
      gradient: "from-lime-500 to-green-500",
      delay: 1.2
    }
  ];

  return (
    <section id="features" ref={containerRef} className="relative py-20 px-6 overflow-hidden">
      {/* Background elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-white/10"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Powerful Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Everything you need
            </span>
            <br />
            <span className="text-purple-400">to build the future</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From lightning-fast development to enterprise-grade deployment, we&apos;ve got you covered with every tool you need.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    padding: "1px"
                  }}
                />

                {/* Icon */}
                <motion.div
                  className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <motion.h3
                    className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300"
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-400 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: feature.delay + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative">Explore All Features</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 