"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const orbVariants = {
    initial: { scale: 0.8, opacity: 0.3, x: 0, y: 0 },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.6, 0.3],
      x: [0, 50, -50, 0],
      y: [0, -30, 30, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={orbVariants}
          initial="initial"
          animate="animate"
          className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          variants={orbVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2, duration: 15 }}
          className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          variants={orbVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4, duration: 12 }}
          className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[90px]"
        />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              Available for Freelance Work
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-600 bg-clip-text text-transparent">
                Sarthak
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I craft high-performance digital experiences using{" "}
            <span className="text-foreground font-semibold border-b-2 border-primary/30 pb-1">
              Next.js
            </span>
            ,{" "}
            <span className="text-foreground font-semibold border-b-2 border-primary/30 pb-1">
              Flutter
            </span>
            , and{" "}
            <span className="text-foreground font-semibold border-b-2 border-primary/30 pb-1">
              Firebase
            </span>
            .
          </motion.p>

          {/* CTA Buttons - FIXED */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            {/* Button 1: View My Work */}
            <Button asChild size="lg" className="group relative overflow-hidden px-8 h-14 text-base">
              <a href="#projects" className="flex items-center gap-2">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>

            {/* Button 2: Contact Me */}
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-2 hover:bg-primary/10 hover:border-primary/50 transition-all">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </a>
            </Button>

            {/* Button 3: Hire Me */}
            <Button asChild variant="ghost" size="lg" className="h-14 px-8 text-base text-muted-foreground hover:text-primary">
              <a
                href="https://wa.me/919009585458"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Hire Me</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}