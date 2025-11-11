import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Twitter,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import contactData from '../data/contactData';

const ContactPage = () => {
  // State management for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // State management for form submission status
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: ''
  });

  // State for loading indicator
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with full error handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, success: false, error: false, message: '' });

    // Client-side validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Please fill in all required fields'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success response
      setFormStatus({
        submitted: true,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });

      // Auto-hide success message
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
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
          <MessageSquare className="text-white" size={40} />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {contactData.headline}
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {contactData.introText}
        </p>
      </motion.div>

      {/* Contact Form and Info Grid */}
      <section className="grid lg:grid-cols-5 gap-8">
        
        {/* Contact Information - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {contactData.contactDetails.address.line1}<br />
                    {contactData.contactDetails.address.line2}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <a 
                    href={`tel:${contactData.contactDetails.phone}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactData.contactDetails.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a 
                    href={`mailto:${contactData.contactDetails.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactData.contactDetails.email}
                  </a>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Service Hours</h4>
                  <div className="space-y-1">
                    {contactData.contactDetails.serviceHours.map((service, index) => (
                      <p key={index} className="text-gray-600">
                        <span className="font-medium">{service.day}:</span> {service.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{contactData.officeHours.title}</h3>
            <div className="space-y-3">
              {contactData.officeHours.schedule.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                  <span className="font-medium">{item.days}</span>
                  <span className="text-white/90">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Social Media FIXED */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Connect With Us</h4>
            <div className="flex space-x-3">
              <a
                href={contactData.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="text-white" size={20} />
              </a>

              <a
                href={contactData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="text-white" size={20} />
              </a>

              <a
                href={contactData.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Youtube className="text-white" size={20} />
              </a>

              <a
                href={contactData.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter className="text-white" size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

            {/* Form Status Messages */}
            {formStatus.submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                  formStatus.success 
                    ? 'bg-green-50 border-2 border-green-200' 
                    : 'bg-red-50 border-2 border-red-200'
                }`}
              >
                {formStatus.success ? (
                  <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                ) : (
                  <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                )}
                <p className={`${formStatus.success ? 'text-green-700' : 'text-red-700'}`}>
                  {formStatus.message}
                </p>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors bg-white"
                  required
                >
                  <option value="">Select a subject</option>
                  {contactData.formSubjects.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message / Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <h2 className="text-3xl font-bold mb-2">Find Us</h2>
          <p className="text-white/90">Visit us at our church location</p>
        </div>
        
        <div className="relative w-full h-96">
          <iframe
            src={contactData.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LFC Sunnyvale Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.section>

      {/* Closing Message */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center border-2 border-blue-100"
      >
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="text-white" size={32} />
          </div>
          <p className="text-gray-700 text-xl md:text-2xl font-medium leading-relaxed italic">
            "{contactData.closingMessage}"
          </p>
        </div>
      </motion.section>

    </div>
  );
};

export default ContactPage;
