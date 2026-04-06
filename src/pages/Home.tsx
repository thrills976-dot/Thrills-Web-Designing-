import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Zap, Layout, Box, RefreshCw, MousePointer2 } from 'lucide-react';
import { Hero3D } from '../components/Hero3D';
import { LogoShowcase } from '../components/LogoShowcase';
import { MagneticButton } from '../components/MagneticButton';
import { cn } from '../lib/utils';

const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Conversion Increase', value: 45, suffix: '%' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];

const services = [
  { title: 'High Converting Websites', icon: Zap, desc: 'Optimized for speed and sales.' },
  { title: '3D Interactive Experiences', icon: Box, desc: 'Immersive digital storytelling.' },
  { title: 'Webflow Development', icon: Layout, desc: 'Clean, scalable, and manageable.' },
  { title: 'Website Redesign', icon: RefreshCw, desc: 'Modernizing your digital presence.' },
  { title: 'Landing Pages', icon: MousePointer2, desc: 'Focused campaigns that convert.' },
];

const projects = [
  { title: 'Lumina Tech', industry: 'SaaS', result: '+60% Signups', image: 'https://picsum.photos/seed/lumina/800/600' },
  { title: 'Apex Academy', industry: 'Education', result: '+40% Enrollment', image: 'https://picsum.photos/seed/apex/800/600' },
  { title: 'Veloce', industry: 'Automotive', result: '+25% Leads', image: 'https://picsum.photos/seed/veloce/800/600' },
];

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <Hero3D />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-6 tracking-tighter">
              Websites That Turn <span className="text-gradient">Visitors</span> Into <span className="text-gradient">Customers</span>
            </h1>
            <p className="text-xl text-soft-gray max-w-lg mb-10 leading-relaxed">
              We design high-converting websites that help businesses grow faster with premium aesthetics and modern technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Link to="/pricing" className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform">
                  Get Your Website <ArrowRight size={20} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <button className="border border-white/20 text-neutral-text px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
                  View Our Work
                </button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Logo Showcase */}
      <LogoShowcase />

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-accent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-soft-gray font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl mb-6">Services That Help Businesses Win Online</h2>
              <p className="text-xl text-soft-gray">We combine strategy, design, and development to build websites that actually work.</p>
            </div>
            <button className="text-accent font-bold flex items-center gap-2 group">
              Explore All Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group cursor-pointer hover:border-accent/50 transition-all"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-soft-gray leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Work */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-secondary/30 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">Featured Work</h2>
          <p className="text-soft-gray text-xl">A glimpse into the high-converting experiences we've built.</p>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar px-6 -mx-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="min-w-[350px] md:min-w-[500px] group relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, filter: 'blur(4px) contrast(1.2)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">{project.industry}</span>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-soft-gray font-medium">{project.result}</p>
                  </div>
                  <MagneticButton>
                    <button className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <ArrowRight size={20} />
                    </button>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">Our Process</h2>
            <p className="text-xl text-soft-gray">We follow a proven 4-step framework to ensure your website's success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10" />
            {[
              { step: '01', title: 'Strategy', desc: 'Deep dive into your business goals and target audience.' },
              { step: '02', title: 'Design', desc: 'Crafting a premium visual identity and user experience.' },
              { step: '03', title: 'Development', desc: 'Building a fast, responsive, and scalable website.' },
              { step: '04', title: 'Growth', desc: 'Launching and optimizing for maximum conversions.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary border border-white/10 rounded-full flex items-center justify-center text-accent font-display font-bold text-xl mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  {item.step}
                </div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-soft-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-secondary/50 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">What Our Clients Say About <span className="text-accent">Thrills</span></h2>
              <p className="text-xl text-soft-gray mb-10">Don't just take our word for it. Here's how we've helped businesses like yours.</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-2 border-primary" alt="Client" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div>
                  <div className="flex text-accent mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-bold">50+ Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { name: 'Sarah Jenkins', role: 'CEO, Lumina Tech', quote: 'Thrills completely transformed our digital presence. Our conversion rate jumped by 60% within the first month of launch.' },
                { name: 'Mark Thompson', role: 'Founder, Apex Academy', quote: 'The interactive 3D elements they added to our site made us stand out from competitors. Highly recommended!' },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8"
                >
                  <p className="text-lg italic mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-sm text-soft-gray">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Preview */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-soft-gray">Choose the plan that fits your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$40', features: ['5 Pages', 'Responsive Design', 'Basic SEO', 'Webflow Hosting', '1 Week Delivery'] },
              { name: 'Growth', price: '$100', features: ['10 Pages', 'Advanced Animations', 'CMS Integration', 'SEO Optimization', '2 Weeks Delivery'], popular: true },
              { name: 'Premium', price: '$250+', features: ['Custom 3D Elements', 'Full Strategy', 'E-commerce', 'Priority Support', 'Custom Timeline'] },
            ].map((plan, i) => (
              <div
                key={i}
                className={cn(
                  "glass-card p-10 flex flex-col relative",
                  plan.popular && "border-accent/50 bg-accent/5"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-5xl font-display font-bold mb-8">{plan.price}</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-soft-gray">
                      <CheckCircle2 size={18} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <MagneticButton className="w-full">
                  <a 
                    href={`https://wa.me/263774213484?text=Choose%20${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center",
                      plan.popular ? "bg-accent text-primary hover:scale-[1.02]" : "bg-white/5 hover:bg-white/10"
                    )}
                  >
                    Choose {plan.name}
                  </a>
                </MagneticButton>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem] bg-secondary border border-white/5 p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">Ready To Grow Your <br /> Business Online?</h2>
            <p className="text-xl text-soft-gray max-w-2xl mx-auto mb-12 leading-relaxed">
              Join 50+ businesses that have scaled their digital presence with Thrills. Let's build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <MagneticButton>
                <a 
                  href="https://wa.me/263774213484?text=Start%20Your%20Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xl flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Start Your Project <ArrowRight size={24} />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a 
                  href="https://wa.me/263774213484?text=Contact%20Sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-neutral-text px-10 py-5 rounded-full font-bold text-xl hover:bg-white/5 transition-colors flex items-center justify-center"
                >
                  Contact Sales
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
