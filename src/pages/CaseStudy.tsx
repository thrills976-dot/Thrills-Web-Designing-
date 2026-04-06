import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

const projectsData: Record<string, any> = {
  lumina: {
    title: 'Lumina Tech',
    industry: 'SaaS',
    overview: 'Lumina Tech is a leading cloud infrastructure provider for modern startups.',
    problem: 'Their previous website was slow, outdated, and failed to communicate their premium value proposition, resulting in high bounce rates and low conversions.',
    solution: 'We built a high-performance React-based website with interactive 3D elements and a clean, modern UI that emphasizes speed and reliability.',
    results: ['60% Increase in Signups', '40% Reduction in Bounce Rate', '2.5x Increase in Session Duration'],
    image: 'https://picsum.photos/seed/lumina/1200/800'
  },
  apex: {
    title: 'Apex Academy',
    industry: 'Education',
    overview: 'Apex Academy provides high-end coding bootcamps for aspiring developers.',
    problem: 'They struggled to stand out in a crowded market and their enrollment process was friction-heavy.',
    solution: 'We designed a conversion-optimized landing page system with clear CTAs and an immersive curriculum explorer.',
    results: ['40% Increase in Enrollment', '50% Faster Page Loads', '30% More Leads'],
    image: 'https://picsum.photos/seed/apex/1200/800'
  },
  // Add more as needed...
};

export function CaseStudy() {
  const { id } = useParams();
  const project = projectsData[id || ''] || projectsData.lumina;

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-soft-gray hover:text-accent transition-colors mb-12">
          <ArrowLeft size={20} /> Back to Work
        </Link>

        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter"
          >
            {project.title}
          </motion.h1>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="px-6 py-2 bg-accent/10 text-accent rounded-full font-bold text-sm uppercase tracking-widest border border-accent/20">
              {project.industry}
            </span>
            <span className="px-6 py-2 bg-white/5 text-soft-gray rounded-full font-bold text-sm uppercase tracking-widest border border-white/10">
              Webflow + React
            </span>
          </div>
          <div className="rounded-[3rem] overflow-hidden aspect-video glass-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-32">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-xl text-soft-gray leading-relaxed">{project.overview}</p>
            </section>
            <section>
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-xl text-soft-gray leading-relaxed">{project.problem}</p>
            </section>
            <section>
              <h2 className="text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-xl text-soft-gray leading-relaxed">{project.solution}</p>
            </section>
          </div>
          
          <div className="space-y-12">
            <div className="glass-card p-10">
              <h3 className="text-2xl font-bold mb-8">Key Results</h3>
              <ul className="space-y-6">
                {project.results.map((result: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                    <span className="text-xl font-bold">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-10 bg-accent/5 border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Ready for results?</h3>
              <p className="text-soft-gray mb-8">Let's build your next high-converting website.</p>
              <MagneticButton className="w-full">
                <a 
                  href="https://wa.me/263774213484?text=Start%20Your%20Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  Start Project <ArrowRight size={20} />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="text-center pt-20 border-t border-white/5">
          <h2 className="text-4xl font-bold mb-12">Next Project</h2>
          <MagneticButton>
            <Link to="/portfolio" className="text-6xl md:text-8xl font-display font-bold hover:text-accent transition-colors tracking-tighter">
              Apex Academy <ArrowRight className="inline-block" size={64} />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
