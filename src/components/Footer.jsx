import { Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">LFC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">LFC Sunnyvale</h3>
                <p className="text-sm text-gray-400">Living Faith Church</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              A community of believers transforming lives through faith, love, and service.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Services</li>
              <li className="hover:text-white transition-colors cursor-pointer">Ministries</li>
              <li className="hover:text-white transition-colors cursor-pointer">Events</li>
            </ul>
          </div>

          {/* Service Times Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Service Times</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Sunday: 9:00 AM</li>
              <li>Wednesday: 6:00 PM</li>
              <li>Friday: 7:00 PM</li>
              <li>Saturday: 10:00 AM</li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-3 mb-4">
              <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </button>
              <button className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              <Mail className="inline mr-2" size={14} />
              info@lfcsunnyvale.org
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Living Faith Church Sunnyvale. All rights reserved.</p>
          <p className="mt-2">Built with ❤️ for the Kingdom</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;