import { motion } from 'framer-motion'

const FlutterShape1 = ({ className, delay = 0 }) => (
  <motion.svg
    className={`absolute pointer-events-none ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: [0.1, 0.25, 0.1], scale: [0.8, 1, 0.8], rotate: [0, 10, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {/* Top wing of Flutter logo */}
    <path d="M10 50 L50 10 L70 30 L30 70 Z" fill="url(#flutterBlue)" />
    <defs>
      <linearGradient id="flutterBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#54C5F8" />
        <stop offset="100%" stopColor="#29B6F6" />
      </linearGradient>
    </defs>
  </motion.svg>
)

const FlutterShape2 = ({ className, delay = 0 }) => (
  <motion.svg
    className={`absolute pointer-events-none ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {/* Bottom wings of Flutter logo */}
    <path d="M30 70 L50 50 L90 90 L70 110 Z" fill="url(#flutterDarkBlue)" />
    <path d="M50 50 L70 30 L90 50 L70 70 Z" fill="#29B6F6" opacity="0.8" />
    <defs>
      <linearGradient id="flutterDarkBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#01579B" />
        <stop offset="100%" stopColor="#02569B" />
      </linearGradient>
    </defs>
  </motion.svg>
)

const CodeSnippet = ({ className, delay = 0, code }) => (
  <motion.div
    className={`absolute pointer-events-none text-[#54C5F8] font-mono text-xs sm:text-sm whitespace-pre ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: [0.03, 0.12, 0.03], y: [20, -20, 20] }}
    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {code}
  </motion.div>
)

const shapes = [
  { Component: FlutterShape1, className: 'w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] top-[10%] left-[5%]', floatX: [0, 20, 0], floatY: [0, -20, 0], dur: 12, delay: 0 },
  { Component: FlutterShape2, className: 'w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bottom-[15%] right-[5%]', floatX: [0, -25, 0], floatY: [0, 25, 0], dur: 15, delay: 2 },
  { Component: FlutterShape1, className: 'w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] top-[40%] right-[15%]', floatX: [0, 15, 0], floatY: [0, -15, 0], dur: 10, delay: 4 },
  { Component: FlutterShape2, className: 'w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] bottom-[30%] left-[10%]', floatX: [0, -15, 0], floatY: [0, 15, 0], dur: 14, delay: 1 },
]

const code1 = `Widget build(BuildContext context) {
  return MaterialApp(
    home: Scaffold(
      body: Center(
        child: FlutterLogo(),
      ),
    ),
  );
}`;

const code2 = `class AwesomeApp extends StatefulWidget {
  @override
  _AwesomeAppState createState() => _AwesomeAppState();
}`;

export default function BackgroundEasterEggs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background Glowing Orbs for a premium Flutter feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#01579B] opacity-[0.15] blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#54C5F8] opacity-[0.15] blur-[100px]" />
      <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-[#29B6F6] opacity-[0.1] blur-[120px]" />

      {shapes.map((shape, i) => {
        const ShapeComponent = shape.Component;
        return (
          <motion.div
            key={i}
            className={shape.className}
            animate={{
              x: shape.floatX,
              y: shape.floatY,
            }}
            transition={{
              duration: shape.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            }}
          >
            <ShapeComponent delay={shape.delay} />
          </motion.div>
        )
      })}

      <CodeSnippet className="top-[25%] left-[55%] rotate-6" delay={3} code={code1} />
      <CodeSnippet className="bottom-[20%] left-[25%] -rotate-3" delay={6} code={code2} />
    </div>
  )
}
