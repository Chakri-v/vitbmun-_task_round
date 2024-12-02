import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { staggerContainer, scaleIn, rotateIn } from '../utils/animations';
import { FloatingShapes } from './decorative/FloatingShapes';
import { BackgroundPattern } from './decorative/BackgroundPattern';

const Events = () => {
  const events = [
    {
      title: "General Assembly",
      date: "March 15-17, 2024",
      location: "Main Conference Hall",
      delegates: "250 delegates",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80"
    },
    {
      title: "Security Council",
      date: "March 15-17, 2024",
      location: "Chamber B",
      delegates: "15 delegates",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
    },
    {
      title: "Human Rights Council",
      date: "March 15-17, 2024",
      location: "Chamber C",
      delegates: "47 delegates",
      image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <FloatingShapes />
      <BackgroundPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={rotateIn}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Upcoming Committees
          </motion.h2>
          <motion.p
            variants={scaleIn}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our diverse range of committees designed to challenge your diplomatic skills
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden group"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center"
                >
                  <p className="text-white font-bold text-lg">Learn More</p>
                </motion.div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {event.title}
                </h3>
                <div className="space-y-2">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600"
                  >
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.date}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600"
                  >
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.location}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600"
                  >
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.delegates}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;