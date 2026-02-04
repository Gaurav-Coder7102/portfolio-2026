import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";



// Mock Hero component with photo
const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-emerald-50 to-gray-50 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-900">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMiAyLTQgNC00czQgMiA0IDQtMiA0LTQgNGgtNHYtNHptMCA0aDR2NGgtNHYtNHptMCA4aDR2NGgtNHYtNHptMCA4aDR2NGgtNHYtNHptLTggMGg0djRoLTR2LTR6bS04IDBoNHY0aC00di00em0tOCAwaDR2NGgtNHYtNHptLTggMGg0djRoLTR2LTR6bTAgOGg0djRoLTR2LTR6bTAgOGg0djRoLTR2LTR6bTggMGg0djRoLTR2LTR6bTggMGg0djRoLTR2LTR6bTggMGg0djRoLTR2LTR6bTgtOGg0djRoLTR2LTR6bTAtOGg0djRoLTR2LTR6bTAtOGg0djRoLTR2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 dark:opacity-10"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative">
          {/* Glowing ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 blur-2xl opacity-40 dark:opacity-60"
          />

          {/* Photo container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-emerald-400/50 dark:border-emerald-400/30 shadow-2xl shadow-emerald-500/30 dark:shadow-emerald-500/50"
          >
            {/* Replace this div with your actual image */}
            <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-400 dark:from-emerald-600 dark:to-teal-600 flex items-center justify-center">
              <img src="/assets/home/GauravKadam.jpeg" alt="Your Name" className="w-full h-full object-cover" />
            </div>
            {/* Uncomment and use your actual photo: */}
          </motion.div>
        </div>
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center md:text-left"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/50 dark:border-emerald-400/30 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium">
            Welcome to my digital space
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400">
            Full-Stack Engineer
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Crafting exceptional digital experiences with modern web technologies
        </p>

        <motion.button
          onClick={() => window.location.href = "/contact"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-semibold shadow-lg"
        >
          Let's Connect
        </motion.button>
        <a
          href="public\assets\resume\Gaurav Kadam Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-semibold shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/50 dark:hover:shadow-emerald-500/60 transition-all duration-300"
          >
            Download Resume
          </motion.button>
        </a>


      </motion.div>
    </div>

    {/* Floating orbs */}
    <motion.div
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-20 left-10 w-64 h-64 bg-emerald-400 dark:bg-emerald-500 rounded-full blur-3xl opacity-20 dark:opacity-30"
    />
    <motion.div
      animate={{
        y: [0, 20, 0],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400 dark:bg-teal-500 rounded-full blur-3xl opacity-20 dark:opacity-30"
    />
  </div>
);

const FaProjectDiagram = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
  </svg>
);

const FaBlog = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" />
    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
  </svg>
);

const cards = [
  {
    title: "My Work",
    description: "Explore a collection of my projects, showcasing my skills in creating modern, scalable web applications.",
    icon: <FaProjectDiagram />,
    gradient: "from-emerald-500 to-teal-500",
    cta: "View Projects",
    path: "/projects"
  },
  {
    title: "My Blog",
    description: "I write about web development, system design, and the latest technologies I'm excited about.",
    icon: <FaBlog />,
    gradient: "from-teal-500 to-cyan-500",
    cta: "Read Blog",
    path: "/blog"
  },
];

const Homepage = () => {
  
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Hero />

      {/* Mission Statement with Glassmorphism */}
      <section className="relative py-24 px-6 sm:px-12 overflow-hidden bg-gray-50 dark:bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-emerald-50 to-gray-50 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-12 shadow-2xl">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400"
            >
              Building Intelligent Solutions
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a full-stack engineer with expertise in <span className="text-emerald-600 dark:text-emerald-400 font-semibold">React</span>, <span className="text-teal-600 dark:text-teal-400 font-semibold">NestJS</span>, <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Django</span>, and system design.
              My mission? <span className="text-gray-900 dark:text-white font-bold italic">Craft digital products that users love — fast, scalable, and future-ready.</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Project Cards with 3D Effects */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Explore My <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">Universe</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-500">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${card.gradient} blur-xl -z-10`}></div>

                  <div className="relative p-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mb-6`}
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${card.gradient} rounded-2xl p-3 shadow-lg`}>
                        <div className="text-white w-full h-full">
                          {card.icon}
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400 transition-all duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                      {card.description}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(card.path)}
                      className={`relative px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${card.gradient} shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group/button`}
                    >
                      <span className="relative z-10">{card.cta}</span>
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scale: 0, opacity: 0.3 }}
                        whileHover={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Let's collaborate and bring your ideas to life
          </p>
          <motion.button
            onClick={() => window.location.href = "/contact"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-semibold text-lg shadow-xl shadow-emerald-500/30 dark:shadow-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/50 dark:hover:shadow-emerald-500/60 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;