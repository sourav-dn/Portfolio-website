import { motion } from "framer-motion";

// Importing icons from React Icons
import { FaReact, FaHtml5, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { SiCplusplus, SiC } from "react-icons/si"; // Icons for C and C++

const Skills = () => {
  const frontendSkills = [
    { icon: <FaHtml5 />, color: "#E44D26" },
    { icon: <RiTailwindCssFill />, color: "#38BDF8" },
    { icon: <FaJsSquare />, color: "#F7DF1E" },
    { icon: <FaReact />, color: "#61DBFB" },
  ];

  const toolsSkills = [
    { icon: <FaGitAlt />, color: "#F05032" },
    { icon: <DiNodejs />, color: "#68A063" },
    { icon: <DiMongodb />, color: "#4DB33D" },
  ];

  

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-purple-950 to-[#1a1124] text-white relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          data-aos="fade-up" data-aos-duration="2000"
        >
          <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="relative z-10">
            My <span className="text-purple-400">Skill</span>
          </span>
          {/* Refined subtle neon underline for the heading */}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full blur-sm opacity-75"></span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-28 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"></span>
        </h2>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-12" data-aos="fade-up" data-aos-duration="2000">
          {/* Frontend Skills */}
          <div className="w-full md:w-1/3">
            <motion.h3
              className="text-2xl font-semibold text-purple-100 mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Frontend Skills
            </motion.h3>
            <div className="flex justify-center gap-8" data-aos="fade-up" data-aos-duration="2000">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  className="text-center"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <div
                    className="text-6xl mb-4"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools Skills */}
          <div className="w-full md:w-1/3" data-aos="fade-up" data-aos-duration="2000">
            <motion.h3
              className="text-2xl font-semibold text-purple-100 mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Tools & Backend
            </motion.h3>
            <div className="flex justify-center gap-8">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  className="text-center"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <div
                    className="text-6xl mb-4"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
