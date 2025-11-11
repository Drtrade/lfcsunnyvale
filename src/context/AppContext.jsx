import { createContext, useContext, useState, useEffect, use } from "react";

// Create the context
const AppContext = createContext();

// Custom hooks to use the context
export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};

// Create the provider component
export const AppProvider = ({ children }) => {
    // State Management here
    const [currentPage, setCurrentPage] = useState('home');
    const [showPopup, setShowPopup] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [searchQuery, setSearchQuery] = useState('');
    const [notificationEnabled, setNotificationEnabled] = useState(true);

    // Show popup after 1 second when app loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    //Update time every second
    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    // function to determine which service message to show
    const getServiceMessage = () => {
        const day = currentTime.getDay(); // 0 (Sun) to 6 (Sat)
        const hour = currentTime.getHours(); // 0 to 23

        // Sunday afternoon (12PM+) to Wednesday 4PM
        if ((day === 0 && hour >= 12) || (day >= 1 && day <= 3) || (day === 3 && hour < 16)) {
            return "Join us this Wednesday for our Midweek communion service!"
        }

        // Thursday to Saturday midnight
        return "Worship with us this Sunday!"
    };

    //Context value to be shared
    const value = {
        currentPage,
        setCurrentPage,
        showPopup,
        setShowPopup,
        showMobileMenu,
        setShowMobileMenu,
        currentTime,
        searchQuery,
        setSearchQuery,
        notificationEnabled,
        setNotificationEnabled,
        getServiceMessage,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};