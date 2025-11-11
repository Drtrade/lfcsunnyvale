import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  Users,
  Info,
  Mail,
  BookOpen,
  Search,
  Bell,
  Menu,
  X,
  Clock,
} from "lucide-react";
import { useApp } from "../context/AppContext";

const Navbar = () => {
  const {
    currentPage,
    setCurrentPage,
    showMobileMenu,
    setShowMobileMenu,
    currentTime,
    setSearchQuery,
    notificationEnabled,
    setNotificationEnabled,
  } = useApp();

  const [showSearch, setShowSearch] = useState(false);

  // Navigation items with icons
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Calendar },
    { id: "units", label: "Units", icon: Users },
    { id: "about", label: "About", icon: Info },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "blog", label: "Blog", icon: BookOpen },
  ];

  // Format date and time for display
  const formatDateTime = (date) => {
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Enable push notifications
  const enableNotifications = () => {
    setNotificationEnabled(true);
    alert("Push notification enabled! You'll service reminders");
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">LFC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">LFC Sunnyvale</h1>
              <p className="text-xs text-gray-500">Living Faith Church</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Date & Time Display */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
              <Clock size={16} />
              <span className="font-medium">{formatDateTime(currentTime)}</span>
            </div>

            {/* Search Icon */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search size={20} className="text-gray-700" />
            </button>

            {/* Notification Bell */}
            <button
              onClick={enableNotifications}
              className={`p-2 rounded-lg transition-colors ${
                notificationEnabled
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Bell size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar (Animated) */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="pb-4"
            >
              <input
                type="text"
                placeholder="Search sermons, blogs, events..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setShowMobileMenu(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}

              {/* Mobile Date/Time */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-4 py-3 rounded-lg mt-2">
                <Clock size={16} />
                <span className="font-medium">
                  {formatDateTime(currentTime)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
