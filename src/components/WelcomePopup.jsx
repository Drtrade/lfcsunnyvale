import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, X } from "lucide-react";
import { useApp } from "../context/AppContext";
import { bibleVerses } from "../data/bibleVerses";

const WelcomePopup = () => {
  const { showPopup, setShowPopup, getServiceMessage } = useApp();

  // Select a random Bible verse when popup loads
  const [verse] = useState(
    () => bibleVerses[Math.floor(Math.random() * bibleVerses.length)]
  );

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={() => setShowPopup(false)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
          
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <BookOpen className="text-white" size={40} />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to LFC Sunnyvale!
            </h2>
          </div>

          {/* Bible Verse */}
          <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
            <p className="text-gray-700 italic text-lg mb-3">
              "{verse.text}"
            </p>
            <p className="text-blue-600 font-semibold text-right">
              - {verse.ref}
            </p>
          </div>

          {/* Service Message */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white text-center">
            <Calendar className="inline-block mb-2" size={24} />
            <p className="font-semibold text-lg">
              {getServiceMessage()}
            </p>
          </div>

          {/* Continue Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="mt-6 w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Continue to Website
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


export default WelcomePopup;