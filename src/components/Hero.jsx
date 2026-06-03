import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import myAvatar from "../assets/my_photo.jpg";

const phrases = [
  "1+ Years of Crafting High-Performance Cross-Platform Apps",
  "Advanced Architecture: Clean Architecture, BLoC, and Cubit Expert",
  "Full-Stack Native Experiences Integrated with Supabase & Firebase",
  "Architect of Production-Ready Gemini AI Educational Platforms",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const wordReveal = {
  initial: { y: 15, filter: "blur(10px)", opacity: 0, letterSpacing: "0.05em" },
  enter: (i) => ({
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    letterSpacing: "0em",
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: (i) => ({
    y: -12,
    filter: "blur(6px)",
    opacity: 0,
    letterSpacing: "-0.02em",
    transition: {
      duration: 0.4,
      delay: i * 0.02,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

function AnimatedPhrase({ phrase }) {
  const words = phrase.split(" ");
  return (
    <motion.span className="inline flex flex-wrap justify-center lg:justify-start gap-x-[0.25em]">
      <AnimatePresence mode="popLayout">
        {words.map((word, i) => (
          <motion.span
            key={`${phrase}-${word}-${i}`}
            custom={i}
            variants={wordReveal}
            initial="initial"
            animate="enter"
            exit="exit"
            className="inline-block whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.span>
  );
}

function LiquidAura() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{
          x: [0, 40, -30, 50, 0],
          y: [0, -30, 20, -40, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full bg-violet-500/10 blur-[100px]"
        animate={{
          x: [0, -45, 35, -25, 0],
          y: [0, 40, -25, 30, 0],
          scale: [1, 0.85, 1.2, 0.95, 1],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 sm:pt-40 md:pt-44 overflow-hidden">
      <div className="max-container w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative w-full max-w-[320px] md:max-w-[380px] h-[380px] md:h-[460px] rounded-[32px] glass-liquid overflow-hidden">
              <img
                src={myAvatar}
                alt="Mohamed Fawzy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10" />
            </div>
            <motion.div
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 blur-md pointer-events-none"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-[38px] border border-cyan-500/10 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-5 rounded-[42px] border border-violet-500/10 pointer-events-none"
            />
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-cyan-300 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
                Flutter Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4"
            >
              Mohamed
              <br />
              <span className="text-gradient">Fawzy</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-2 leading-relaxed"
            >
              Premium Cross-Platform Mobile Developer
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="relative max-w-xl mx-auto lg:mx-0 mb-8 min-h-[4.5rem] sm:min-h-[3.5rem] flex items-center justify-center lg:justify-start"
            >
              <LiquidAura />
              <p className="relative text-sm sm:text-base text-gray-200 leading-relaxed z-10 font-light">
                <AnimatedPhrase key={phrases[index]} phrase={phrases[index]} />
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-white font-medium text-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  View My Work
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-7 py-3.5 glass-strong rounded-full text-gray-300 font-medium text-sm overflow-hidden hover:border-cyan-500/30 transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ChatBubbleLeftRightIcon className="w-4 h-4" />
                  Let's Connect
                </span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
