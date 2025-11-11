import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Heart, 
  Users, 
  Target, 
  Compass, 
  Star, 
  Shield,
  TrendingUp,
  Mail,
  Quote
} from 'lucide-react';
import aboutData from '../data/aboutData';

const AboutPage = () => {
  // Icon mapping
  const getIcon = (iconName, size = 32) => {
    const icons = {
      book: <BookOpen size={size} />,
      heart: <Heart size={size} />,
      hands: <Users size={size} />,
      star: <Star size={size} />,
      shield: <Shield size={size} />,
      target: <Target size={size} />,
      compass: <Compass size={size} />
    };
    return icons[iconName] || <BookOpen size={size} />;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
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
          <Users className="text-white" size={40} />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {aboutData.headline}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {aboutData.introText}
          </p>
        </div>
      </motion.div>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              {getIcon(aboutData.vision.icon, 32)}
            </div>
            <h2 className="text-3xl font-bold mb-4">{aboutData.vision.title}</h2>
            <p className="text-xl leading-relaxed text-white/90">
              "{aboutData.vision.statement}"
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              {getIcon(aboutData.mission.icon, 32)}
            </div>
            <h2 className="text-3xl font-bold mb-4">{aboutData.mission.title}</h2>
            <p className="text-xl leading-relaxed text-white/90">
              {aboutData.mission.statement}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {aboutData.coreValues.title}
          </h2>
          <p className="text-gray-600 text-lg">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-5 gap-6"
        >
          {aboutData.coreValues.values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-300 transition-all text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {getIcon(value.icon, 28)}
                <span className="text-white text-2xl font-bold"></span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {value.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {aboutData.leadership.title}
          </h2>
        </motion.div>

        {/* Resident Pastor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl p-8 shadow-xl mb-8 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Replace with actual image */}
                <Users className="text-white" size={80} />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {aboutData.leadership.residentPastor.name}
                </h3>
                <p className="text-blue-600 font-semibold text-lg">
                  {aboutData.leadership.residentPastor.title}
                </p>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {aboutData.leadership.residentPastor.description}
              </p>
              
              
              <a
                href={`mailto:${aboutData.leadership.residentPastor.email}`}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <Mail size={20} />
                <span>Contact Pastor</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Assistant Pastors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-3">
            {aboutData.leadership.assistantPastors.title}
          </h3>
          <p className="text-white/90 text-lg leading-relaxed">
            {aboutData.leadership.assistantPastors.description}
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {aboutData.story.title}
          </h2>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-gray-100 mb-12"
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Quote className="text-blue-600" size={24} />
            </div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {aboutData.story.content}
            </p>
          </div>
        </motion.div>

        {/* Milestones Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {aboutData.story.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                <div className="md:w-1/2 text-center md:text-right">
                  <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="inline-block bg-gradient-to-br from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-lg mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <TrendingUp className="text-blue-600" size={28} />
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Impact in Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-gray-100 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Join Our Growing Family
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Experience the transforming power of God's Word and become part of a community that cares.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Plan Your Visit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
};

export default AboutPage;