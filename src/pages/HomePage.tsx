import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mic, BookOpen, Heart, Sparkles, Play } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Roblox Interviews',
    description: 'Watch fun conversations with players from around the world.',
    color: 'from-pink-400 to-pink-500',
  },
  {
    icon: BookOpen,
    title: 'Learn Basic English',
    description: 'Discover beginner-friendly English words and phrases.',
    color: 'from-purple-400 to-purple-500',
  },
  {
    icon: Heart,
    title: 'Support My Journey',
    description: 'Help me create more free English content.',
    color: 'from-rose-400 to-rose-500',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 right-4 text-4xl"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-4 left-4 text-3xl"
            >
              💫
            </motion.div>

            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text">Learn English Through Roblox</span>
              <span className="ml-2">🎮</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 mb-8"
            >
              <h2 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200">
                Hi! I'm Stefi 👋
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
                I create fun Roblox interview videos where people from different countries chat,
                laugh, and practice English together.
              </p>
              <p className="text-pink-500 dark:text-pink-400 font-medium">
                My goal is to make English learning fun, natural, and stress-free through
                real conversations.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://www.tiktok.com/@stefismicin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Play size={20} />
                Watch My TikTok
              </motion.a>
              <Link to="/learn">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <BookOpen size={20} />
                  Learn English
                </motion.button>
              </Link>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 relative"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-[140px] leading-none"
                  >
                    🎮
                  </motion.div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-0 left-0 text-2xl"
                >
                  ⭐
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-4 right-4 text-xl"
                >
                  💖
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-8 right-0 text-lg"
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-dark rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl shadow-lg`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                  {index === 0 && (
                    <motion.span
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-auto text-2xl"
                    >
                      🎤
                    </motion.span>
                  )}
                  {index === 1 && (
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-auto text-2xl"
                    >
                      📚
                    </motion.span>
                  )}
                  {index === 2 && (
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-auto text-2xl"
                    >
                      💖
                    </motion.span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
