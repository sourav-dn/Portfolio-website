import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <motion.h2
            className="text-4xl font-extrabold uppercase text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="relative z-10">
                About <span className="text-purple-400">Me</span>
              </span>
              {/* Refined subtle neon underline for the heading */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full blur-sm opacity-75"></span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-28 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"></span>
            </h2>
          </motion.h2>
          <motion.p
            className="mt-4 text-xl font-medium text-purple-600 dark:text-purple-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            A Passionate Front-End Developer
          </motion.p>
        </div>

        {/* About Me Glass Card */}
        <div
          className="max-w-5xl mx-auto bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/40 dark:border-gray-700/40 
          shadow-lg rounded-lg p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl 
          dark:hover:shadow-purple-500/30 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {/* Glass background effect elements (subtle gradients) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-purple-500/10 dark:to-transparent opacity-60 rounded-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent dark:from-purple-500/5 dark:to-transparent opacity-60 rounded-lg"></div>

          <motion.div
            className="text-lg text-gray-800 dark:text-gray-200 space-y-6 relative z-10" // z-10 to ensure text is above gradients
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="leading-relaxed"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi! I'm Sourav, a CSE graduate from Northern University Bangladesh
              and a passionate Front-End Developer. I specialize in{" "}
              <strong>React</strong>, <strong>JavaScript</strong>, frameworks,
              and <strong>Tailwind CSS</strong>. I love building responsive,
              user-friendly interfaces. My programming journey began with
              curiosity, and now it's my career. I enjoy solving problems and
              turning ideas into beautiful websites.
            </motion.p>

            <motion.p
              className="leading-relaxed"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              I love working on projects that challenge my creativity and
              technical skills. Whether it's a personal project or a team
              collaboration, I’m excited about building things that make an
              impact.
            </motion.p>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            className="hobbies space-y-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="leading-relaxed py-4 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Outside of coding, I love playing football and painting. These
              activities keep me active and creative, which helps me stay
              inspired in my work.
            </motion.p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-lg text-purple-600 dark:text-purple-300 mb-6">
            Let’s connect! Feel free to reach out if you’d like to collaborate.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-lg text-white bg-indigo-600 shadow-xl hover:bg-indigo-700 hover:shadow-2xl 
            transform transition-all duration-300 dark:bg-purple-700 dark:hover:bg-purple-800 dark:shadow-purple-500/50 
            dark:hover:shadow-purple-600/60"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
