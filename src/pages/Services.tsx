import { motion } from 'motion/react';
import { Zap, Box, Layout, RefreshCw, MousePointer2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

const services = [
  {
    title: 'High Converting Websites',
    icon: Zap,
    desc: 'We don\'t just build websites; we build sales machines. Every pixel is optimized for user conversion and business growth.',
    benefits: ['Speed Optimized', 'Conversion Focused', 'Mobile First', 'SEO Ready'],
    image: 'https://picsum.photos/seed/web/800/600'
  },
  {
    title: '3D Interactive Experiences',
    icon: Box,
    desc: 'Stand out from the crowd with immersive 3D elements that engage your visitors and tell your brand story in a unique way.',
    benefits: ['R3F Integration', 'Interactive Models', 'Particle Effects', 'GPU Accelerated'],
    image: 'https://picsum.photos/seed/3d/800/600'
  },
  {
    title: 'Webflow Development',
    icon: Layout,
    desc: 'Clean, scalable, and easy-to-manage Webflow sites that give you full control over your content without needing a developer.',
    benefits: ['CMS Setup', 'Custom Code', 'API Integration', 'Training Included'],
    image: 'https://picsum.photos/seed/webflow/800/600'
  },
  {
    title: 'Website Redesign',
    icon: RefreshCw,
    desc: 'Is your current site holding you back? We modernize your digital presence to match your current business scale and goals.',
    benefits: ['Modern UI/UX', 'Brand Alignment', 'Tech Stack Upgrade', 'Performance Boost'],
    image: 'https://picsum.photos/seed/redesign/800/600'
  },
  {
    title: 'Landing Pages',
    icon: MousePointer2,
    desc: 'Focused, high-impact landing pages for your marketing campaigns. Designed to turn ad spend into revenue.',
    benefits: ['A/B Testing Ready', 'Fast Loading', 'Clear CTA', 'Analytics Setup'],
    image: 'https://picsum.photos/seed/landing/800/600'
  }
];

export function Services() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Services That Help <br /> <span className="text-gradient">Businesses Win</span> Online
          </motion.h1>
          <p className="text-xl text-soft-gray leading-relaxed">
            We combine strategy, design, and development to build websites that actually work. Our focus is on your bottom line.
          </p>
        </div>

        <div className="space-y-40">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                  <service.icon size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl mb-6">{service.title}</h2>
                <p className="text-xl text-soft-gray mb-8 leading-relaxed">{service.desc}</p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2 text-soft-gray">
                      <CheckCircle2 size={18} className="text-accent" /> {benefit}
                    </div>
                  ))}
                </div>
                <MagneticButton>
                  <a 
                    href="https://wa.me/263774213484?text=Get%20Started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-colors"
                  >
                    Get Started <ArrowRight size={20} />
                  </a>
                </MagneticButton>
              </div>
                <div className="glass-card overflow-hidden rounded-[2rem] aspect-video relative group">
                  <motion.img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, filter: 'blur(4px) contrast(1.2)' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
