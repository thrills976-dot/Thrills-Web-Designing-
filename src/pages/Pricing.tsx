import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { MagneticButton } from '../components/MagneticButton';

const plans = [
  {
    name: 'Starter',
    price: '$40',
    desc: 'Perfect for small businesses and personal brands.',
    features: [
      'Up to 5 Pages',
      'Responsive Design',
      'Basic SEO Setup',
      'Webflow Hosting Setup',
      '1 Week Delivery',
      '1 Round of Revisions'
    ]
  },
  {
    name: 'Growth',
    price: '$100',
    desc: 'Ideal for growing startups and established companies.',
    features: [
      'Up to 10 Pages',
      'Advanced Animations',
      'CMS Integration',
      'Full SEO Optimization',
      '2 Weeks Delivery',
      '3 Rounds of Revisions',
      'Google Analytics Setup'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '$250+',
    desc: 'Custom solutions for high-end digital experiences.',
    features: [
      'Unlimited Pages',
      'Custom 3D Elements',
      'E-commerce Integration',
      'Full Brand Strategy',
      'Priority Support',
      'Unlimited Revisions',
      'Custom Timeline'
    ]
  }
];

export function Pricing() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Simple <span className="text-gradient">Transparent</span> Pricing
          </motion.h1>
          <p className="text-xl text-soft-gray">
            No hidden fees. No surprises. Just high-quality web design that delivers results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass-card p-12 flex flex-col relative",
                plan.popular && "border-accent/50 bg-accent/5 scale-105 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-soft-gray mb-8">{plan.desc}</p>
              <div className="text-6xl font-display font-bold mb-10">{plan.price}</div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-soft-gray">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <MagneticButton className="w-full">
                <a 
                  href={`https://wa.me/263774213484?text=Get%20Started%20with%20${plan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center",
                    plan.popular ? "bg-accent text-primary hover:scale-[1.02]" : "bg-white/5 hover:bg-white/10"
                  )}
                >
                  Get Started
                </a>
              </MagneticButton>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: 'How long does a project take?', a: 'Typically 1-3 weeks depending on the complexity and the plan you choose.' },
              { q: 'Do you offer maintenance?', a: 'Yes, we offer ongoing support and maintenance packages to keep your site running smoothly.' },
              { q: 'Can I update the site myself?', a: 'Absolutely. We build on Webflow which includes an easy-to-use CMS for your team.' },
              { q: 'What if I need more pages?', a: 'We can always add more pages at a fixed rate or upgrade your plan mid-project.' },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-8">
                <div className="flex items-start gap-4">
                  <HelpCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2 text-lg">{faq.q}</h4>
                    <p className="text-soft-gray">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
