import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Thrills Logo" className="w-8 h-8 object-contain" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }} />
            <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center hidden">
              <span className="w-4 h-4 bg-primary rounded-full" />
            </span>
            THRILLS
          </Link>
          <p className="text-soft-gray max-w-md text-lg leading-relaxed mb-8">
            We design and build high-converting digital experiences that help startups and high-end businesses grow faster.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Explore</h4>
          <ul className="space-y-4">
            {['Services', 'Work', 'Process', 'Pricing', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="text-soft-gray hover:text-accent transition-colors flex items-center gap-1">
                  {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-soft-gray">
            <li className="flex items-center gap-3 hover:text-accent transition-colors">
              <Mail size={18} className="text-accent" />
              <a href="mailto:thrills976@gmail.com">thrills976@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 hover:text-accent transition-colors">
              <Phone size={18} className="text-accent" />
              <a href="tel:+263774213484">+263 774 213 484</a>
            </li>
            <li className="flex items-center gap-3 hover:text-accent transition-colors">
              <MessageCircle size={18} className="text-accent" />
              <a href="https://wa.me/263774213484" target="_blank" rel="noopener noreferrer">WhatsApp: +263 774 213 484</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-soft-gray">
        <p>© {new Date().getFullYear()} Thrills Agency. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
