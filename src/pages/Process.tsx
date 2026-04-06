import { motion } from 'motion/react';
import { Search, Target, Palette, Code, Rocket, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    desc: 'We start by understanding your business, goals, and audience. We analyze your competitors and identify opportunities for growth.',
    details: ['Market Research', 'Competitor Analysis', 'User Personas', 'Goal Setting']
  },
  {
    icon: Target,
    title: 'Strategy',
    desc: 'We define the roadmap for your website. This includes site architecture, conversion funnels, and content strategy.',
    details: ['Sitemap', 'Wireframing', 'Conversion Mapping', 'Content Planning']
  },
  {
    icon: Palette,
    title: 'Design',
    desc: 'We create a premium visual identity that resonates with your audience. Our designs are modern, clean, and focused on usability.',
    details: ['Visual Identity', 'UI/UX Design', 'Interactive Prototypes', 'Design Systems']
  },
  {
    icon: Code,
    title: 'Development',
    desc: 'We bring the design to life using modern technologies. We ensure your site is fast, responsive, and easy to manage.',
    details: ['Webflow/React Build', 'Animations', 'CMS Integration', 'Performance Tuning']
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'We launch your site and monitor its performance. We provide training and ongoing support to ensure long-term success.',
    details: ['Quality Assurance', 'Deployment', 'Training', 'Post-Launch Support']
  }
];

export function Process() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Our <span className="text-gradient">Proven</span> Process
          </motion.h1>
          <p className="text-xl text-soft-gray">
            A transparent and collaborative framework designed to deliver high-converting results every time.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
          
          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mb-8 mx-auto lg:mx-0">
                    <step.icon size={40} />
                  </div>
                  <h2 className="text-4xl font-bold mb-6">{step.title}</h2>
                  <p className="text-xl text-soft-gray mb-8 leading-relaxed">{step.desc}</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {step.details.map((detail, j) => (
                      <span key={j} className="px-4 py-2 bg-white/5 rounded-full text-sm text-soft-gray border border-white/10">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-md aspect-square bg-secondary rounded-[3rem] border border-white/5 flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />
                    <span className="text-9xl font-display font-black text-white/5 group-hover:text-accent/10 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-40 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to start the journey?</h2>
          <MagneticButton>
            <a 
              href="https://wa.me/263774213484?text=Start%20Your%20Project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-2 mx-auto hover:scale-105 transition-transform"
            >
              Start Your Project <ArrowRight size={24} />
            </a>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
