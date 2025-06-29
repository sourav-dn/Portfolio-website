import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Event Manager Website",
    image: "https://i.ibb.co/0ybT0Bbm/event-managment.png",
    detailsLink: "/projects/1",
    description: "This is a Event Management website, this website include a home page,about page and a dashboard...and right side there is a login button..when user login or register he/she can easily enter his/her account and also browse any things.Anyone can update photo and name.",
  },
  {
    id: 2,
    name: "MangoFango Website",
    image: "https://i.ibb.co/201KWG1W/mango-fango.png",
    detailsLink: "/projects/2",
    description: "This is a plant management web application that allows users to log, track, and manage care tasks for their houseplants. Users can add their plants, log watering/fertilizing dates, set reminders, and track plant health. The platform will support user authentication and personal plant data management.",
  },
  {
    id: 3,
    name: "Service Scope Website",
    image: "https://i.ibb.co/8gMy72Ly/service-scope.png",
    detailsLink: "/projects/3",
    description: "A full-stack web application that allows users to review and interact with services. Users can register/login, add services, post reviews, update/delete their submissions, and browse all existing services and reviews.",
  },
  // Add more projects here as needed
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-950 to-[#1a1124] text-white relative overflow-hidden">
      {/* Enhanced Background Radial Gradient Glows for a more dynamic and layered effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Larger, more diffuse main glow */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-purple-700 opacity-8 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-cyan-700 opacity-8 blur-3xl rounded-full animate-pulse-slow delay-700"></div>
        
        {/* Smaller, more intense accent glows */}
        <div className="absolute top-1/2 left-[15%] w-64 h-64 bg-fuchsia-600 opacity-[0.05] blur-3xl rounded-full animate-spin-slow"></div>
        <div className="absolute top-[20%] right-[10%] w-56 h-56 bg-emerald-600 opacity-[0.05] blur-3xl rounded-full animate-spin-slow delay-1000"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="relative z-10">
            My <span className="text-purple-400">Creations</span>
          </span>
          {/* Refined subtle neon underline for the heading */}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full blur-sm opacity-75"></span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-28 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"></span>
        </h2>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10" // Increased gap for better spacing
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-purple-950 border border-purple-800 rounded-xl overflow-hidden
                         flex flex-col transform transition-all duration-500 ease-in-out
                         hover:border-fuchsia-500 hover:shadow-neon-purple-lg
                         shadow-inner-purple-subtle cursor-pointer" // Adjusted bg, border, and shadows
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: project.id * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide"
                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.8), 0 0 15px rgba(255,0,255,0.6)" }}> 
                  {project.name}
                </h3>
                <p className="text-purple-200 text-sm mb-4 flex-grow leading-relaxed"> {/* Changed text color */}
                  {project.description}
                </p>
                <Link
                  to={project.detailsLink}
                  className="mt-auto inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-fuchsia-600
                             text-white px-6 py-3 rounded-full shadow-lg hover:shadow-pink-glow
                             transition-all duration-300 text-center font-semibold tracking-wide
                             transform hover:-translate-y-1 hover:scale-105"
                >
                  View Details
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;