import { motion } from 'motion/react';
import { ArrowRight, Users, Trophy, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
              We Are <span className="text-gradient">Thrills</span>
            </h1>
            <p className="text-2xl text-soft-gray leading-relaxed mb-10">
              A premium digital agency dedicated to building high-converting websites for the next generation of businesses.
            </p>
            <p className="text-lg text-soft-gray/80 leading-relaxed mb-12">
              Founded on the principle that design should not only look beautiful but also drive measurable results. We combine artistic vision with data-driven strategy to create digital experiences that resonate and convert.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-soft-gray uppercase tracking-widest">Years Exp</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-soft-gray uppercase tracking-widest">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-1">150+</div>
                <div className="text-sm text-soft-gray uppercase tracking-widest">Projects</div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="glass-card aspect-[4/5] overflow-hidden rounded-[3rem]">
              <motion.img 
                src="https://picsum.photos/seed/team/800/1000" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, filter: 'blur(4px) contrast(1.2)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 hidden md:block">
              <p className="text-xl font-bold mb-2">"Design is not just what it looks like and feels like. Design is how it works."</p>
              <p className="text-accent font-bold">— Steve Jobs</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {[
            { icon: Users, title: 'Our Mission', desc: 'To empower businesses with digital tools that drive growth and create lasting impact.' },
            { icon: Trophy, title: 'Our Vision', desc: 'To be the global leader in conversion-focused web design and interactive experiences.' },
            { icon: Heart, title: 'Our Values', desc: 'Creativity, Integrity, and a relentless focus on our clients\' success.' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 mx-auto">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-soft-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">Why Choose Thrills?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Expert Strategy', 'Premium Design', 'Fast Delivery', 'Ongoing Support'].map((item, i) => (
              <div key={i} className="p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                <h4 className="font-bold text-xl mb-2">{item}</h4>
                <p className="text-soft-gray text-sm">We ensure every aspect of your project is handled with precision and care.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
