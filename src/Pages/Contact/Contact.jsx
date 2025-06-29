import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsappSquare } from "react-icons/fa";
import contactImg from "../../assets/Images/slider-img.png";
import bgImg from "../../assets/Images/footer.png";

const Contact = () => {
  return (
    <section
      className="py-16 lg:h-[500px] bg-[#160635]"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div
        className="max-w-screen-xl mx-auto px-6 h-full"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <motion.h2
          className="text-4xl font-semibold text-center text-white mb-8"
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
              Contact <span className="text-purple-400">Information</span>
            </span>
            {/* Refined subtle neon underline for the heading */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full blur-sm opacity-75"></span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-28 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"></span>
          </h2>
        </motion.h2>

        <div className="flex items-center justify-between h-full">
          {/* Left side image */}
          <motion.div
            className="w-1/2 flex justify-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <img src={contactImg} alt="Contact" className="w-full max-w-xs" />
          </motion.div>

          {/* Right side Contact Info */}
          <div className="w-1/2 grid grid-cols-1 gap-6">
            {/* Email Card */}
            <motion.div
              className="p-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FiMail className="mr-3 text-2xl text-white" />
                Email Address
              </h3>
              <p className="text-base md:text-lg text-gray-400 break-all">souravdn.dev@gmail.com</p>
            </motion.div>

            {/* Phone Number Card */}
            <motion.div
              className="p-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FiPhone className="mr-3 text-2xl text-white" />
                Phone Number
              </h3>
              <p className="text-lg text-gray-400">+8801984553445</p>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              className="p-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FaWhatsappSquare className="mr-3 text-2xl text-white" />
                WhatsApp Number
              </h3>
              <p className="text-lg text-gray-400">+8801984553445</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
