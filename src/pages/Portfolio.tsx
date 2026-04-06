import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../components/MagneticButton';

const projects = [
  { id: 'lumina', title: 'Lumina Tech', industry: 'SaaS', result: '+60% Signups', image: 'https://picsum.photos/seed/lumina/800/600' },
  { id: 'apex', title: 'Apex Academy', industry: 'Education', result: '+40% Enrollment', image: 'https://picsum.photos/seed/apex/800/600' },
  { id: 'veloce', title: 'Veloce', industry: 'Automotive', result: '+25% Leads', image: 'https://picsum.photos/seed/veloce/800/600' },
  { id: 'zenith', title: 'Zenith Real Estate', industry: 'Real Estate', result: '+50% Bookings', image: 'https://picsum.photos/seed/zenith/800/600' },
  { id: 'nova', title: 'Nova Skincare', industry: 'E-commerce', result: '+35% Sales', image: 'https://picsum.photos/seed/nova/800/600' },
  { id: 'pulse', title: 'Pulse Fitness', industry: 'Health', result: '+45% Members', image: 'https://picsum.photos/seed/pulse/800/600' },
];

export function Portfolio() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Our <span className="text-gradient">Work</span>
          </motion.h1>
          <p className="text-xl text-soft-gray">
            A collection of high-converting experiences we've built for industry leaders and ambitious startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3]"
            >
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, filter: 'blur(4px) contrast(1.2)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">{project.industry}</span>
                    <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
                    <p className="text-soft-gray font-medium text-lg">{project.result}</p>
                  </div>
                  <MagneticButton>
                    <Link 
                      to={`/case-study/${project.id}`}
                      className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0"
                    >
                      <ArrowRight size={24} />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
