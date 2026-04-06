import { motion } from 'motion/react';

const logos = [
  'AETHER', 'VORTEX', 'LUMINA', 'NEXUS', 'ORION', 'PRISM',
  'QUANTA', 'RIFT', 'SPECTRA', 'TITAN', 'UNITY', 'ZENITH'
];

export function LogoShowcase() {
  return (
    <section className="py-24 bg-secondary/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl mb-4 text-soft-gray">Trusted by Innovative Brands</h2>
      </div>
      
      <div className="flex relative">
        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-20 items-center whitespace-nowrap"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white/20 hover:text-accent transition-colors cursor-default select-none"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
