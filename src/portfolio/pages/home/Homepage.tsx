import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-emerald-50 to-gray-50 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-900">

    <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      {/* Left: Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-emerald-400/50 shadow-2xl">
          <img
            src="/assets/home/GauravKadam.jpeg"
            alt="Gaurav Kadam"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            Software Engineer
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Core Banking Specialist | Spring Boot | PL/SQL | AI-Based Biometric Authentication
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Building secure, scalable and intelligent banking applications with enterprise-grade architecture.
        </p>

        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          <motion.button
            onClick={() => window.location.href = "/contact"}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-semibold shadow-lg"
          >
            Let's Connect
          </motion.button>

          <a
            href="/assets/resume/GauravKadam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg"
            >
              Download Resume
            </motion.button>
          </a>
        </div>
      </motion.div>
    </div>
  </div>
);

const Homepage = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">

      <Hero />

      {/* Experience Section */}
      <section className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Professional Experience
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-xl text-left">
            <h3 className="text-2xl font-semibold text-emerald-600">
              Software Engineer – Netwin Systems & Software
            </h3>
            <p className="mt-6 text-gray-700 dark:text-gray-300 space-y-3">
              • Developed enterprise-grade Core Banking applications using Spring Boot and REST APIs <br />
              • Designed and optimized complex PL/SQL procedures for banking integrations <br />
              • Integrated FaceAPI.js for biometric authentication <br />
              • Implemented ML models for face detection and identity verification <br />
              • Worked in secure architecture design for banking domain systems
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Java (Core & Advanced)",
              "Spring Boot",
              "RESTful APIs",
              "PL/SQL",
              "Hibernate",
              "FaceAPI.js",
              "Machine Learning Integration",
              "HTML5 / CSS / JavaScript",
              "Secure Banking Architecture"
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-slate-800 p-6 rounded-2xl shadow-lg font-semibold text-gray-800 dark:text-white"
              >
                {skill}
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white">
            Key Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
                HackerRank 5-Star Rating
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Achieved 5-Star rating in problem-solving and algorithms, demonstrating strong programming fundamentals.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
                ISTE National Quiz – 2nd Place
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Secured 2nd place in a national-level technical quiz competition, showcasing analytical and technical excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Secure & Intelligent Banking Systems?
          </h3>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-semibold text-lg shadow-xl"
          >
            Get In Touch
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
