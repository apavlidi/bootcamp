import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-24 sm:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-2xl bg-gradient-card border border-border shadow-card"
        >
          <div className="mb-6">
            <div className="inline-block p-4 bg-primary/10 rounded-full">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">Our Vision</h2>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
            We want anyone in Greece with a laptop and passion to land their dream tech job—<span className="text-primary font-semibold">without an engineering degree.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;