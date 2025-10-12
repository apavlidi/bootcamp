import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-500"
        >
          <p>
            © 2025 DreamJob. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;