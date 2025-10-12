import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Team Member 1',
    description: 'The visionary founder, dedicated to mentoring the next generation of tech talent in Greece.',
    imageUrl: 'https://images.unsplash.com/photo-1603991414220-51b87b89a371?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200'
  },
  {
    name: 'Team Member 2',
    description: 'An industry expert with a passion for building powerful personal brands for aspiring developers.',
    imgReplace: 'A smiling woman with glasses in a professional setting'
  },
  {
    name: 'Team Member 3',
    description: 'A seasoned developer focused on teaching practical skills and real-world execution.',
    imgReplace: 'A man in a casual shirt smiling confidently'
  }
];

const Team = () => {
  return (
    <section className="py-24 sm:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Who we are</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg">
                {member.imageUrl ? (
                  <img alt={member.name} className="w-full h-full object-cover" src={member.imageUrl} />
                ) : (
                  <img alt={member.name} src="https://images.unsplash.com/photo-1593510050025-2c379a40f1aa" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;