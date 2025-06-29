import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-[#1a0e2a]">
      <div
        className="max-w-screen-xl mx-auto px-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <motion.h2
          className="text-4xl font-semibold text-center text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="relative z-10">
              Educational <span className="text-purple-400">Qualification</span>
            </span>
            {/* Refined subtle neon underline for the heading */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full blur-sm opacity-75"></span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-28 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"></span>
          </h2>
        </motion.h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {/* BSC Card */}
          <motion.div
            className="bg-[#1f084e] p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              BSC in CSE
            </h3>
            <p className="text-lg text-gray-200">
              <strong>Institution:</strong> Northern University Bangladesh
            </p>
            <p className="text-lg text-gray-200">
              <strong>Year of Graduation:</strong> 2022
            </p>
            <p className="text-lg text-gray-200">
              <strong>CGPA:</strong> 3.076
            </p>
          </motion.div>

          {/* HSC Card */}
          <motion.div
            className="bg-[#102f38] p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-lg text-gray-200">
              <strong>Institution:</strong> Kurmitola High School & College
            </p>
            <p className="text-lg text-gray-200">
              <strong>Group:</strong> Science
            </p>
            <p className="text-lg text-gray-200">
              <strong>Passing Year:</strong> 2017
            </p>
            <p className="text-lg text-gray-200">
              <strong>Result:</strong> 4.17
            </p>
          </motion.div>

          {/* SSC Card */}
          <motion.div
            className="bg-[#360940] p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-lg text-gray-200">
              <strong>Institution:</strong> Kurmitola High School & College
            </p>
            <p className="text-lg text-gray-200">
              <strong>Group:</strong> Science
            </p>
            <p className="text-lg text-gray-200">
              <strong>Passing Year:</strong> 2015
            </p>
            <p className="text-lg text-gray-200">
              <strong>GPA:</strong> 5.00
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
