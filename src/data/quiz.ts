export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  indonesianExplanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does 'Hello' mean?",
    options: ["Goodbye", "A greeting", "Thank you", "Sorry"],
    correctAnswer: 1,
    explanation: "'Hello' is used as a greeting when you meet someone.",
    indonesianExplanation: "'Hello' digunakan sebagai salam saat kamu bertemu seseorang."
  },
  {
    id: 2,
    question: "How do you say 'Terima kasih' in English?",
    options: ["Please", "Sorry", "Thank you", "Hello"],
    correctAnswer: 2,
    explanation: "'Thank you' is used to express gratitude.",
    indonesianExplanation: "'Thank you' digunakan untuk mengucapkan rasa terima kasih."
  },
  {
    id: 3,
    question: "What is the opposite of 'Happy'?",
    options: ["Fun", "Sad", "Good", "Nice"],
    correctAnswer: 1,
    explanation: "The opposite of happy is sad. Happy means feeling good, sad means feeling bad.",
    indonesianExplanation: "Kebalikan dari happy adalah sad. Happy berarti merasa baik, sad berarti merasa sedih."
  },
  {
    id: 4,
    question: "Complete: 'I ___ to play games.'",
    options: ["want", "wanting", "wants", "wanteded"],
    correctAnswer: 0,
    explanation: "After 'I', we use the base form of the verb. So 'I want' is correct.",
    indonesianExplanation: "Setelah 'I', kita menggunakan bentuk dasar kata kerja. Jadi 'I want' adalah yang benar."
  },
  {
    id: 5,
    question: "What does 'Friend' mean?",
    options: ["A family member", "A person you know well and like", "A teacher", "A stranger"],
    correctAnswer: 1,
    explanation: "A friend is someone you know well and enjoy spending time with.",
    indonesianExplanation: "Friend adalah seseorang yang kamu kenal baik dan senang menghabiskan waktu bersamanya."
  },
  {
    id: 6,
    question: "Which word means 'very good'?",
    options: ["Bad", "Sad", "Amazing", "Boring"],
    correctAnswer: 2,
    explanation: "Amazing means something is very good or impressive!",
    indonesianExplanation: "Amazing berarti sesuatu sangat bagus atau mengesankan!"
  },
  {
    id: 7,
    question: "What do you say when you make a mistake?",
    options: ["Thank you", "Sorry", "Hello", "Goodbye"],
    correctAnswer: 1,
    explanation: "We say 'Sorry' when we make a mistake or want to apologize.",
    indonesianExplanation: "Kita mengucapkan 'Sorry' saat membuat kesalahan atau ingin meminta maaf."
  },
  {
    id: 8,
    question: "Complete: 'This game is ___ fun!'",
    options: ["a", "an", "so", "many"],
    correctAnswer: 2,
    explanation: "'So fun' is used to emphasize how enjoyable something is. We say 'This game is so fun!'",
    indonesianExplanation: "'So fun' digunakan untuk menekankan betapa menyenangkannya sesuatu. Kita bilang 'This game is so fun!'"
  },
  {
    id: 9,
    question: "What is the meaning of 'Learn'?",
    options: ["To play games", "To get knowledge or skill", "To eat food", "To sleep"],
    correctAnswer: 1,
    explanation: "To learn means to gain new knowledge or skills, like learning English!",
    indonesianExplanation: "Learn berarti mendapatkan pengetahuan atau keterampilan baru, seperti belajar bahasa Inggris!"
  },
  {
    id: 10,
    question: "How do you say 'Sampai jumpa' in English?",
    options: ["Hello", "Thank you", "See you", "Sorry"],
    correctAnswer: 2,
    explanation: "'See you' is a friendly way to say goodbye, meaning you'll meet again.",
    indonesianExplanation: "'See you' adalah cara ramah untuk mengucapkan selamat tinggal, berarti kamu akan bertemu lagi."
  }
];
