import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

export function Contact() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter"
            >
              Let's Build <br /> Something <span className="text-gradient">Great</span>
            </motion.h1>
            <p className="text-xl text-soft-gray mb-12 leading-relaxed">
              Ready to take your business to the next level? Fill out the form or reach out directly. We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-soft-gray uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold">thrills976@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-soft-gray uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold">+263 774 213 484</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-soft-gray uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-xl font-bold">+263 774 213 484</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-soft-gray uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-soft-gray uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-soft-gray uppercase tracking-widest">Business Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Company"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-soft-gray uppercase tracking-widest">Budget</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option className="bg-secondary">$300 - $700</option>
                    <option className="bg-secondary">$700 - $1500</option>
                    <option className="bg-secondary">$1500+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-soft-gray uppercase tracking-widest">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <MagneticButton className="w-full">
                <button className="w-full bg-accent text-primary py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  Start My Project <Send size={20} />
                </button>
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
