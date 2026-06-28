import { motion } from 'framer-motion';
import { Heart, Camera, ThumbsUp, Share2 } from 'lucide-react';

const freeWays = [
  {
    icon: Camera,
    title: 'Follow me on TikTok',
    description: 'Stay updated with my latest Roblox English interviews.',
    emoji: '🎥',
  },
  {
    icon: ThumbsUp,
    title: 'Like & Comment',
    description: 'Your engagement helps my videos reach more people.',
    emoji: '👍',
  },
  {
    icon: Share2,
    title: 'Share My Videos',
    description: 'Share my content with your friends who want to learn English.',
    emoji: '📲',
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="gradient-text">Support My Journey</span>
            <span className="ml-2">💖</span>
          </h1>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-6 sm:p-8 mb-8"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block text-4xl mb-4"
            >
              💕
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto">
              If my videos help you learn English or simply make you smile, thank you so much for being here.
            </p>
            <p className="text-pink-500 dark:text-pink-400 font-medium mt-3">
              Your support helps me create more Roblox interview videos and free English content.
            </p>
          </div>

          <motion.a
            href="https://sociabuzz.com/mingyugf301/donate"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full"
          >
            <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Heart className="fill-white" size={24} />
                <span className="text-xl font-bold">Support via Sociabuzz</span>
              </div>
              <p className="text-pink-100 text-sm">
                Click here to support my content creation
              </p>
            </div>
          </motion.a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            <span className="mr-2">❤️</span>
            Free Ways to Support Me
          </h2>

          <div className="space-y-4 mb-8">
            {freeWays.map((way, index) => {
              const Icon = way.icon;
              return (
                <motion.div
                  key={way.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-dark rounded-2xl p-5 card-hover"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl shadow-md">
                      <Icon className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                        {way.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {way.description}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="text-2xl"
                    >
                      {way.emoji}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            href="https://www.tiktok.com/@stefismicin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block"
          >
            <div className="glass rounded-2xl p-6 text-center hover:bg-pink-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer border-2 border-pink-200 dark:border-pink-800">
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg className="w-7 h-7 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  Follow My TikTok
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                @stefismicin
              </p>
            </div>
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
