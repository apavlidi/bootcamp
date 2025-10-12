import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Zap, TrendingUp } from 'lucide-react';

const Pillars = () => {
  const pillars = [
    {
      icon: Users,
      title: 'Mentorship & career coaching',
      description: 'Get personalized guidance from industry professionals who have walked the path you\'re on.'
    },
    {
      icon: Sparkles,
      title: 'Branding',
      description: 'Build a powerful personal brand that makes you stand out in the competitive tech landscape.'
    },
    {
      icon: Zap,
      title: 'How to work / execute',
      description: 'Master the practical skills and workflows that separate great developers from the rest.'
    },
    {
      icon: TrendingUp,
      title: 'Expectations of Industry',
      description: 'Understand what companies really want and how to exceed their expectations from day one.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">The 4 Pillars</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-start p-8 border border-border rounded-2xl bg-card transition-smooth hover:border-primary/50 hover:shadow-card"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;