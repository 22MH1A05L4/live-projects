'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Play, Rocket, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* Background elements */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/10 shadow-2xl"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
          </motion.div>
          <span className="text-sm font-medium bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
            The future of development is here
          </span>
        </motion.div>

        {/* Main heading with advanced text effects */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
        >
          <motion.span 
            className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Build the
          </motion.span>
          <motion.span 
            className="block text-purple-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Future
          </motion.span>
        </motion.h1>

        {/* Subtitle with typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Experience the next generation of development tools. Create, collaborate, and deploy with unprecedented speed and precision.
        </motion.p>

        {/* Enhanced CTA buttons with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button 
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative flex items-center space-x-3">
              <span>Start Building</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button 
            className="group relative border border-white/20 text-white px-10 py-5 rounded-full text-lg font-semibold backdrop-blur-xl overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              borderColor: "rgba(147, 51, 234, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative flex items-center space-x-3">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced stats with 3D cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "10K+", label: "Developers", icon: Code, color: "from-blue-500 to-cyan-500" },
            { number: "99.9%", label: "Uptime", icon: Zap, color: "from-green-500 to-emerald-500" },
            { number: "24/7", label: "Support", icon: Rocket, color: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="group relative"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />
                <div className="relative text-center">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating elements with advanced animations */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-20 w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full opacity-40"
      />
    </section>
  );
} 