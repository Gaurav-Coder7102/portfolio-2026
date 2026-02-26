import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { About as AboutSection } from "../../sections";
import { CONTACT_LINK, PROJECTS_LINK } from "../../config/config";
import { 
  FaProjectDiagram, 
  FaDatabase, 
  FaBriefcase, 
  FaBrain, 
  FaTrophy, 
  FaEnvelope, 
  FaArrowRight 
} from "react-icons/fa";

const sectionCards = [
  {
    title: "Banking Projects",
    description: "Enterprise-level Core Banking applications built using Spring Boot, REST APIs, and secure architecture design.",
    icon: <FaProjectDiagram className="text-3xl text-blue-500" />,
    link: "/projects",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700"
  },
  {
    title: "Technical Expertise",
    description: "Strong expertise in Java, Spring Boot, PL/SQL, RESTful APIs, Hibernate, and secure backend system development.",
    icon: <FaDatabase className="text-3xl text-green-500" />,
    link: "/skills",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-700"
  },
  {
    title: "Professional Experience",
    description: "Software Engineer at Netwin Systems & Software working on Core Banking Solutions and enterprise integrations.",
    icon: <FaBriefcase className="text-3xl text-purple-500" />,
    link: "/experience",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-700"
  },
  {
    title: "AI & Biometric Systems",
    description: "Integrated FaceAPI.js and machine learning models for secure biometric authentication in banking systems.",
    icon: <FaBrain className="text-3xl text-orange-500" />,
    link: "/ai-projects",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-700"
  },
  {
    title: "Achievements",
    description: "5-Star HackerRank rating and 2nd place in ISTE National Quiz showcasing strong analytical skills.",
    icon: <FaTrophy className="text-3xl text-indigo-500" />,
    link: "/achievements",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-700"
  },
  {
    title: "Let's Connect",
    description: "Interested in building secure and scalable systems? Let’s collaborate and create impactful solutions.",
    icon: <FaEnvelope className="text-3xl text-pink-500" />,
    link: "/contact",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-700"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* Main About Section */}
      <AboutSection />

      {/* Enhanced Navigation Section */}
      <section className="px-6 sm:px-12 py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Explore My Professional Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From Core Banking development to AI-powered biometric authentication, 
              discover the technologies and experience that define my work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={card.link}
                  className={`block h-full p-6 rounded-2xl border-2 ${card.borderColor} ${card.bgColor} hover:shadow-xl transition-all duration-200`}
                >
                  <div className="flex flex-col h-full">

                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} bg-opacity-10 mr-4`}>
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300">
                      <span className="mr-2">Learn More</span>
                      <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 sm:px-12 py-16 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to Build Secure Banking Systems?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I specialize in scalable backend systems, secure architecture, and AI-based authentication.
            Let’s collaborate on your next big idea.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={CONTACT_LINK}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get In Touch
            </Link>

            <Link
              to={PROJECTS_LINK}
              className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
