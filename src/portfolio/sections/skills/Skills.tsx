import { motion } from "framer-motion";
import { UseSkills } from "../../hooks/portfolio.hook";
import { Loader } from "../../components";
import { fadeInUp, simpleHover, MOTION_CONFIG } from "../../utils/motionConfig";

const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05, // Reduced delay
            duration: MOTION_CONFIG.duration.fast,
        },
    }),
};
const Skills = () => {
    //const { data: skills, isLoading, isError } = UseSkills();
   const skills = [
  {
    category: "Backend Development",
    items: [
      {
        name: "Java (Core & Advanced)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "RESTful APIs",
        icon: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
      },
      {
        name: "Hibernate",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg",
      }
    ],
  },
  {
    category: "Database & Integration",
    items: [
      {
        name: "PL/SQL",
        icon: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
      },
      {
        name: "Oracle Database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      {
        name: "Stored Procedures",
        icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
      },
      {
        name: "Database Optimization",
        icon: "https://cdn-icons-png.flaticon.com/512/2881/2881142.png",
      }
    ],
  },
  {
    category: "AI & Biometric Systems",
    items: [
      {
        name: "FaceAPI.js",
        icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
      {
        name: "Machine Learning Integration",
        icon: "https://cdn-icons-png.flaticon.com/512/4149/4149659.png",
      },
      {
        name: "Facial Recognition",
        icon: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
      }
    ],
  },
  {
    category: "Web Technologies",
    items: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript (ES6+)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      }
    ],
  }
];



    return (
        <section
            id="skills"
            className="py-24 sm:px-12 px-6 bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white"
                >
                    My Tech Arsenal
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-center text-gray-600 dark:text-gray-400 mb-16"
                >
                    The tools and technologies I use to bring ideas to life.
                </motion.p>

                {skills.map((skillCategory, i) => (
                    <motion.div
                        key={skillCategory.category}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mb-12"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left">
                            {skillCategory.category}
                        </h3>
                        <div className="flex flex-wrap justify-start gap-6 md:ml-45">
                            {skillCategory.items.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={simpleHover}
                                    className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 w-32 text-center border border-gray-200 dark:border-gray-600"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 object-contain"
                                            loading="lazy"
                                        />
                                    </div>

                                    <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
