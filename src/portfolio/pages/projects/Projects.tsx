import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Projects as ProjectSection } from "../../sections";
import { SKILLS_LINK, BLOG_LINK, CONTACT_LINK } from "../../config/config";
import { 
  FaTools, 
  FaEnvelope, 
  FaArrowRight, 
  FaUniversity, 
  FaBrain, 
  FaDatabase 
} from "react-icons/fa";

const featuredHighlights = [
  {
    title: "Core Banking Applications",
    description:
      "Designed and developed enterprise-grade banking systems using Spring Boot and REST APIs with secure and scalable architecture.",
    icon: <FaUniversity className="text-3xl text-emerald-600" />,
  },
  {
    title: "AI-Based Biometric Authentication",
    description:
      "Integrated FaceAPI.js and Machine Learning models for facial recognition and identity verification in banking systems.",
    icon: <FaBrain className="text-3xl text-orange-500" />,
  },
  {
    title: "Database & PL/SQL Optimization",
    description:
      "Designed complex PL/SQL procedures and optimized database operations for secure banking integrations.",
    icon: <FaDatabase className="text-3xl text-blue-500" />,
  },
];

const quickLinks = [
  {
    title: "Explore My Technical Stack",
    description:
      "Discover the technologies powering these systems — Spring Boot, PL/SQL, REST APIs, AI models, and more.",
    icon: <FaTools className="text-2xl text-green-500" />,
    link: SKILLS_LINK,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Let's Collaborate",
    description:
      "Interested in building secure and scalable backend systems? Let's discuss your project.",
    icon: <FaEnvelope className="text-2xl text-blue-500" />,
    link: CONTACT_LINK,
    color: "from-blue-500 to-cyan-500",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* Projects List Section */}
      <ProjectSection />

      {/* Featured Expertise Section */}
      <section className="px-6 sm:px-12 py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Enterprise Engineering Highlights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My work focuses on secure banking systems, AI-driven authentication,
              and high-performance backend architectures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gray-100 dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="px-6 sm:px-12 py-20 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              What's Next?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore my technical expertise or reach out to collaborate on enterprise solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickLinks.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 transition-colors"
                >
                  <span>Explore</span>
                  <FaArrowRight className="transition-transform hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Projects;
