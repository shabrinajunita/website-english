import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FileQuestion, ChevronLeft, ChevronRight, Dice5, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { words } from '../data/words';
import { quizQuestions } from '../data/quiz';

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState<'word' | 'quiz'>('word');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const currentWord = words[currentWordIndex];

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
  };

  const prevWord = () => {
    setCurrentWordIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  const randomWord = () => {
    const newIndex = Math.floor(Math.random() * words.length);
    setCurrentWordIndex(newIndex);
  };

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="gradient-text">Learn English</span>
            <span className="ml-2">📚</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Expand your vocabulary and test your knowledge!
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('word')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'word'
                ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg'
                : 'glass text-gray-700 dark:text-gray-200'
            }`}
          >
            <Sparkles size={18} />
            Word of the Day
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'quiz'
                ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg'
                : 'glass text-gray-700 dark:text-gray-200'
            }`}
          >
            <FileQuestion size={18} />
            Mini Quiz
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'word' ? (
            <motion.div
              key="word-tab"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Word {currentWordIndex + 1} of {words.length}
                  </span>
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl"
                  >
                    ✨
                  </motion.span>
                </div>

                <div className="text-center mb-8">
                  <motion.h2
                    key={currentWord.word}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl sm:text-5xl font-bold text-pink-500 dark:text-pink-400 mb-3"
                  >
                    {currentWord.word}
                  </motion.h2>
                  <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                    {currentWord.pronunciation}
                  </p>
                  <span className="inline-block px-4 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">
                    {currentWord.partOfSpeech}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="glass-dark rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📖</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Meaning</p>
                        <p className="text-gray-700 dark:text-gray-200">{currentWord.meaning}</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-dark rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">🇮🇩</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Indonesian</p>
                        <p className="text-gray-700 dark:text-gray-200">{currentWord.indonesian}</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-dark rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">💬</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Example</p>
                        <p className="text-gray-700 dark:text-gray-200 italic">"{currentWord.example}"</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-dark rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📝</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Translation</p>
                        <p className="text-gray-700 dark:text-gray-200 italic">"{currentWord.exampleTranslation}"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={prevWord}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft size={18} />
                    Previous
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={randomWord}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Dice5 size={18} />
                    Random
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={nextWord}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Next
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="quiz-tab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-3xl p-6 sm:p-8">
                {!quizCompleted ? (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Question {currentQuestion + 1} of {quizQuestions.length}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Score:</span>
                        <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">
                          {score}/{quizQuestions.length}
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                        className="bg-gradient-to-r from-pink-500 to-pink-400 h-2 rounded-full"
                      />
                    </div>

                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6"
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                        {quizQuestions[currentQuestion].question}
                      </h3>

                      <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <motion.button
                            key={index}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showExplanation}
                            className={`w-full text-left p-4 rounded-xl transition-all ${
                              showExplanation
                                ? index === quizQuestions[currentQuestion].correctAnswer
                                  ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500'
                                  : selectedAnswer === index
                                  ? 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500'
                                  : 'glass-dark'
                                : 'glass-dark hover:bg-pink-50 dark:hover:bg-gray-700 border-2 border-transparent hover:border-pink-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 dark:text-gray-200">{option}</span>
                              {showExplanation && index === quizQuestions[currentQuestion].correctAnswer && (
                                <CheckCircle className="text-green-500" size={20} />
                              )}
                              {showExplanation && selectedAnswer === index && index !== quizQuestions[currentQuestion].correctAnswer && (
                                <XCircle className="text-red-500" size={20} />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          <div className="glass-dark rounded-xl p-4">
                            <div className="flex items-start gap-3">
                              <span className="text-lg">💡</span>
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Explanation</p>
                                <p className="text-gray-700 dark:text-gray-200">
                                  {quizQuestions[currentQuestion].explanation}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="glass-dark rounded-xl p-4">
                            <div className="flex items-start gap-3">
                              <span className="text-lg">🇮🇩</span>
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Penjelasan Bahasa Indonesia</p>
                                <p className="text-gray-700 dark:text-gray-200">
                                  {quizQuestions[currentQuestion].indonesianExplanation}
                                </p>
                              </div>
                            </div>
                          </div>

                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={nextQuestion}
                            className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                          >
                            {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    {score === quizQuestions.length ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="text-6xl mb-4"
                      >
                        🎉
                      </motion.div>
                    ) : score >= quizQuestions.length / 2 ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="text-6xl mb-4"
                      >
                        🌟
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="text-6xl mb-4"
                      >
                        💪
                      </motion.div>
                    )}

                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {score === quizQuestions.length
                        ? 'Perfect Score!'
                        : score >= quizQuestions.length / 2
                        ? 'Great Job!'
                        : 'Keep Learning!'}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      You got <span className="text-pink-500 font-bold">{score}</span> out of{' '}
                      <span className="font-bold">{quizQuestions.length}</span> questions correct!
                    </p>

                    <div className="flex justify-center gap-3 mb-6">
                      {[...Array(quizQuestions.length)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            answers[i] === quizQuestions[i].correctAnswer
                              ? 'bg-green-100 dark:bg-green-900/30'
                              : 'bg-red-100 dark:bg-red-900/30'
                          }`}
                        >
                          {answers[i] === quizQuestions[i].correctAnswer ? (
                            <CheckCircle className="text-green-500" size={16} />
                          ) : (
                            <XCircle className="text-red-500" size={16} />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={restartQuiz}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <RefreshCw size={18} />
                      Try Again
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
