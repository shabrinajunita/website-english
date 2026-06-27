import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookHeart, Heart, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/learn', label: 'Learn English', icon: BookHeart },
    { path: '/support', label: 'Support', icon: Heart },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl px-4 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎮</span>
            <span className="font-semibold text-pink-500 dark:text-pink-400 hidden sm:block">
              English with Roblox
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium hidden sm:block">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-pink-100 dark:bg-gray-700 text-pink-500 dark:text-pink-400 ml-2"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
