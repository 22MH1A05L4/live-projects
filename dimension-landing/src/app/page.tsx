'use client';

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import CTASection from './components/CTASection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HydrationWrapper from './components/HydrationWrapper';
import MobileNav from './components/MobileNav';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  useEffect(() => {
    // Generate particles on client side only
    setParticles(Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    })));
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Advanced 3D background with parallax */}
      <motion.div 
        style={{ 
          y, 
          opacity,
          scale,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-0"
      />
      
      {/* Advanced mouse follower with multiple layers */}
      <HydrationWrapper>
        <motion.div
          className="fixed w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none z-0"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="fixed w-64 h-64 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-2xl pointer-events-none z-0"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
      </HydrationWrapper>

      {/* Advanced particle system */}
      <HydrationWrapper>
        {particles.length > 0 && (
          <div className="fixed inset-0 z-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute bg-white/30 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
                animate={{
                  y: [0, -100, -200, -300],
                  opacity: [0, 1, 0.5, 0],
                  scale: [0, 1, 1.5, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </HydrationWrapper>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/10"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
              width: `${50 + i * 10}px`,
              height: `${50 + i * 10}px`,
              transform: `rotate(${i * 45}deg)`,
            }}
            animate={{
              rotate: [i * 45, i * 45 + 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <motion.nav 
        className="relative z-10 flex items-center justify-between p-6 md:p-8"
        style={{
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <motion.div 
            className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Dimension
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {['Features', 'Pricing', 'Testimonials'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-purple-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
        <MobileNav />
      </motion.nav>

      {/* Main Content with enhanced animations */}
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
}
