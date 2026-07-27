import { motion } from 'framer-motion'

const FlutterShape1 = ({ className, delay = 0 }) => (
  <motion.svg
    className={`position-absolute pointer-events-none ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: [0.1, 0.25, 0.1], scale: [0.8, 1, 0.8], rotate: [0, 10, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <path d="M10 50 L50 10 L70 30 L30 70 Z" fill="#54C5F8" />
  </motion.svg>
)

const FlutterShape2 = ({ className, delay = 0 }) => (
  <motion.svg
    className={`position-absolute pointer-events-none ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <path d="M30 70 L50 50 L90 90 L70 110 Z" fill="#01579B" />
    <path d="M50 50 L70 30 L90 50 L70 70 Z" fill="#29B6F6" opacity="0.8" />
  </motion.svg>
)

const CodeSnippet = ({ className, delay = 0, code }) => (
  <motion.div
    className={`position-absolute pointer-events-none ${className}`}
    style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#54C5F8', whiteSpace: 'pre' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: [0.03, 0.12, 0.03], y: [20, -20, 20] }}
    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {code}
  </motion.div>
)

const shapes = [
  { Component: FlutterShape1, className: 'top-10 start-0', style: { width: 150, height: 150 }, floatX: [0, 20, 0], floatY: [0, -20, 0], dur: 12, delay: 0 },
  { Component: FlutterShape2, className: 'bottom-15 end-0', style: { width: 200, height: 200 }, floatX: [0, -25, 0], floatY: [0, 25, 0], dur: 15, delay: 2 },
  { Component: FlutterShape1, className: 'top-40 end-15', style: { width: 100, height: 100 }, floatX: [0, 15, 0], floatY: [0, -15, 0], dur: 10, delay: 4 },
  { Component: FlutterShape2, className: 'bottom-30 start-10', style: { width: 120, height: 120 }, floatX: [0, -15, 0], floatY: [0, 15, 0], dur: 14, delay: 1 },
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
    <div className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="position-absolute rounded-circle" style={{ top: '-10%', left: '-10%', width: '40%', height: '40%', backgroundColor: '#01579B', opacity: 0.15, filter: 'blur(100px)' }} />
      <div className="position-absolute rounded-circle" style={{ bottom: '-10%', right: '-10%', width: '40%', height: '40%', backgroundColor: '#54C5F8', opacity: 0.15, filter: 'blur(100px)' }} />
      <div className="position-absolute rounded-circle" style={{ top: '40%', left: '40%', width: '30%', height: '30%', backgroundColor: '#29B6F6', opacity: 0.1, filter: 'blur(120px)' }} />

      {shapes.map((shape, i) => {
        const ShapeComponent = shape.Component;
        return (
          <motion.div
            key={i}
            className={shape.className}
            style={shape.style}
            animate={{ x: shape.floatX, y: shape.floatY }}
            transition={{ duration: shape.dur, repeat: Infinity, ease: 'easeInOut', delay: shape.delay }}
          >
            <ShapeComponent delay={shape.delay} />
          </motion.div>
        );
      })}

      <CodeSnippet className="top-25 start-55" style={{ transform: 'rotate(6deg)' }} delay={3} code={code1} />
      <CodeSnippet className="bottom-20 start-25" style={{ transform: 'rotate(-3deg)' }} delay={6} code={code2} />
    </div>
  );
}
