'use client';

import { motion, useInView } from 'framer-motion';
import { Cloud, Code, Cpu, Database, Globe, Lock, Palette, Rocket, Shield, Star, Users, Zap } from 'lucide-react';
import { useRef } from 'react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build and deploy in seconds with our optimized development environment and global CDN.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, compliance, and advanced threat protection.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Lightning-fast content delivery across 200+ locations worldwide with automatic optimization.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Smart AI",
    description: "AI-powered code suggestions, automated testing, and intelligent debugging assistance.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration with built-in version control, code reviews, and team management.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Star,
    title: "Premium Support",
    description: "24/7 expert support with dedicated account managers and priority response times.",
    gradient: "from-yellow-400 to-orange-400"
  },
  {
    icon: Cpu,
    title: "Advanced Analytics",
    description: "Comprehensive insights into performance, usage patterns, and optimization opportunities.",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Scalable Infrastructure",
    description: "Auto-scaling infrastructure that grows with your application and handles traffic spikes.",
    gradient: "from-slate-500 to-gray-500"
  },
  {
    icon: Lock,
    title: "Zero Trust Security",
    description: "Implement zero trust architecture with advanced authentication and authorization.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description: "Deploy your applications with a single click and automatic rollback capabilities.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Fully customizable branding and white-label solutions for enterprise clients.",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Support",
    description: "Deploy across multiple cloud providers with unified management and monitoring.",
    gradient: "from-sky-500 to-blue-500"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative z-10 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Powerful Features for
            <span className="text-purple-400"> Modern Developers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
                         Everything you need to build, deploy, and scale your applications with confidence. 
             From development to production, we&apos;ve got you covered.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            Explore All Features
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
} 