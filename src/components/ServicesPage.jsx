import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen, 
  Heart,
  Sparkles,
  Star,
  Flame,
  Target,
  ArrowRight
} from 'lucide-react';
import servicesData, { formatDate, getNextFastingStartDate } from '../data/servicesData';

const ServicesPage = () => {
  // Get dynamic fasting date
  const nextFastingDate = getNextFastingStartDate();

  // Icon mapping
  const getIcon = (iconName, size = 32) => {
    const icons = {
      celebration: <Calendar size={size} />,
      communion: <Heart size={size} />,
      evangelism: <Users size={size} />,
      prayer: <Flame size={size} />,
      special: <Star size={size} />,
      fasting: <BookOpen size={size} />,
      renewal: <Sparkles size={size} />
    };
    return icons[iconName] || <Calendar size={size} />;
  };

  return (
    <div className="space-y-16">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <Calendar className="text-white" size={40} />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {servicesData.headline}
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {servicesData.introText}
        </p>
      </motion.div>

      {/* Weekly Services Section */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Weekly Service Schedule</h2>
          <p className="text-gray-600">Join us every week for transformative worship experiences</p>
        </motion.div>

        <div className="grid gap-6">
          {servicesData.weeklyServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-300"
            >
              <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
                
                {/* Left Section - Icon and Day */}
                <div className={`bg-gradient-to-br ${service.color} rounded-xl p-6 text-white flex flex-col justify-center items-center text-center`}>
                  <div className="mb-4">
                    {getIcon(service.icon, 48)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.day}</h3>
                  <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                </div>

                {/* Middle Section - Service Details */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h4>
                    
                    {/* Show current theme for Sunday services */}
                    {service.currentTheme && (
                      <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                        <Target className="inline mr-2" size={16} />
                        This Week's Theme: {service.currentTheme}
                      </div>
                    )}
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {service.note && (
                      <p className="text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg mt-2 inline-block">
                        <span className="font-semibold">Note:</span> {service.note}
                      </p>
                    )}
                  </div>

                  {/* Service Times */}
                  <div className="space-y-2">
                    {service.times.map((timeSlot, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg"
                      >
                        <Clock className="text-blue-600 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-800">
                            {timeSlot.service}:
                          </span>
                          <span className="text-gray-600 ml-2">{timeSlot.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={18} className="text-blue-600" />
                    <span className="text-sm">Living Faith Church, 123 Faith Avenue, Sunnyvale, CA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Monthly Programs */}
      {servicesData.monthlyPrograms && servicesData.monthlyPrograms.length > 0 && (
        <section className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Monthly Programs</h2>
            <p className="text-gray-600">Special monthly gatherings for spiritual growth</p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-6">
            {servicesData.monthlyPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`bg-gradient-to-br ${program.color} rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden`}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
                
                <div className="relative z-10 grid md:grid-cols-3 gap-6 items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      {getIcon(program.icon, 40)}
                    </div>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-lg inline-block">
                        <Calendar size={18} />
                        <span className="font-semibold">{program.schedule}</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-lg inline-block ml-2">
                        <Clock size={18} />
                        <span className="font-semibold">{program.time}</span>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed mt-4">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Special Programs */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Special Programs</h2>
          <p className="text-gray-600">Annual flagship events and spiritual gatherings</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {servicesData.specialPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${program.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    {getIcon(program.icon, 32)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Calendar size={16} />
                    <span className="font-medium">{program.dates}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {program.description}
                </p>

                {program.fullDescription && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.fullDescription}
                    </p>
                  </div>
                )}

                {/* Highlights */}
                {program.highlights && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide">
                      Program Highlights
                    </h4>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ArrowRight className="text-blue-600 flex-shrink-0 mt-1" size={16} />
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2`}>
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience God's Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for any of our services and experience the life-transforming power of God's Word
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2">
              <MapPin size={20} />
              <span>Get Directions</span>
            </button>
            <button className="bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all flex items-center justify-center space-x-2">
              <Calendar size={20} />
              <span>Plan Your Visit</span>
            </button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default ServicesPage;