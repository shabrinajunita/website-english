export interface Word {
  id: number;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  meaning: string;
  indonesian: string;
  example: string;
  exampleTranslation: string;
}

export const words: Word[] = [
  {
    id: 1,
    word: "Amazing",
    pronunciation: "/əˈmeɪ.zɪŋ/",
    partOfSpeech: "Adjective",
    meaning: "Very good or impressive.",
    indonesian: "Sangat luar biasa.",
    example: "This Roblox game is amazing!",
    exampleTranslation: "Game Roblox ini sangat keren!"
  },
  {
    id: 2,
    word: "Friend",
    pronunciation: "/frend/",
    partOfSpeech: "Noun",
    meaning: "A person you know well and like.",
    indonesian: "Teman yang kamu kenal baik dan kamu suka.",
    example: "I made a new friend in Roblox today.",
    exampleTranslation: "Aku bertemu teman baru di Roblox hari ini."
  },
  {
    id: 3,
    word: "Happy",
    pronunciation: "/ˈhæp.i/",
    partOfSpeech: "Adjective",
    meaning: "Feeling or showing pleasure.",
    indonesian: "Merasa atau menunjukkan kesenangan.",
    example: "I'm so happy we can play together!",
    exampleTranslation: "Aku sangat senang kita bisa bermain bersama!"
  },
  {
    id: 4,
    word: "Learn",
    pronunciation: "/lɜːn/",
    partOfSpeech: "Verb",
    meaning: "To get knowledge or skill.",
    indonesian: "Mendapatkan pengetahuan atau keterampilan.",
    example: "I want to learn English.",
    exampleTranslation: "Aku ingin belajar bahasa Inggris."
  },
  {
    id: 5,
    word: "Play",
    pronunciation: "/pleɪ/",
    partOfSpeech: "Verb",
    meaning: "To take part in a game or sport.",
    indonesian: "Ikut serta dalam permainan atau olahraga.",
    example: "Let's play Roblox together!",
    exampleTranslation: "Ayo main Roblox bersama!"
  },
  {
    id: 6,
    word: "Hello",
    pronunciation: "/həˈləʊ/",
    partOfSpeech: "Exclamation",
    meaning: "Used as a greeting.",
    indonesian: "Digunakan sebagai salam.",
    example: "Hello! How are you?",
    exampleTranslation: "Halo! Apa kabar?"
  },
  {
    id: 7,
    word: "Game",
    pronunciation: "/ɡeɪm/",
    partOfSpeech: "Noun",
    meaning: "An activity for entertainment.",
    indonesian: "Kegiatan untuk hiburan.",
    example: "This game is so fun!",
    exampleTranslation: "Game ini sangat menyenangkan!"
  },
  {
    id: 8,
    word: "Fun",
    pronunciation: "/fʌn/",
    partOfSpeech: "Adjective",
    meaning: "Enjoyable or amusing.",
    indonesian: "Menyenangkan atau menghibur.",
    example: "Playing with you is really fun.",
    exampleTranslation: "Bermain denganmu sangat menyenangkan."
  },
  {
    id: 9,
    word: "Help",
    pronunciation: "/help/",
    partOfSpeech: "Verb",
    meaning: "To make it easier for someone.",
    indonesian: "Memudahkan seseorang.",
    example: "Can you help me with this?",
    exampleTranslation: "Bisakah kamu membantuku dengan ini?"
  },
  {
    id: 10,
    word: "Sorry",
    pronunciation: "/ˈsɒr.i/",
    partOfSpeech: "Adjective",
    meaning: "Feeling sad or regret.",
    indonesian: "Merasa sedih atau penyesalan.",
    example: "Sorry, I didn't understand.",
    exampleTranslation: "Maaf, aku tidak mengerti."
  },
  {
    id: 11,
    word: "Thank You",
    pronunciation: "/θæŋk juː/",
    partOfSpeech: "Phrase",
    meaning: "An expression of gratitude.",
    indonesian: "Ungkapan rasa terima kasih.",
    example: "Thank you for your help!",
    exampleTranslation: "Terima kasih atas bantuanmu!"
  },
  {
    id: 12,
    word: "Please",
    pronunciation: "/pliːz/",
    partOfSpeech: "Adverb",
    meaning: "Used in polite requests.",
    indonesian: "Digunakan dalam permintaan yang sopan.",
    example: "Please wait for me.",
    exampleTranslation: "Tolong tunggu aku."
  },
  {
    id: 13,
    word: "Love",
    pronunciation: "/lʌv/",
    partOfSpeech: "Verb",
    meaning: "To like something very much.",
    indonesian: "Sangat menyukai sesuatu.",
    example: "I love playing games with friends.",
    exampleTranslation: "Aku suka bermain game dengan teman-teman."
  },
  {
    id: 14,
    word: "Cool",
    pronunciation: "/kuːl/",
    partOfSpeech: "Adjective",
    meaning: "Very good or fashionable.",
    indonesian: "Sangat bagus atau modis.",
    example: "Your avatar is so cool!",
    exampleTranslation: "Avatarmu sangat keren!"
  },
  {
    id: 15,
    word: "Nice",
    pronunciation: "/naɪs/",
    partOfSpeech: "Adjective",
    meaning: "Pleasant or enjoyable.",
    indonesian: "Menyenangkan atau mengasyikkan.",
    example: "It's nice to meet you!",
    exampleTranslation: "Senang bertemu denganmu!"
  },
  {
    id: 16,
    word: "Beautiful",
    pronunciation: "/ˈbjuː.tɪ.fəl/",
    partOfSpeech: "Adjective",
    meaning: "Very attractive or pleasing.",
    indonesian: "Sangat menarik atau menyenangkan.",
    example: "This place is beautiful!",
    exampleTranslation: "Tempat ini sangat indah!"
  },
  {
    id: 17,
    word: "Big",
    pronunciation: "/bɪɡ/",
    partOfSpeech: "Adjective",
    meaning: "Large in size.",
    indonesian: "Besar ukurannya.",
    example: "That's a big house!",
    exampleTranslation: "Itu rumah yang besar!"
  },
  {
    id: 18,
    word: "Small",
    pronunciation: "/smɔːl/",
    partOfSpeech: "Adjective",
    meaning: "Little in size.",
    indonesian: "Kecil ukurannya.",
    example: "I have a small pet.",
    exampleTranslation: "Aku punya hewan peliharaan kecil."
  },
  {
    id: 19,
    word: "Eat",
    pronunciation: "/iːt/",
    partOfSpeech: "Verb",
    meaning: "To put food in your mouth.",
    indonesian: "Memasukkan makanan ke mulut.",
    example: "I want to eat pizza.",
    exampleTranslation: "Aku ingin makan pizza."
  },
  {
    id: 20,
    word: "Drink",
    pronunciation: "/drɪŋk/",
    partOfSpeech: "Verb",
    meaning: "To swallow liquid.",
    indonesian: "Menelan cairan.",
    example: "Please drink some water.",
    exampleTranslation: "Tolong minum air."
  },
  {
    id: 21,
    word: "Home",
    pronunciation: "/həʊm/",
    partOfSpeech: "Noun",
    meaning: "The place where you live.",
    indonesian: "Tempat di mana kamu tinggal.",
    example: "I'm going home now.",
    exampleTranslation: "Aku pulang sekarang."
  },
  {
    id: 22,
    word: "School",
    pronunciation: "/skuːl/",
    partOfSpeech: "Noun",
    meaning: "A place where people learn.",
    indonesian: "Tempat di mana orang belajar.",
    example: "I go to school every day.",
    exampleTranslation: "Aku pergi ke sekolah setiap hari."
  },
  {
    id: 23,
    word: "Family",
    pronunciation: "/ˈfæm.əl.i/",
    partOfSpeech: "Noun",
    meaning: "A group of related people.",
    indonesian: "Kelompok orang yang memiliki hubungan.",
    example: "I love my family.",
    exampleTranslation: "Aku menyayangi keluargaku."
  },
  {
    id: 24,
    word: "Time",
    pronunciation: "/taɪm/",
    partOfSpeech: "Noun",
    meaning: "The measured duration of events.",
    indonesian: "Durasi kejadian yang diukur.",
    example: "What time is it?",
    exampleTranslation: "Jam berapa sekarang?"
  },
  {
    id: 25,
    word: "Good",
    pronunciation: "/ɡʊd/",
    partOfSpeech: "Adjective",
    meaning: "Of high quality or standard.",
    indonesian: "Kualitas atau standar tinggi.",
    example: "You did a good job!",
    exampleTranslation: "Kamu melakukan pekerjaan dengan baik!"
  },
  {
    id: 26,
    word: "Bad",
    pronunciation: "/bæd/",
    partOfSpeech: "Adjective",
    meaning: "Of low quality or not good.",
    indonesian: "Kualitas rendah atau tidak baik.",
    example: "That was a bad idea.",
    exampleTranslation: "Itu ide yang buruk."
  },
  {
    id: 27,
    word: "New",
    pronunciation: "/njuː/",
    partOfSpeech: "Adjective",
    meaning: "Recently made or discovered.",
    indonesian: "Baru dibuat atau ditemukan.",
    example: "I got a new game!",
    exampleTranslation: "Aku dapat game baru!"
  },
  {
    id: 28,
    word: "Old",
    pronunciation: "/əʊld/",
    partOfSpeech: "Adjective",
    meaning: "Having existed for a long time.",
    indonesian: "Sudah ada sejak lama.",
    example: "This is an old photo.",
    exampleTranslation: "Ini foto lama."
  },
  {
    id: 29,
    word: "Fast",
    pronunciation: "/fɑːst/",
    partOfSpeech: "Adjective",
    meaning: "Moving or happening quickly.",
    indonesian: "Bergerak atau terjadi dengan cepat.",
    example: "You're so fast!",
    exampleTranslation: "Kamu sangat cepat!"
  },
  {
    id: 30,
    word: "Slow",
    pronunciation: "/sləʊ/",
    partOfSpeech: "Adjective",
    meaning: "Moving or happening not quickly.",
    indonesian: "Bergerak atau terjadi tidak cepat.",
    example: "This computer is slow.",
    exampleTranslation: "Komputer ini lambat."
  },
  {
    id: 31,
    word: "Easy",
    pronunciation: "/ˈiː.zi/",
    partOfSpeech: "Adjective",
    meaning: "Not difficult.",
    indonesian: "Tidak sulit.",
    example: "This level is easy!",
    exampleTranslation: "Level ini mudah!"
  },
  {
    id: 32,
    word: "Hard",
    pronunciation: "/hɑːd/",
    partOfSpeech: "Adjective",
    meaning: "Difficult to do.",
    indonesian: "Sulit dilakukan.",
    example: "This puzzle is hard.",
    exampleTranslation: "Teka-teki ini sulit."
  },
  {
    id: 33,
    word: "Start",
    pronunciation: "/stɑːt/",
    partOfSpeech: "Verb",
    meaning: "To begin something.",
    indonesian: "Memulai sesuatu.",
    example: "Let's start the game!",
    exampleTranslation: "Ayo mulai permainannya!"
  },
  {
    id: 34,
    word: "Stop",
    pronunciation: "/stɒp/",
    partOfSpeech: "Verb",
    meaning: "To finish moving or doing.",
    indonesian: "Selesai bergerak atau melakukan.",
    example: "Please stop running.",
    exampleTranslation: "Tolong berhenti berlari."
  },
  {
    id: 35,
    word: "Wait",
    pronunciation: "/weɪt/",
    partOfSpeech: "Verb",
    meaning: "To stay in place until something happens.",
    indonesian: "Tetap di tempat sampai sesuatu terjadi.",
    example: "Please wait a moment.",
    exampleTranslation: "Tolong tunggu sebentar."
  },
  {
    id: 36,
    word: "Go",
    pronunciation: "/ɡəʊ/",
    partOfSpeech: "Verb",
    meaning: "To move or travel.",
    indonesian: "Bergerak atau bepergian.",
    example: "Let's go to the park.",
    exampleTranslation: "Ayo pergi ke taman."
  },
  {
    id: 37,
    word: "Come",
    pronunciation: "/kʌm/",
    partOfSpeech: "Verb",
    meaning: "To move toward a place.",
    indonesian: "Bergerak menuju suatu tempat.",
    example: "Come here, please.",
    exampleTranslation: "Kemarilah, tolong."
  },
  {
    id: 38,
    word: "See",
    pronunciation: "/siː/",
    partOfSpeech: "Verb",
    meaning: "To perceive with eyes.",
    indonesian: "Merasa dengan mata.",
    example: "I can see you!",
    exampleTranslation: "Aku bisa melihatmu!"
  },
  {
    id: 39,
    word: "Hear",
    pronunciation: "/hɪə/",
    partOfSpeech: "Verb",
    meaning: "To perceive with ears.",
    indonesian: "Merasa dengan telinga.",
    example: "Can you hear me?",
    exampleTranslation: "Bisakah kamu mendengarku?"
  },
  {
    id: 40,
    word: "Speak",
    pronunciation: "/spiːk/",
    partOfSpeech: "Verb",
    meaning: "To say words.",
    indonesian: "Mengucapkan kata-kata.",
    example: "I can speak English.",
    exampleTranslation: "Aku bisa berbicara bahasa Inggris."
  },
  {
    id: 41,
    word: "Understand",
    pronunciation: "/ˌʌn.dəˈstænd/",
    partOfSpeech: "Verb",
    meaning: "To know the meaning of something.",
    indonesian: "Mengetahui arti dari sesuatu.",
    example: "I understand now.",
    exampleTranslation: "Aku mengerti sekarang."
  },
  {
    id: 42,
    word: "Like",
    pronunciation: "/laɪk/",
    partOfSpeech: "Verb",
    meaning: "To enjoy or approve of something.",
    indonesian: "Menikmati atau menyetujui sesuatu.",
    example: "I like this song.",
    exampleTranslation: "Aku suka lagu ini."
  },
  {
    id: 43,
    word: "Want",
    pronunciation: "/wɒnt/",
    partOfSpeech: "Verb",
    meaning: "To desire something.",
    indonesian: "Menginginkan sesuatu.",
    example: "I want to play more.",
    exampleTranslation: "Aku ingin bermain lagi."
  },
  {
    id: 44,
    word: "Need",
    pronunciation: "/niːd/",
    partOfSpeech: "Verb",
    meaning: "To require something.",
    indonesian: "Membutuhkan sesuatu.",
    example: "I need some help.",
    exampleTranslation: "Aku butuh bantuan."
  },
  {
    id: 45,
    word: "Know",
    pronunciation: "/nəʊ/",
    partOfSpeech: "Verb",
    meaning: "To have information about something.",
    indonesian: "Memiliki informasi tentang sesuatu.",
    example: "Do you know the answer?",
    exampleTranslation: "Apakah kamu tahu jawabannya?"
  },
  {
    id: 46,
    word: "Think",
    pronunciation: "/θɪŋk/",
    partOfSpeech: "Verb",
    meaning: "To use your mind to consider.",
    indonesian: "Menggunakan pikiran untuk mempertimbangkan.",
    example: "I think this is correct.",
    exampleTranslation: "Aku pikir ini benar."
  },
  {
    id: 47,
    word: "Yes",
    pronunciation: "/jes/",
    partOfSpeech: "Adverb",
    meaning: "Used to give a positive answer.",
    indonesian: "Digunakan untuk memberi jawaban positif.",
    example: "Yes, I can do it!",
    exampleTranslation: "Ya, aku bisa melakukannya!"
  },
  {
    id: 48,
    word: "No",
    pronunciation: "/nəʊ/",
    partOfSpeech: "Adverb",
    meaning: "Used to give a negative answer.",
    indonesian: "Digunakan untuk memberi jawaban negatif.",
    example: "No, thank you.",
    exampleTranslation: "Tidak, terima kasih."
  },
  {
    id: 49,
    word: "Maybe",
    pronunciation: "/ˈmeɪ.bi/",
    partOfSpeech: "Adverb",
    meaning: "Perhaps; possibly.",
    indonesian: "Mungkin; barangkali.",
    example: "Maybe we can play later.",
    exampleTranslation: "Mungkin kita bisa main nanti."
  },
  {
    id: 50,
    word: "Always",
    pronunciation: "/ˈɔːl.weɪz/",
    partOfSpeech: "Adverb",
    meaning: "At all times.",
    indonesian: "Setiap saat.",
    example: "I always play after school.",
    exampleTranslation: "Aku selalu bermain setelah sekolah."
  },
  {
    id: 51,
    word: "Never",
    pronunciation: "/ˈnev.ə/",
    partOfSpeech: "Adverb",
    meaning: "At no time.",
    indonesian: "Tidak pernah.",
    example: "I never give up!",
    exampleTranslation: "Aku tidak pernah menyerah!"
  },
  {
    id: 52,
    word: "Today",
    pronunciation: "/təˈdeɪ/",
    partOfSpeech: "Adverb",
    meaning: "On this day.",
    indonesian: "Pada hari ini.",
    example: "Today is a great day!",
    exampleTranslation: "Hari ini hari yang bagus!"
  },
  {
    id: 53,
    word: "Tomorrow",
    pronunciation: "/təˈmɒr.əʊ/",
    partOfSpeech: "Adverb",
    meaning: "The day after today.",
    indonesian: "Hari setelah hari ini.",
    example: "See you tomorrow!",
    exampleTranslation: "Sampai jumpa besok!"
  },
  {
    id: 54,
    word: "Yesterday",
    pronunciation: "/ˈjes.tə.deɪ/",
    partOfSpeech: "Adverb",
    meaning: "The day before today.",
    indonesian: "Hari sebelum hari ini.",
    example: "I played games yesterday.",
    exampleTranslation: "Aku bermain game kemarin."
  },
  {
    id: 55,
    word: "Watch",
    pronunciation: "/wɒtʃ/",
    partOfSpeech: "Verb",
    meaning: "To look at something for a time.",
    indonesian: "Melihat sesuatu untuk sementara waktu.",
    example: "Let's watch a movie.",
    exampleTranslation: "Ayo nonton film."
  },
  {
    id: 56,
    word: "Listen",
    pronunciation: "/ˈlɪs.ən/",
    partOfSpeech: "Verb",
    meaning: "To give attention to sound.",
    indonesian: "Memperhatikan suara.",
    example: "Listen to this song!",
    exampleTranslation: "Dengarkan lagu ini!"
  },
  {
    id: 57,
    word: "Read",
    pronunciation: "/riːd/",
    partOfSpeech: "Verb",
    meaning: "To look at and understand written words.",
    indonesian: "Melihat dan memahami kata-kata tertulis.",
    example: "I like to read books.",
    exampleTranslation: "Aku suka membaca buku."
  },
  {
    id: 58,
    word: "Write",
    pronunciation: "/raɪt/",
    partOfSpeech: "Verb",
    meaning: "To mark letters or words on a surface.",
    indonesian: "Menandai huruf atau kata pada permukaan.",
    example: "Can you write your name?",
    exampleTranslation: "Bisakah kamu menulis namamu?"
  },
  {
    id: 59,
    word: "Together",
    pronunciation: "/təˈɡeð.ə/",
    partOfSpeech: "Adverb",
    meaning: "With each other.",
    indonesian: "Dengan satu sama lain.",
    example: "Let's do this together!",
    exampleTranslation: "Ayo lakukan ini bersama!"
  },
  {
    id: 60,
    word: "Smile",
    pronunciation: "/smaɪl/",
    partOfSpeech: "Verb",
    meaning: "To make a happy expression with your mouth.",
    indonesian: "Membuat ekspresi bahagia dengan mulutmu.",
    example: "Your smile is beautiful!",
    exampleTranslation: "Senyummu indah!"
  }
];
