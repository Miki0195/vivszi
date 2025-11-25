'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const slides = [
    {
      id: 0,
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-full gap-6 md:gap-8 px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-6xl md:text-8xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👋
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Szia! ✨
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/80 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Van számodra egy szokatlan kérdésem...
          </motion.p>
        </motion.div>
      ),
    },
    {
      id: 1,
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-full gap-4 md:gap-6 px-4 md:px-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            Buchsbaum Miklós vagyok 👨‍💼
          </motion.h2>
          <motion.div
            className="text-2xl md:text-3xl text-white/90 space-y-3 md:space-y-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📅 22 éves
            </motion.p>
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            >
              📏 184 cm
            </motion.p>
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
            >
              💪 88 kg
            </motion.p>
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, delay: 0.9, repeat: Infinity }}
            >
              🎓 Mesterszakos ELTE-s diák
            </motion.p>
          </motion.div>
        </motion.div>
      ),
    },
    {
      id: 2,
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-full gap-6 md:gap-8 px-4 md:px-8"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-5xl md:text-7xl mb-2 md:mb-4"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💭
          </motion.div>
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white text-center max-w-4xl leading-relaxed px-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Nagyon szimpatikus vagy és úgy gondolom<br className="hidden md:block" />
            megtalálnánk a közös hangot 🎵
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-white/70 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            (Na mindegy, ez a sablon szöveg...)
          </motion.p>
        </motion.div>
      ),
    },
    {
      id: 3,
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-full gap-6 md:gap-8 px-4 md:px-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div
            className="text-7xl md:text-9xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ❤️
          </motion.div>
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white text-center px-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Mivel ebből úgysem fogsz megismerni és rendes véleményt alkotni rólam..
          </motion.h2>
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-300 via-rose-300 to-red-300 bg-clip-text text-transparent px-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 150 }}
            style={{ 
              textShadow: '0 0 30px rgba(255, 192, 203, 0.5)'
            }}
          >
            Szeretnélek meghívni randizni! 🌹
          </motion.h1>
        </motion.div>
      ),
    },
    {
      id: 4,
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-full gap-3 md:gap-4 px-2 md:px-8 py-4 md:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white text-center mb-1 md:mb-2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Itt van pár kép rólam 📸
          </motion.h2>
          
          {/* First row - 3 images */}
          <motion.div 
            className="flex gap-2 md:gap-4 justify-center items-center w-full max-w-5xl mb-1 md:mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {['IMG_0337.jpg', 'IMG_0405.jpg', 'IMG_0528.jpg'].map((filename, index) => (
              <motion.div
                key={filename}
                className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-lg md:rounded-xl border-2 md:border-4 border-rose-200/40 overflow-hidden shadow-2xl">
                  <img 
                    src={`/image/${filename}`} 
                    alt={`Kép ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second row - 3 images */}
          <motion.div 
            className="flex gap-2 md:gap-4 justify-center items-center w-full max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {['IMG_0777.jpg', 'IMG_1299.jpg', 'IMG_1300.jpg'].map((filename, index) => (
              <motion.div
                key={filename}
                className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-lg md:rounded-xl border-2 md:border-4 border-rose-200/40 overflow-hidden shadow-2xl">
                  <img 
                    src={`/image/${filename}`} 
                    alt={`Kép ${index + 4}`}
                    className="w-full h-full object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, [index + 3]: true }))}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },
    {
      id: 5,
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-full gap-6 md:gap-8 px-4 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-5xl md:text-7xl mb-2 md:mb-4"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            😊
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center max-w-3xl px-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Nyugi, nem vagyok 🙅‍♂️
          </motion.h2>
          <motion.div
            className="text-2xl md:text-3xl text-white/90 space-y-3 md:space-y-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              ❌ Pszichopata
            </motion.p>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              ❌ Szatír
            </motion.p>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              ❌ Perverz
            </motion.p>
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-green-300 font-bold mt-4 md:mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
          >
            ✅ Csak egy rendes srác! 
          </motion.p>
        </motion.div>
      ),
    },
    {
      id: 6,
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-full gap-8 md:gap-12 px-4 md:px-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-7xl md:text-9xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💌
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white text-center max-w-4xl leading-relaxed px-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ha felkeltettem az érdeklődésed,
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 via-rose-300 to-red-300 bg-clip-text text-transparent text-center px-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 150 }}
            style={{ 
              textShadow: '0 0 30px rgba(255, 192, 203, 0.5)'
            }}
          >
            Várom a visszajelzésed! ✨
          </motion.h1>
          <motion.div
            className="text-5xl md:text-7xl mt-4 md:mt-8"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🌟
          </motion.div>
        </motion.div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const startExperience = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log('Audio play failed:', err);
      });
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slides.length]);

  return (
    <main className="relative w-full h-full min-h-screen overflow-hidden bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 touch-none">
      {/* Start Screen Overlay */}
      {!hasStarted && (
        <motion.div
          className="absolute inset-0 z-[100] bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 flex items-center justify-center cursor-pointer"
          onClick={startExperience}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center px-4">
            <motion.div
              className="text-7xl md:text-9xl mb-6 md:mb-8"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💕
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Kattints a kezdéshez
            </motion.h1>
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
               Hanggal nézd meg!
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/80"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✨ Kattints bárhova ✨
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Animated background particles - stars and hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const randomX1 = Math.random() * 100;
          const randomY1 = Math.random() * 100;
          const randomX2 = Math.random() * 100;
          const randomY2 = Math.random() * 100;
          const randomX3 = Math.random() * 100;
          const randomY3 = Math.random() * 100;
          const isHeart = i % 4 === 0;
          
          return (
            <motion.div
              key={i}
              className={`absolute ${isHeart ? 'text-2xl' : 'w-2 h-2 bg-white rounded-full'} opacity-20`}
              initial={{
                x: `${randomX1}vw`,
                y: `${randomY1}vh`,
              }}
              animate={{
                y: [`${randomY2}vh`, `${randomY3}vh`],
                x: [`${randomX2}vw`, `${randomX3}vw`],
                rotate: isHeart ? [0, 360] : 0,
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {isHeart && '💕'}
            </motion.div>
          );
        })}
      </div>

      {/* Audio element */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {slides[currentSlide].content}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-4 md:bottom-12 left-0 right-0 flex justify-center items-center gap-3 md:gap-8 z-40 px-2">
        <motion.button
          onClick={prevSlide}
          className="bg-white/20 backdrop-blur-md text-white px-4 py-2 md:px-8 md:py-4 rounded-full text-lg md:text-2xl font-bold hover:bg-white/30 transition-all disabled:opacity-30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ← <span className="hidden sm:inline">Előző</span>
        </motion.button>

        <div className="flex gap-2 md:gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8 md:w-12'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-md text-white px-4 py-2 md:px-8 md:py-4 rounded-full text-lg md:text-2xl font-bold hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="hidden sm:inline">Következő</span> →
        </motion.button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 text-white/60 text-base md:text-xl">
        {currentSlide + 1} / {slides.length}
      </div>
    </main>
  );
}

